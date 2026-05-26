"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'clowd9/1.10.4 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * A simple check to validate the connection is active
     *
     * @summary HealthCheck
     * @throws FetchError<400, types.HealthCheckResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.HealthCheckResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.HealthCheckResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.healthCheck = function () {
        return this.core.fetch('/healthz', 'get');
    };
    /**
     * Successful authentication will provide you with a JSON Web Token (JWT), for accessing
     * the CLOWD9 API suite. The JWT will need to be refreshed every 120 minutes using the
     * Refresh Access Token request. After 720 minutes, an Access Authentication request is
     * required
     *
     * @summary Access Authentication
     * @throws FetchError<400, types.AuthenticateApiResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.AuthenticateApiResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.AuthenticateApiResponse403> When access token provided does not have access to a resource
     * @throws FetchError<500, types.AuthenticateApiResponse500>
     */
    SDK.prototype.authenticateApi = function (body) {
        return this.core.fetch('/v1/auth', 'post', body);
    };
    /**
     * To refresh a previously expired JWT token which has exceeded the 120 minutes lifespan
     *
     * @summary Refresh Access Token
     * @throws FetchError<400, types.RefreshTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.RefreshTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.RefreshTokenResponse403> When access token provided does not have access to a resource
     * @throws FetchError<500, types.RefreshTokenResponse500>
     */
    SDK.prototype.refreshToken = function (body) {
        return this.core.fetch('/v1/auth/refresh', 'post', body);
    };
    /**
     * The Get CLOWD9 OpenAPI API allows you to retrieve the specification for the API.\ The
     * specification is provided in JSON or YAML format.
     *
     * @summary Get CLOWD9 OpenApi specification
     * @throws FetchError<400, types.GetClowd9ApiResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetClowd9ApiResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetClowd9ApiResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getClowd9Api = function (metadata) {
        return this.core.fetch('/v1/clowd9api', 'get', metadata);
    };
    /**
     * Enables you to create the Customer in advance of creating and issuing a Card. If you
     * wish to create the Customer and Card at the same time, use the Onboard Card API
     *
     * @summary Create Customer
     * @throws FetchError<400, types.CreateCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateCustomerResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.createCustomer = function (body) {
        return this.core.fetch('/v1/customers', 'post', body);
    };
    /**
     * The List Customers API allows you to retrieve your Customer records. \ The API provides
     * the opportunity to limit and sort the records to be returned.
     *
     * @summary List Customers
     * @throws FetchError<400, types.ListCustomersResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListCustomersResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListCustomersResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.listCustomers = function (metadata) {
        return this.core.fetch('/v1/customers', 'get', metadata);
    };
    /**
     * Retrieves the Customer information using the External Reference previously provided
     *
     * @summary Retrieve Customer Information via the External Reference
     * @throws FetchError<400, types.GetCustomerByExternalRefResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCustomerByExternalRefResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCustomerByExternalRefResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getCustomerByExternalRef = function (metadata) {
        return this.core.fetch('/v1/customers/ref/{external_ref}', 'get', metadata);
    };
    /**
     * Retrieves the Customer Information for a specific customer_id
     *
     * @summary Retrieve Customer Information
     * @throws FetchError<400, types.GetCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCustomerResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getCustomer = function (metadata) {
        return this.core.fetch('/v1/customers/{customer_id}', 'get', metadata);
    };
    /**
     * Update the Customer information previously provided
     *
     * @summary Update Customer
     * @throws FetchError<400, types.UpdateCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpdateCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpdateCustomerResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.updateCustomer = function (body, metadata) {
        return this.core.fetch('/v1/customers/{customer_id}', 'post', body, metadata);
    };
    /**
     * Provides the Public Key to store and retrieve the PCI data via the Secure Frame Work
     *
     * @summary Get Customer Key
     * @throws FetchError<400, types.GetSecureFrameKeyResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetSecureFrameKeyResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetSecureFrameKeyResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getSecureFrameKey = function (metadata) {
        return this.core.fetch('/v1/customers/{customer_id}/secure-key', 'get', metadata);
    };
    /**
     * Returns any Cards associated with the customer_id
     *
     * @summary Find Cards By Customer Id
     * @throws FetchError<400, types.FindCardsByCustomerIdResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.FindCardsByCustomerIdResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.FindCardsByCustomerIdResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.findCardsByCustomerId = function (metadata) {
        return this.core.fetch('/v1/customers/{customer_id}/cards', 'get', metadata);
    };
    /**
     * Returns any Accounts associated with the customer_id
     *
     * @summary Find Accounts By Customer Id
     * @throws FetchError<400, types.FindAccountsByCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.FindAccountsByCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.FindAccountsByCustomerResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.findAccountsByCustomer = function (metadata) {
        return this.core.fetch('/v1/customers/{customer_id}/accounts', 'get', metadata);
    };
    /**
     * The Create Account API enables you to create either a Single or Multi Asset Accounts. If
     * your Product supports Multi Asset, one request is required and all the Accounts created
     * will be returned in the response
     *
     * @summary Create Account
     * @throws FetchError<400, types.CreateAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.createAccount = function (body) {
        return this.core.fetch('/v1/accounts', 'post', body);
    };
    /**
     * The Retrieve Account Information API enables you to retrieve the information held for a
     * specific account_id
     *
     * @summary Retrieve Account Information
     * @throws FetchError<400, types.GetAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getAccount = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}', 'get', metadata);
    };
    /**
     * The Set Account Status API enables you to change the status of an Account.
     *
     * **active**: Account is active and all activity is permitted.
     *
     * **closed**: Where the Account is no longer required. This status cannot be reversed.
     *
     * **freeze**: A temporary block to the Account, preventing any activity. This status can
     * be changed to active or closed
     *
     * @summary Set Account Status
     * @throws FetchError<400, types.UpdateAccountStatusResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpdateAccountStatusResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpdateAccountStatusResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.updateAccountStatus = function (body, metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/status', 'post', body, metadata);
    };
    /**
     * Allows you to link the Customer to an Account
     *
     * @summary Customer to Account Link
     * @throws FetchError<400, types.LinkCustomerWithAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.LinkCustomerWithAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.LinkCustomerWithAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.linkCustomerWithAccount = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/customers/{customer_id}', 'put', metadata);
    };
    /**
     * To remove the Customer and Account link
     *
     * @summary Remove the Customer to Account Link
     * @throws FetchError<400, types.UnlinkCustomerFromAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UnlinkCustomerFromAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UnlinkCustomerFromAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.unlinkCustomerFromAccount = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/customers/{customer_id}', 'delete', metadata);
    };
    /**
     * Retrieve card(s) linked to an Account by account_id
     *
     * @summary Retrieve card(s) linked to an Account by account_id
     * @throws FetchError<400, types.GetAccountLinkedCardsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetAccountLinkedCardsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetAccountLinkedCardsResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getAccountLinkedCards = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/cards', 'get', metadata);
    };
    /**
     * To link a card_id to an account_id. The card_id can be linked to more than one Account
     * where required
     *
     * @summary Card to Account Link
     * @throws FetchError<400, types.LinkCardWithAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.LinkCardWithAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.LinkCardWithAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.linkCardWithAccount = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/cards/{card_id}', 'put', metadata);
    };
    /**
     * To remove an existing card_id to account_id link
     *
     * @summary Remove the Card to Account link
     * @throws FetchError<400, types.UnlinkCardFromAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UnlinkCardFromAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UnlinkCardFromAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.unlinkCardFromAccount = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/cards/{card_id}', 'delete', metadata);
    };
    /**
     * The Increase Account Balance allows you to increase the balance
     *
     * @summary Increase Account Balance
     * @throws FetchError<400, types.IncreaseAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.IncreaseAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.IncreaseAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.increaseAccountBalance = function (body, metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/increase', 'post', body, metadata);
    };
    /**
     * The Decreased Account Balance allows you to decrease the Available balance
     *
     * @summary Decrease Account Balance
     * @throws FetchError<400, types.DecreaseAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.DecreaseAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.DecreaseAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.decreaseAccountBalance = function (body, metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/decrease', 'post', body, metadata);
    };
    /**
     * Corrects account's available and actual balances by the given amount and creates a
     * ledger entry with operation type `InternalCorrection`.
     *
     * @summary Correct Account Balance
     * @throws FetchError<400, types.CorrectAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CorrectAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CorrectAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.correctAccountBalance = function (body, metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/correct', 'post', body, metadata);
    };
    /**
     * Enables your Customers to transfer funds from one Account to another. This could be from
     * their main account to their savings Account, to another Customers Account under your
     * Program
     *
     * @summary Account to Account Transfer
     * @throws FetchError<400, types.TransferFromAccountToAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.TransferFromAccountToAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.TransferFromAccountToAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.transferFromAccountToAccount = function (body) {
        return this.core.fetch('/v1/accounts/transfer', 'post', body);
    };
    /**
     * Retrieves the Actual, Available Balances together with any Authorized amounts & if
     * applicable the overdraft value for a specific account_id
     *
     * @summary Retrieve Account Balances
     * @throws FetchError<400, types.GetAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getAccountBalance = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/balances', 'get', metadata);
    };
    /**
     * Retrieves all entries for a specific account_id. Specific times can be specified where
     * required
     *
     * @summary Retrieve Ledger Entries for an Account
     * @throws FetchError<400, types.GetLedgerEntriesForAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetLedgerEntriesForAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetLedgerEntriesForAccountResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getLedgerEntriesForAccount = function (metadata) {
        return this.core.fetch('/v1/accounts/{account_id}/ledger-entries', 'get', metadata);
    };
    /**
     * Returns the Behaviour(s) and the associated ID's configured
     *
     * @summary List Behaviours
     * @throws FetchError<400, types.ListBehavioursResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListBehavioursResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListBehavioursResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.listBehaviours = function (metadata) {
        return this.core.fetch('/v1/behaviours', 'get', metadata);
    };
    /**
     * Returns the Behaviour(s) together with the Groups and short names configured
     *
     * @summary Get Behaviour Groups and Short Names
     * @throws FetchError<400, types.GetBehaviourResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetBehaviourResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetBehaviourResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getBehaviour = function (metadata) {
        return this.core.fetch('/v1/behaviours/{behaviour_id}', 'get', metadata);
    };
    /**
     * Returns the Groups, Short Names and Thresholds configured for a specific behaviour_id
     *
     * @summary Get Behaviour Limits and Thresholds
     * @throws FetchError<400, types.GetBehaviourLimitsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetBehaviourLimitsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetBehaviourLimitsResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getBehaviourLimits = function (metadata) {
        return this.core.fetch('/v1/behaviours/{behaviour_id}/limits', 'get', metadata);
    };
    /**
     * The Create Card API allows for the creation of a single physical or virtual card. When
     * submitting a Create Card request, the identifier of an existing customer needs to be
     * transmitted as part of the request. The request also gives a chance to provide 3DS
     * related data. Its structure and content are subject to the product configuration
     * parameters.
     * It returns card_id, customer_id and product_id.
     *
     * @summary Create Card
     * @throws FetchError<400, types.CreateCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateCardResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.createCard = function (body) {
        return this.core.fetch('/v1/cards', 'post', body);
    };
    /**
     * The onboard Card API allows for the creation of a single physical or virtual card_id and
     * customer_id at the same time
     *
     * @summary Onboard Card
     * @throws FetchError<400, types.OnboardCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.OnboardCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.OnboardCardResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.onboardCard = function (body) {
        return this.core.fetch('/v1/cards/onboard', 'post', body);
    };
    /**
     * The Set Card Status API will enable you to change the status of a specific card_id.
     *
     * **active**: Card is active and system allows the transaction to be processed.
     *
     * **destroyed**: Where your customer decides they no longer require the card or for other
     * reasons the card is to be terminated. This status cannot be reversed.
     *
     * **freeze**: A temporary block at the customer's request. The status can be reversed upon
     * the customer's request or changed to another status, for example, lost/stolen.
     *
     * **administrative**: Where you require the card to be blocked pending further
     * investigation. This status allows your customer service team to differentiate between
     * potential fraudulent use and the card being blocked by the customer's request.
     *
     * **fraud**: Post investigations or following your customer identifying fraudulent use,
     * this status can be used subject to network dispute rules as they may require the card to
     * be in a stolen status first.
     *
     * **stolen** - Card has been marked as stolen. This status can't be reverted but can be
     * changed to fraud if required.
     *
     * **lost**: Card has been marked as lost. This status cannot be reverted but can be
     * changed to fraud if required.
     *
     * Status generated by CLOWD9:
     *
     * **risk**: When a fraud and risk rule has been triggered, CLOWD9 will automatically
     * change the status preventing further authorizations. This status can be updated to the
     * relevant status post your investigations.
     *
     * **inactive**: Assigned to newly created card_ids. This status is changed to 'active'
     * upon card activation.
     *
     * **expired**: This status is only to be used by CLOWD9 when the expiry date has passed.
     *
     * @summary Set Card Status
     * @throws FetchError<400, types.SetCardStatusResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.SetCardStatusResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.SetCardStatusResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.setCardStatus = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/status', 'post', body, metadata);
    };
    /**
     * To retrieve the card_id using the Primary Account Number (PAN)
     *
     * @summary Query By Pan
     * @throws FetchError<400, types.GetCardIdByPanResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardIdByPanResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardIdByPanResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getCardIdByPan = function (body) {
        return this.core.fetch('/v1/cards/query-by-pan', 'post', body);
    };
    /**
     * The Get Card API provides you with the non-sensitive information for a specific card_id
     * card.
     *
     * @summary Get Card
     * @throws FetchError<400, types.GetCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getCard = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}', 'get', metadata);
    };
    /**
     * The Update Delivery Address endpoint allows you to update the delivery address held for
     * your customer. CLOWD9 will populate the delivery address  during physical card creation
     * transmitted to your Card Manufacturer via the card file. Where CLOWD9 do not hold a
     * delivery address, the cardholder address will be used instead. Please note, updating the
     * delivery address via this API will update the Customer address (used for address
     * verification). If the Customer address is to be updated, please use the Update Customer
     * endpoint.
     *
     * @summary Update Delivery
     * @throws FetchError<400, types.UpdateDeliveryResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpdateDeliveryResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpdateDeliveryResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.updateDelivery = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/delivery', 'patch', body, metadata);
    };
    /**
     * Card replacement is normally as a result of a Physical or Virtual card either being
     * lost, stolen or compromised and used fraudulently. \ A new PAN, CVV2 and Expiry is
     * created following a successful request. The configuration for the previous card, for
     * example limits, usages, will be copied over.
     *
     *  For physical cards, a new PIN is also required either set by you randomly or specified
     * by your customer.
     *
     * @summary Replace Card
     * @throws FetchError<400, types.ReplaceCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ReplaceCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ReplaceCardResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.replaceCard = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/replace', 'post', body, metadata);
    };
    /**
     * The Renew Card API allows you to issue the same PAN with a new Expiry and CVV2 in
     * advance of expiration providing your Cardholders with a positive seamless journey.
     * Existing  card limits, usage and history will be linked to the Renewed card. If the
     * expiration date has passed, the Renewal Card API can still be used. We recommend the
     * existing card_id is not renewed when the status is either a risk or administrative until
     * investigations are complete to avoid potential misuse.
     *
     *  Where the existing card_id status is either Lost, Stolen or Fraud, you will need to use
     * the Replace Card API to create a new PAN, Expiry and CVV2.
     *
     * @summary Renew Card
     * @throws FetchError<400, types.RenewCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.RenewCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.RenewCardResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.renewCard = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/renew', 'post', body, metadata);
    };
    /**
     * Returns the details of a secure card
     *
     * @summary Get Secure Card Details
     * @throws FetchError<400, types.GetSecureCardDetailsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetSecureCardDetailsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetSecureCardDetailsResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getSecureCardDetails = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/secure-details', 'post', body, metadata);
    };
    /**
     * The Get Card Usage Rules API returns the current status (true or false) for all of the
     * Card Usage Rules held for a specific card_id. To update one or more of the Usage Rules,
     * use the Set Card Usages Rules API.
     *
     * @summary Get Card Usage Rules
     * @throws FetchError<400, types.FindCardUsageResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.FindCardUsageResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.FindCardUsageResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.findCardUsage = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/usage', 'get', metadata);
    };
    /**
     * Set Card Usage Rules for a specific card_id.
     *
     * **allow_offline_pin**:
     *
     *  - **true :** Offline PIN transactions are supported and follow the Offline PIN
     * authorization parameters.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_online_pin**:
     *
     *  - **true :** Online PIN verification and authorization rules will apply.
     *
     *  - **false :** CLOWD9 will decline any Online PIN requests as not permitted.
     *
     * **allow_signature**:
     *
     *  - **true :** Authorization rules will apply for Signature verified requests.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_no_verification**:
     *
     *  - **true** : All CHIP authorization rules will apply where Customer verification (PIN,
     * Signature) has not been provided.
     *
     *   - **false** : CLOWD9 will decline the request as not permitted.
     *
     * **atm_pin_change**:
     *
     *  - **true :** Providing the correct PIN has been entered and verified, authorization
     * rules will apply.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **atm_pin_unblock**:
     *
     *  - **true :** CLOWD9 will verify the Online PIN. Providing the correct PIN has been
     * entered, authorization rules will apply to Unblock the PIN.
     *
     *  - **false :** CLOWD9 will declined the request as not permitted.
     *
     * **allow_atm_balance**:
     *
     *  - **true :** Providing the correct PIN has been entered and verified, ATM Balance
     * authorization rules will be applied. CLOWD9 will return the balance held for On Ledger
     * products. For Off Ledger products, the value(s) provided in your response will be
     * returned to the Network.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_technical_fallback**:
     *
     *  - **true :** A transaction identified as technical fallback will be permitted and
     * authorization rules will apply.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_contactless**:
     *
     *  - **true :** CLOWD9 will follow the Contactless authorisation rules.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_magstripe**:
     *
     *  - **true :** CLOWD9 will follow the magstripe authorization parameters.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_international_transactions**:
     *
     *  - **true :** Authorization rules will apply where the merchant currency differs to the
     * Account and card currency.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_atm_withdrawal**:
     *
     *  - **true :** Providing the correct PIN has been entered and verified, ATM withdrawal
     * authorization rules will apply.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_cashback**:
     *
     *  - **true :** A transaction will be permitted and the Cashback authorization rules will
     * apply where Cashback is included.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_cash_advance**:
     *
     *  - **true :** Authorization rules will be applied for Cash Advance merchants.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_credit_to_card**:
     *
     *  - **true :** Credit to Card authorization rules will apply.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_refund**:
     *
     *  - **true :** Refund authorization rules will apply. Funds should not be credited for
     * standard refunds until the clearing record has been received and processed.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_ecomm**:
     *
     *  - **true :** E-comm authorization rules will apply.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_card_not_present**:
     *
     *  - **true :** Authorisation rules will apply for Card Not Present requests.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_avs_fails**:
     *
     *  - **true :** Authorization rules will be applied following an AVS fail.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_recurring**:
     *
     *  - **true :** Authorization rules will apply where Recurring indicators have been
     * provided.
     *
     *  - **false :** Any requests that identify as a recurring payment will be declined as not
     * be permitted.
     *
     * **allow_card_on_file**:
     *
     *  - **true :** Authorization rules will apply for a Credential on File request.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_no_cvv2**:
     *
     *  - **true :** Customer Not Present authorization rules will apply where the CVV2 is not
     * received.
     *
     *  - **false :** CLOWD9 will decline the request as not permitted.
     *
     * **allow_domestic_ecomm_only**:
     *
     *  - **true :** E-comm merchants where the country code differs to the country of card
     * issuance will be declined as not be permitted.
     *
     *  - **false :** No country code restrictions for e-comm merchants (outside of sanctions
     * at network level).
     *
     * @summary Set Card Usage Rules
     * @throws FetchError<400, types.SetCardUsageResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.SetCardUsageResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.SetCardUsageResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.setCardUsage = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/usage', 'post', body, metadata);
    };
    /**
     * The Upgrade Card Virtual endpoint allows you to upgrade the virtual card to physical
     * card.
     *
     * @summary Upgrade Card Virtual
     * @throws FetchError<400, types.UpgradeCardVirtualResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpgradeCardVirtualResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpgradeCardVirtualResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.upgradeCardVirtual = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/upgrade', 'post', body, metadata);
    };
    /**
     * The Unlock PIN allows you to reset your Customers PIN at card_id level. Following a
     * successful response, CLOWD9 will reset the Online PIN Counters and transmit a PIN script
     * during the next authorisation request. CLOWD9 recommends the first transaction following
     * a PIN unblock is made via an ATM to ensure the PIN unblock process is seamless for the
     * Customers. If using a merchant terminal, the first transaction may result in a decline
     * as the Chip will require the script to be received which can only occur after the
     * request.
     *
     * @summary Unblock PIN
     * @throws FetchError<400, types.UnblockPinResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UnblockPinResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UnblockPinResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.unblockPin = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/unblock-pin', 'post', body, metadata);
    };
    /**
     * Retrieve all card limits
     *
     * @summary List Card Limits and Thresholds
     * @throws FetchError<400, types.ListCardLimitsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListCardLimitsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListCardLimitsResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.listCardLimits = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/limits', 'get', metadata);
    };
    /**
     * Assign behaviour to card
     *
     * @throws FetchError<400, types.CardAssignBehaviourResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CardAssignBehaviourResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CardAssignBehaviourResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.cardAssignBehaviour = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/behaviour', 'patch', body, metadata);
    };
    /**
     * Returns the limit_name and thresholds configured for the limit_short_name
     *
     * @summary Get Card Limit
     * @throws FetchError<400, types.GetCardLimitResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardLimitResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardLimitResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getCardLimit = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/limits/{limit_short_name}', 'get', metadata);
    };
    /**
     * To update a limit_short_name for an individual card_id. You will not be able to exceed
     * the value configured for the limit.
     *
     * **ecomm_acc**: Total amount that can be spent across all ecommerce transactions
     *
     * **ecomm_counter**: Total number of ecommerce transactions that can be made
     *
     * **atm_acc**: The total amount that can be withdrawn via an ATM
     *
     * **atm_counter**: The total number of ATM withdrawals
     *
     * **card_not_present_acc**: The total amount of card not present transactions that can be
     * made
     *
     * **card_not_present_acc**: The total number of card not present transactions that can be
     * made
     *
     * **cash_advance_acc**: The total amount of Cash Advance payments that can be made
     *
     * **cash_advance_counter**: The total number of Contactless payments that can be made
     * before PIN authentication is required
     *
     * **credit_acc**: The total amount of Refund / Returns that can be made
     *
     * **credit_counter**: The total number of Refund / Returns that can be made
     *
     * **domestic_acc**: The total amount of Domestic payments that can be made
     *
     * **domestic_counter**: The total number of Domestic payments that can be made
     *
     * **international_acc**: The total amount of International payments that can be made
     *
     * **international_counter**: The total number of International payments that can be made
     *
     * **moneysend_acc**: The total amount of Moneysend payments that can be received
     *
     * **moneysend_counter**: The total number of Moneysend payments that can be received
     *
     * **pos_combined_acc**: The total amount to be checked payments that can be made
     *
     * **pos_combined_counter**: The total number of to be check  contact payments that can be
     * made
     *
     * **pos_contact_acc**: The total amount of contact payments that can be made
     *
     * **pos_contact_counter**: The total number of contact payments that can be made
     *
     * **pos_contactless_acc**: The total amount of Contactless payments that can be made
     * before PIN authentication is required
     *
     * **pos_contactless_counter**: The total number of Contactless payments that can be made
     *
     * **quashi_cash_acc**: The total amount of quashi cash transactions that can be made
     *
     * **quashi_cash_counter**: The total number of quashi cash transactions that can be made
     *
     * **sum_acc**: The total amount of transactions that can be made
     *
     * @summary Update Card Limit
     * @throws FetchError<400, types.UpsertCardLimitResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpsertCardLimitResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpsertCardLimitResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.upsertCardLimit = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/limits/{limit_short_name}', 'put', body, metadata);
    };
    /**
     * This endpoint allows you to set a new PIN value, either on behalf of your Customer or a
     * value set by them at card_id level. The new PIN value must be provided to CLOWD9
     * otherwise the request will be declined. The secure_pin value has to be provided and it
     * should be a PIN encrypted with a customer's public key. Use Get Customer Key endpoint in
     * Customer Management Section to retrieve the key
     *
     * @summary Set Secure PIN
     * @throws FetchError<400, types.SetSecurePinResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.SetSecurePinResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.SetSecurePinResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.setSecurePin = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/set-secure-pin', 'post', body, metadata);
    };
    /**
     * To Set a new or update an existing 3D Secure password
     *
     * @summary Password Authentication
     * @throws FetchError<400, types.TdsPasswordAuthenticationResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.TdsPasswordAuthenticationResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.TdsPasswordAuthenticationResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.tdsPasswordAuthentication = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/3ds/password-authentication', 'post', body, metadata);
    };
    /**
     * Following an Authentication Request, the cardholder will be required to respond in order
     * for the transaction to proceed. This API enables you to provide the response. There may
     * be occasions when the cardholder is unable to respond. The reason_code will provide
     * additional details on the reason for a decline.
     *
     * @summary OOB Authentication Result
     * @throws FetchError<400, types.RelayOobAuthResultResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.RelayOobAuthResultResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.RelayOobAuthResultResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.relayOOBAuthResult = function (body, metadata) {
        return this.core.fetch('/v1/tds/{sp_transaction_id}/oob-result', 'post', body, metadata);
    };
    SDK.prototype.createGoogleProvisioningToken = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/tokens/google/push-provisioning', 'post', body, metadata);
    };
    /**
     * Retrieves all DPans associated to a card_id, together with the information held for each
     * DPAN.
     *
     * @summary Retrieve All DPANs for a Card
     * @throws FetchError<400, types.ListCardTokensResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListCardTokensResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListCardTokensResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.listCardTokens = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/tokens', 'get', metadata);
    };
    /**
     * The Resync DPAN API is used to resynchronize the DPAN with the Token Service Provider
     *
     * @summary Resync DPAN
     * @throws FetchError<400, types.ResyncCardTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ResyncCardTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ResyncCardTokenResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.resyncCardToken = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/tokens/{dpan_id}/resync', 'post', metadata);
    };
    /**
     * Returns detailed information about a specific DPAN associated to a card_id and all
     * devices associated with the DPAN
     *
     * @summary Retrieve One DPAN
     * @throws FetchError<400, types.GetCardTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardTokenResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getCardToken = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/tokens/{dpan_id}', 'get', metadata);
    };
    /**
     * The Set DPan Status API will enable you to change the status of a specific DPAN.
     *
     * **active**: Activates an inactive DPAN or returns to active where previously set to
     * freeze
     *
     * **freeze:** A temporary block to the DPAN preventing use. The status can be returned to
     * active or cancel where the device cannot be located
     *
     * **cancel**: Cancels the DPAN permanently. Used where the Authentication (Yellow path)
     * has not been successful or where the device has been lost / stolen. The Customer will be
     * required to re-Tokenize their card
     *
     * @summary Set DPAN Status
     * @throws FetchError<400, types.StatusChangeCardTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.StatusChangeCardTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.StatusChangeCardTokenResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.statusChangeCardToken = function (body, metadata) {
        return this.core.fetch('/v1/cards/{card_id}/tokens/{dpan_id}', 'patch', body, metadata);
    };
    /**
     * -| Retrieves the complete lifecycle history for a specific DPAN (token), including all
     * status changes, actions, and events that occurred during the token's lifetime
     *
     * @summary Retrieve Token Lifecycle History
     * @throws FetchError<400, types.GetTokenLifecycleResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetTokenLifecycleResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetTokenLifecycleResponse403> When access token provided does not have access to a resource
     * @throws FetchError<404, types.GetTokenLifecycleResponse404> Token not found
     */
    SDK.prototype.getTokenLifecycle = function (metadata) {
        return this.core.fetch('/v1/cards/{card_id}/tokens/{dpan_id}/lifecycle', 'get', metadata);
    };
    /**
     * Creation of a Bulk Address which will be provided to your Card Manufacturer in the Card
     * Embossing File for bulk dispatch
     *
     * @summary Create Bulk Address
     * @throws FetchError<400, types.CreateBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateBulkAddressResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.createBulkAddress = function (body, metadata) {
        return this.core.fetch('/v1/schedule/{card_file_schedule_id}/bulk-address', 'post', body, metadata);
    };
    /**
     * Allows you to retrieve the information held for a bulk_address_id
     *
     * @summary Retrieve Bulk Address Information
     * @throws FetchError<400, types.GetBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetBulkAddressResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getBulkAddress = function (metadata) {
        return this.core.fetch('/v1/schedule/{card_file_schedule_id}/bulk-address/{bulk_address_id}', 'get', metadata);
    };
    /**
     * Allows you to update any information for an existing Bulk Address
     *
     * @summary Update Bulk Address
     * @throws FetchError<400, types.UpdateBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpdateBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpdateBulkAddressResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.updateBulkAddress = function (body, metadata) {
        return this.core.fetch('/v1/schedule/{card_file_schedule_id}/bulk-address/{bulk_address_id}', 'post', body, metadata);
    };
    /**
     * Allows you to delete an existing Bulk Address that which is no longer required
     *
     * @summary Delete Bulk Address
     * @throws FetchError<400, types.DeleteBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.DeleteBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.DeleteBulkAddressResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.deleteBulkAddress = function (metadata) {
        return this.core.fetch('/v1/schedule/{card_file_schedule_id}/bulk-address/{bulk_address_id}', 'delete', metadata);
    };
    /**
     * The List Clients API request retrieves all sub clients held clients.
     *
     * @summary List Clients
     * @throws FetchError<400, types.ListClientsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListClientsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListClientsResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.listClients = function (metadata) {
        return this.core.fetch('/v1/clients', 'get', metadata);
    };
    /**
     * The Get Client API request allows for the retrieval of a client details.
     *
     * @summary Get Client
     * @throws FetchError<400, types.GetClientResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetClientResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetClientResponse403> When access token provided does not have access to a resource
     */
    SDK.prototype.getClient = function (metadata) {
        return this.core.fetch('/v1/clients/{client_id}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
