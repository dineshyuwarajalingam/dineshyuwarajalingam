const express = require('express');
const marqetaConfig = require('./marqetaConfig');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working!');
});

// Register user endpoint with Marqeta API call
// Function to register user with Marqeta
async function createUser(member) {
    if (!member.first_name || !member.last_name || !member.email) {
        throw new Error('first_name, last_name, and email are required');
    }

    const { baseUri, username, password } = marqetaConfig;

    const userResponse = await axios.post(
        `${baseUri}/users`,
        member,
        {
            auth: {
                username,
                password,
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    const userToken = userResponse.data.token;

    const cardPayload = {
        card_product_token: 'test_token',
        user_token: userToken
    };

    const cardResponse = await axios.post(
        `${baseUri}/cards`,
        cardPayload,
        {
            auth: {
                username,
                password,
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return { user: userResponse.data, card: cardResponse.data };
}

// Register user endpoint
app.post('/register-user', async (req, res) => {
    try {
        const userData = await createUser(req.body);
        res.status(201).json({ message: 'User registered with Marqeta successfully', data: userData });
    } catch (error) {
        console.error('Error registering user with Marqeta:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to register user with Marqeta', details: error.response?.data });
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
