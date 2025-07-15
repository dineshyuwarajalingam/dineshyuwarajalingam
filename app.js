// Required modules
const express = require('express');
const marqetaConfig = require('./marqetaConfig');
const axios = require('axios');
const QRCode = require('qrcode');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { PointsBank, initDb, ConversionRate } = require('./db');
const { convertAmountToPoints, getUserPoints, deductUserPoints } = require('./utility/pointsBankHelpers');
const Redis = require('ioredis');
const cors = require('cors');
const redis = new Redis();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

redis.on('connect', () => console.log('Connected to Redis'));
redis.on('error', err => console.error('Redis error:', err));

app.get('/', (req, res) => res.send('Server is working!'));

async function createUser(member) {
    if (!member.first_name || !member.last_name || !member.email) {
        throw new Error('first_name, last_name, and email are required');
    }
    const { baseUri, username, password } = marqetaConfig;

    const userResponse = await axios.post(`${baseUri}/users`, member, { auth: { username, password } });
    const userToken = userResponse.data.token;

    const cardPayload = { card_product_token: 'test_token', user_token: userToken };
    const cardResponse = await axios.post(`${baseUri}/cards`, cardPayload, { auth: { username, password } });

    await PointsBank.findOrCreate({ where: { user_token: userToken }, defaults: { points: 1000 } });

    return { user: userResponse.data, card: cardResponse.data };
}

async function createApplePayWPPJWT(cardToken) {
    const { baseUri, username, password } = marqetaConfig;
    const payload = { cardToken };

    const response = await axios.post(`${baseUri}/digitalwallets/wpp/applePayJWT`, payload, { auth: { username, password }, headers: { 'req-sys-id': uuidv4() } });
    return response.data;
}

app.post('/register-user', async (req, res) => {
    try {
        const userData = await createUser(req.body);
        res.status(201).json({ message: 'User registered with Marqeta successfully', data: userData });
    } catch (error) {
        console.error('Error registering user with Marqeta:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to register user with Marqeta', details: error.response?.data });
    }
});

async function fetchAllUsers(startIndex = 0, count = 100) {
    const { baseUri, username, password } = marqetaConfig;

    try {
        const response = await axios.get(`${baseUri}/users`, {
            auth: { username, password },
            params: { start_index: startIndex, count: count },
        });
        return response.data;
    } catch (error) {
        throw new Error(
            `Failed to fetch users from Marqeta: ${error.response?.data || error.message}`
        );
    }
}

// GET /users - List all users (basic pagination with limit)
app.get("/users", async (req, res) => {
    try {
        const startIndex = parseInt(req.query.start_index) || 0;
        const count = parseInt(req.query.count) || 100;

        const usersData = await fetchAllUsers(startIndex, count);

        res.json({
            users: usersData.data || [],         // <-- fix here, use .data
            start_index: usersData.start_index || 0,
            count: usersData.count || 0,
            total_count: usersData.total_count || 0,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// GET /cards/user/:userToken
app.get("/cards/user/:userToken", async (req, res) => {
    const { userToken } = req.params;
    const { baseUri, username, password } = marqetaConfig;

    try {
        const response = await axios.get(`${baseUri}/cards/user/${userToken}`, {
            auth: { username, password },
        });

        res.json({
            cards: response.data.data || [],
            count: response.data.count,
            start_index: response.data.start_index,
            end_index: response.data.end_index,
        });
    } catch (error) {
        console.error("Error fetching cards for user:", error.response?.data || error.message);
        res.status(500).json({
            error: error.response?.data || error.message,
        });
    }
});

app.get("/webhooks", async (req, res) => {
    const { baseUri, username, password } = marqetaConfig;

    try {
        const response = await axios.get(`${baseUri}/webhooks`, {
            auth: { username, password },
        });

        res.json({ webhooks: response.data.data || [] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch webhooks" });
    }
});

// POST /webhooks - create new webhook
app.post("/webhooks", async (req, res) => {
    const { baseUri, username, password } = marqetaConfig;
    const { name, config, events } = req.body;

    if (!name || !config?.url || !events) {
        return res.status(400).json({ error: "Missing required fields: name, config.url, or events" });
    }

    const payload = {
        name,
        config: {
            url: config.url,
            basic_auth_username: config.basic_auth_username || "",
            basic_auth_password: config.basic_auth_password || "",
        },
        events,
    };

    try {
        const response = await axios.post(`${baseUri}/webhooks`, payload, {
            auth: { username, password },
        });

        res.status(201).json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to create webhook" });
    }
});

// PUT /webhooks/:token - update webhook by token
app.put("/webhooks/:token", async (req, res) => {
    const { baseUri, username, password } = marqetaConfig;
    const { token } = req.params;
    const { name, config, events } = req.body;

    if (!name || !config?.url || !events) {
        return res.status(400).json({ error: "Missing required fields: name, config.url, or events" });
    }

    const payload = {
        name,
        config: {
            url: config.url,
        },
        events,
    };

    try {
        const response = await axios.put(`${baseUri}/webhooks/${token}`, payload, {
            auth: { username, password },
        });

        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to update webhook" });
    }
});

app.get("/program-gateway/:token", async (req, res) => {
    const { baseUri, username, password } = marqetaConfig;
    const { token } = req.params;

    if (!token) {
        return res.status(400).json({ error: "Token parameter is required" });
    }

    try {
        const response = await axios.get(`${baseUri}/fundingsources/programgateway/${token}`, {
            auth: { username, password },
        });

        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(err.response?.status || 500).json({ error: "Failed to fetch program gateway" });
    }
});


app.put("/fundingsources/programgateway/:token", async (req, res) => {
    const { baseUri, username, password } = marqetaConfig;
    const { token } = req.params;
    const { url, basic_auth_username, basic_auth_password } = req.body;

    // Validate required fields
    if (!url || !basic_auth_username || !basic_auth_password) {
        return res.status(400).json({
            error: "Missing required fields: url, basic_auth_username, basic_auth_password",
        });
    }

    const payload = {
        url,
        basic_auth_username,
        basic_auth_password,
    };

    try {
        const response = await axios.put(
            `${baseUri}/fundingsources/programgateway/${token}`,
            payload,
            {
                auth: { username, password },
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
            error: "Failed to update program gateway funding source",
            details: error.response?.data || error.message,
        });
    }
});

app.get('/transactions', async (req, res) => {
    const { baseUri, username, password } = marqetaConfig;

    try {
        const response = await axios.get(`${baseUri}/transactions`, {
            auth: { username, password },
        });

        // Return only the transaction data array or empty array if none
        res.json({ transactions: response.data.data || [] });
    } catch (err) {
        console.error('Failed to fetch transactions:', err.message);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

app.post('/my_gateway', async (req, res) => {
    const jitFunding = req.body.gpa_order?.jit_funding;

    if (!jitFunding) {
        return res.status(400).json({ error: 'Missing jit_funding' });
    }

    const userToken = jitFunding.user_token;
    const amount = parseFloat(jitFunding.amount);

    // Check user points (replace with your real logic)
    const pointsBalance = await getUserPoints(userToken);
    const pointsNeeded = await convertAmountToPoints(amount);

    if (pointsBalance >= pointsNeeded) {
        // Deduct points if you want to do it here, or do it in webhook notification instead
        await deductUserPoints(userToken, pointsNeeded);

        return res.status(200).json({
            jit_funding: {
                token: jitFunding.token,
                method: jitFunding.method,
                user_token: userToken,
                amount: amount.toFixed(2),
                original_jit_funding_token: jitFunding.token
            }
        });
    } else {
        return res.status(402).json({
            result: 'DECLINE',
            reason: 'Insufficient points balance'
        });
    }
});

app.post('/marqeta-jit-funding', async (req, res) => {
    console.log('Received post-decision notification:', req.body);
    // update ledger, audit, etc.
    res.status(200).send('OK'); // just acknowledge receipt
});


async function addUserPoints(userToken, points) {
    const [user, created] = await PointsBank.findOrCreate({ where: { user_token: userToken }, defaults: { points } });
    if (!created) {
        user.points += points;
        await user.save();
    }
    return user;
}

app.post('/add-points', async (req, res) => {
    const { user_token, points } = req.body;
    if (!user_token || typeof points !== 'number' || points <= 0) {
        return res.status(400).json({ error: 'user_token and positive points are required.' });
    }
    try {
        const updatedUser = await addUserPoints(user_token, points);
        res.status(200).json({ message: `Added ${points} points to user ${user_token}.`, user_token: updatedUser.user_token, updated_points_balance: updatedUser.points });
    } catch (err) {
        console.error('Error adding points:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/get-points', async (req, res) => {
    const { user_token } = req.body;
    if (!user_token) {
        return res.status(400).json({error: 'user_token is required.'});
    }
    try{
        const points = await getUserPoints(user_token);
        res.status(200).json({ user_token, points });
    }catch (err){
        console.error('Error fetching points:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/conversion-rate', async (req, res) => {
    const { rate } = req.body;

    if (!rate || rate <= 0) {
        return res.status(400).json({ error: 'Rate must be a positive number.' });
    }

    try {
        const [rateRecord, created] = await ConversionRate.findOrCreate({
            where: { id: 1 },
            defaults: { rate }
        });

        if (!created) {
            rateRecord.rate = rate;
            await rateRecord.save();
        }

        res.json({ message: 'Conversion rate updated.', rate: rateRecord.rate });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update conversion rate.' });
    }
});

app.get('/conversion-rate', async (req, res) => {
    try {
        const rateRecord = await ConversionRate.findOne();
        if (!rateRecord) {
            return res.status(404).json({ error: 'No conversion rate configured.' });
        }
        res.json({ rate: rateRecord.rate });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch conversion rate.' });
    }
});


app.post('/apple-pay-wpp-jwt', async (req, res) => {
    const { card_token } = req.body;
    if (!card_token) {
        return res.status(400).json({ error: 'Missing card_token in request body.' });
    }
    try {
        const result = await createApplePayWPPJWT(card_token);
        res.status(201).json({ message: 'Apple Pay WPP JWT created successfully', data: result });
    } catch (error) {
        console.error('Error creating Apple Pay WPP JWT:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to create Apple Pay WPP JWT', details: error.response?.data });
    }
});

app.get('/generate-wallet-qr/:cardToken', async (req, res) => {
    const { cardToken } = req.params;
    const url = `http://localhost:3000/provision-page?cardToken=${cardToken}`;
    try {
        const qr = await QRCode.toDataURL(url);
        res.send(`<img src="${qr}" alt="Wallet QR Code" />`);
    } catch (err) {
        res.status(500).send('Failed to generate QR code');
    }
});

app.get('/provision-page', (req, res) => res.sendFile(path.join(__dirname, 'public/provision.html')));

initDb().then(() => console.log('Database connected and synced.')).catch(err => console.error('Failed to connect to database:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
