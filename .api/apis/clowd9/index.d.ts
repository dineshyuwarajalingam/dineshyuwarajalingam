import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * A simple check to validate the connection is active
     *
     * @summary HealthCheck
     * @throws FetchError<400, types.HealthCheckResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.HealthCheckResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.HealthCheckResponse403> When access token provided does not have access to a resource
     */
    healthCheck(): Promise<FetchResponse<200, types.HealthCheckResponse200> | FetchResponse<number, types.HealthCheckResponseDefault>>;
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
    authenticateApi(body: types.AuthenticateApiBodyParam): Promise<FetchResponse<200, types.AuthenticateApiResponse200> | FetchResponse<number, types.AuthenticateApiResponseDefault>>;
    /**
     * To refresh a previously expired JWT token which has exceeded the 120 minutes lifespan
     *
     * @summary Refresh Access Token
     * @throws FetchError<400, types.RefreshTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.RefreshTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.RefreshTokenResponse403> When access token provided does not have access to a resource
     * @throws FetchError<500, types.RefreshTokenResponse500>
     */
    refreshToken(body: types.RefreshTokenBodyParam): Promise<FetchResponse<200, types.RefreshTokenResponse200> | FetchResponse<number, types.RefreshTokenResponseDefault>>;
    /**
     * The Get CLOWD9 OpenAPI API allows you to retrieve the specification for the API.\ The
     * specification is provided in JSON or YAML format.
     *
     * @summary Get CLOWD9 OpenApi specification
     * @throws FetchError<400, types.GetClowd9ApiResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetClowd9ApiResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetClowd9ApiResponse403> When access token provided does not have access to a resource
     */
    getClowd9Api(metadata?: types.GetClowd9ApiMetadataParam): Promise<FetchResponse<200, types.GetClowd9ApiResponse200> | FetchResponse<number, types.GetClowd9ApiResponseDefault>>;
    /**
     * Enables you to create the Customer in advance of creating and issuing a Card. If you
     * wish to create the Customer and Card at the same time, use the Onboard Card API
     *
     * @summary Create Customer
     * @throws FetchError<400, types.CreateCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateCustomerResponse403> When access token provided does not have access to a resource
     */
    createCustomer(body: types.CreateCustomerBodyParam): Promise<FetchResponse<200, types.CreateCustomerResponse200> | FetchResponse<number, types.CreateCustomerResponseDefault>>;
    /**
     * The List Customers API allows you to retrieve your Customer records. \ The API provides
     * the opportunity to limit and sort the records to be returned.
     *
     * @summary List Customers
     * @throws FetchError<400, types.ListCustomersResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListCustomersResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListCustomersResponse403> When access token provided does not have access to a resource
     */
    listCustomers(metadata: types.ListCustomersMetadataParam): Promise<FetchResponse<200, types.ListCustomersResponse200> | FetchResponse<number, types.ListCustomersResponseDefault>>;
    /**
     * Retrieves the Customer information using the External Reference previously provided
     *
     * @summary Retrieve Customer Information via the External Reference
     * @throws FetchError<400, types.GetCustomerByExternalRefResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCustomerByExternalRefResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCustomerByExternalRefResponse403> When access token provided does not have access to a resource
     */
    getCustomerByExternalRef(metadata: types.GetCustomerByExternalRefMetadataParam): Promise<FetchResponse<200, types.GetCustomerByExternalRefResponse200> | FetchResponse<number, types.GetCustomerByExternalRefResponseDefault>>;
    /**
     * Retrieves the Customer Information for a specific customer_id
     *
     * @summary Retrieve Customer Information
     * @throws FetchError<400, types.GetCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCustomerResponse403> When access token provided does not have access to a resource
     */
    getCustomer(metadata: types.GetCustomerMetadataParam): Promise<FetchResponse<200, types.GetCustomerResponse200> | FetchResponse<number, types.GetCustomerResponseDefault>>;
    /**
     * Update the Customer information previously provided
     *
     * @summary Update Customer
     * @throws FetchError<400, types.UpdateCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpdateCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpdateCustomerResponse403> When access token provided does not have access to a resource
     */
    updateCustomer(body: types.UpdateCustomerBodyParam, metadata: types.UpdateCustomerMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerResponse200> | FetchResponse<number, types.UpdateCustomerResponseDefault>>;
    /**
     * Provides the Public Key to store and retrieve the PCI data via the Secure Frame Work
     *
     * @summary Get Customer Key
     * @throws FetchError<400, types.GetSecureFrameKeyResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetSecureFrameKeyResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetSecureFrameKeyResponse403> When access token provided does not have access to a resource
     */
    getSecureFrameKey(metadata: types.GetSecureFrameKeyMetadataParam): Promise<FetchResponse<200, types.GetSecureFrameKeyResponse200> | FetchResponse<number, types.GetSecureFrameKeyResponseDefault>>;
    /**
     * Returns any Cards associated with the customer_id
     *
     * @summary Find Cards By Customer Id
     * @throws FetchError<400, types.FindCardsByCustomerIdResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.FindCardsByCustomerIdResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.FindCardsByCustomerIdResponse403> When access token provided does not have access to a resource
     */
    findCardsByCustomerId(metadata: types.FindCardsByCustomerIdMetadataParam): Promise<FetchResponse<200, types.FindCardsByCustomerIdResponse200> | FetchResponse<number, types.FindCardsByCustomerIdResponseDefault>>;
    /**
     * Returns any Accounts associated with the customer_id
     *
     * @summary Find Accounts By Customer Id
     * @throws FetchError<400, types.FindAccountsByCustomerResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.FindAccountsByCustomerResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.FindAccountsByCustomerResponse403> When access token provided does not have access to a resource
     */
    findAccountsByCustomer(metadata: types.FindAccountsByCustomerMetadataParam): Promise<FetchResponse<200, types.FindAccountsByCustomerResponse200> | FetchResponse<number, types.FindAccountsByCustomerResponseDefault>>;
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
    createAccount(body: types.CreateAccountBodyParam): Promise<FetchResponse<200, types.CreateAccountResponse200> | FetchResponse<number, types.CreateAccountResponseDefault>>;
    /**
     * The Retrieve Account Information API enables you to retrieve the information held for a
     * specific account_id
     *
     * @summary Retrieve Account Information
     * @throws FetchError<400, types.GetAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetAccountResponse403> When access token provided does not have access to a resource
     */
    getAccount(metadata: types.GetAccountMetadataParam): Promise<FetchResponse<200, types.GetAccountResponse200> | FetchResponse<number, types.GetAccountResponseDefault>>;
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
    updateAccountStatus(body: types.UpdateAccountStatusBodyParam, metadata: types.UpdateAccountStatusMetadataParam): Promise<FetchResponse<200, types.UpdateAccountStatusResponse200> | FetchResponse<number, types.UpdateAccountStatusResponseDefault>>;
    /**
     * Allows you to link the Customer to an Account
     *
     * @summary Customer to Account Link
     * @throws FetchError<400, types.LinkCustomerWithAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.LinkCustomerWithAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.LinkCustomerWithAccountResponse403> When access token provided does not have access to a resource
     */
    linkCustomerWithAccount(metadata: types.LinkCustomerWithAccountMetadataParam): Promise<FetchResponse<200, types.LinkCustomerWithAccountResponse200> | FetchResponse<number, types.LinkCustomerWithAccountResponseDefault>>;
    /**
     * To remove the Customer and Account link
     *
     * @summary Remove the Customer to Account Link
     * @throws FetchError<400, types.UnlinkCustomerFromAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UnlinkCustomerFromAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UnlinkCustomerFromAccountResponse403> When access token provided does not have access to a resource
     */
    unlinkCustomerFromAccount(metadata: types.UnlinkCustomerFromAccountMetadataParam): Promise<FetchResponse<200, types.UnlinkCustomerFromAccountResponse200> | FetchResponse<number, types.UnlinkCustomerFromAccountResponseDefault>>;
    /**
     * Retrieve card(s) linked to an Account by account_id
     *
     * @summary Retrieve card(s) linked to an Account by account_id
     * @throws FetchError<400, types.GetAccountLinkedCardsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetAccountLinkedCardsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetAccountLinkedCardsResponse403> When access token provided does not have access to a resource
     */
    getAccountLinkedCards(metadata: types.GetAccountLinkedCardsMetadataParam): Promise<FetchResponse<200, types.GetAccountLinkedCardsResponse200> | FetchResponse<number, types.GetAccountLinkedCardsResponseDefault>>;
    /**
     * To link a card_id to an account_id. The card_id can be linked to more than one Account
     * where required
     *
     * @summary Card to Account Link
     * @throws FetchError<400, types.LinkCardWithAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.LinkCardWithAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.LinkCardWithAccountResponse403> When access token provided does not have access to a resource
     */
    linkCardWithAccount(metadata: types.LinkCardWithAccountMetadataParam): Promise<FetchResponse<200, types.LinkCardWithAccountResponse200> | FetchResponse<number, types.LinkCardWithAccountResponseDefault>>;
    /**
     * To remove an existing card_id to account_id link
     *
     * @summary Remove the Card to Account link
     * @throws FetchError<400, types.UnlinkCardFromAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UnlinkCardFromAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UnlinkCardFromAccountResponse403> When access token provided does not have access to a resource
     */
    unlinkCardFromAccount(metadata: types.UnlinkCardFromAccountMetadataParam): Promise<FetchResponse<200, types.UnlinkCardFromAccountResponse200> | FetchResponse<number, types.UnlinkCardFromAccountResponseDefault>>;
    /**
     * The Increase Account Balance allows you to increase the balance
     *
     * @summary Increase Account Balance
     * @throws FetchError<400, types.IncreaseAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.IncreaseAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.IncreaseAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    increaseAccountBalance(body: types.IncreaseAccountBalanceBodyParam, metadata: types.IncreaseAccountBalanceMetadataParam): Promise<FetchResponse<200, types.IncreaseAccountBalanceResponse200> | FetchResponse<number, types.IncreaseAccountBalanceResponseDefault>>;
    /**
     * The Decreased Account Balance allows you to decrease the Available balance
     *
     * @summary Decrease Account Balance
     * @throws FetchError<400, types.DecreaseAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.DecreaseAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.DecreaseAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    decreaseAccountBalance(body: types.DecreaseAccountBalanceBodyParam, metadata: types.DecreaseAccountBalanceMetadataParam): Promise<FetchResponse<200, types.DecreaseAccountBalanceResponse200> | FetchResponse<number, types.DecreaseAccountBalanceResponseDefault>>;
    /**
     * Corrects account's available and actual balances by the given amount and creates a
     * ledger entry with operation type `InternalCorrection`.
     *
     * @summary Correct Account Balance
     * @throws FetchError<400, types.CorrectAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CorrectAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CorrectAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    correctAccountBalance(body: types.CorrectAccountBalanceBodyParam, metadata: types.CorrectAccountBalanceMetadataParam): Promise<FetchResponse<200, types.CorrectAccountBalanceResponse200> | FetchResponse<number, types.CorrectAccountBalanceResponseDefault>>;
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
    transferFromAccountToAccount(body: types.TransferFromAccountToAccountBodyParam): Promise<FetchResponse<200, types.TransferFromAccountToAccountResponse200> | FetchResponse<number, types.TransferFromAccountToAccountResponseDefault>>;
    /**
     * Retrieves the Actual, Available Balances together with any Authorized amounts & if
     * applicable the overdraft value for a specific account_id
     *
     * @summary Retrieve Account Balances
     * @throws FetchError<400, types.GetAccountBalanceResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetAccountBalanceResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetAccountBalanceResponse403> When access token provided does not have access to a resource
     */
    getAccountBalance(metadata: types.GetAccountBalanceMetadataParam): Promise<FetchResponse<200, types.GetAccountBalanceResponse200> | FetchResponse<number, types.GetAccountBalanceResponseDefault>>;
    /**
     * Retrieves all entries for a specific account_id. Specific times can be specified where
     * required
     *
     * @summary Retrieve Ledger Entries for an Account
     * @throws FetchError<400, types.GetLedgerEntriesForAccountResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetLedgerEntriesForAccountResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetLedgerEntriesForAccountResponse403> When access token provided does not have access to a resource
     */
    getLedgerEntriesForAccount(metadata: types.GetLedgerEntriesForAccountMetadataParam): Promise<FetchResponse<200, types.GetLedgerEntriesForAccountResponse200> | FetchResponse<number, types.GetLedgerEntriesForAccountResponseDefault>>;
    /**
     * Returns the Behaviour(s) and the associated ID's configured
     *
     * @summary List Behaviours
     * @throws FetchError<400, types.ListBehavioursResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListBehavioursResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListBehavioursResponse403> When access token provided does not have access to a resource
     */
    listBehaviours(metadata?: types.ListBehavioursMetadataParam): Promise<FetchResponse<200, types.ListBehavioursResponse200> | FetchResponse<number, types.ListBehavioursResponseDefault>>;
    /**
     * Returns the Behaviour(s) together with the Groups and short names configured
     *
     * @summary Get Behaviour Groups and Short Names
     * @throws FetchError<400, types.GetBehaviourResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetBehaviourResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetBehaviourResponse403> When access token provided does not have access to a resource
     */
    getBehaviour(metadata: types.GetBehaviourMetadataParam): Promise<FetchResponse<200, types.GetBehaviourResponse200> | FetchResponse<number, types.GetBehaviourResponseDefault>>;
    /**
     * Returns the Groups, Short Names and Thresholds configured for a specific behaviour_id
     *
     * @summary Get Behaviour Limits and Thresholds
     * @throws FetchError<400, types.GetBehaviourLimitsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetBehaviourLimitsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetBehaviourLimitsResponse403> When access token provided does not have access to a resource
     */
    getBehaviourLimits(metadata: types.GetBehaviourLimitsMetadataParam): Promise<FetchResponse<200, types.GetBehaviourLimitsResponse200> | FetchResponse<number, types.GetBehaviourLimitsResponseDefault>>;
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
    createCard(body: types.CreateCardBodyParam): Promise<FetchResponse<200, types.CreateCardResponse200> | FetchResponse<number, types.CreateCardResponseDefault>>;
    /**
     * The onboard Card API allows for the creation of a single physical or virtual card_id and
     * customer_id at the same time
     *
     * @summary Onboard Card
     * @throws FetchError<400, types.OnboardCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.OnboardCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.OnboardCardResponse403> When access token provided does not have access to a resource
     */
    onboardCard(body: types.OnboardCardBodyParam): Promise<FetchResponse<200, types.OnboardCardResponse200> | FetchResponse<number, types.OnboardCardResponseDefault>>;
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
    setCardStatus(body: types.SetCardStatusBodyParam, metadata: types.SetCardStatusMetadataParam): Promise<FetchResponse<200, types.SetCardStatusResponse200> | FetchResponse<number, types.SetCardStatusResponseDefault>>;
    /**
     * To retrieve the card_id using the Primary Account Number (PAN)
     *
     * @summary Query By Pan
     * @throws FetchError<400, types.GetCardIdByPanResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardIdByPanResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardIdByPanResponse403> When access token provided does not have access to a resource
     */
    getCardIdByPan(body: types.GetCardIdByPanBodyParam): Promise<FetchResponse<200, types.GetCardIdByPanResponse200> | FetchResponse<number, types.GetCardIdByPanResponseDefault>>;
    /**
     * The Get Card API provides you with the non-sensitive information for a specific card_id
     * card.
     *
     * @summary Get Card
     * @throws FetchError<400, types.GetCardResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardResponse403> When access token provided does not have access to a resource
     */
    getCard(metadata: types.GetCardMetadataParam): Promise<FetchResponse<200, types.GetCardResponse200> | FetchResponse<number, types.GetCardResponseDefault>>;
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
    updateDelivery(body: types.UpdateDeliveryBodyParam, metadata: types.UpdateDeliveryMetadataParam): Promise<FetchResponse<200, types.UpdateDeliveryResponse200> | FetchResponse<number, types.UpdateDeliveryResponseDefault>>;
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
    replaceCard(body: types.ReplaceCardBodyParam, metadata: types.ReplaceCardMetadataParam): Promise<FetchResponse<200, types.ReplaceCardResponse200> | FetchResponse<number, types.ReplaceCardResponseDefault>>;
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
    renewCard(body: types.RenewCardBodyParam, metadata: types.RenewCardMetadataParam): Promise<FetchResponse<200, types.RenewCardResponse200> | FetchResponse<number, types.RenewCardResponseDefault>>;
    /**
     * Returns the details of a secure card
     *
     * @summary Get Secure Card Details
     * @throws FetchError<400, types.GetSecureCardDetailsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetSecureCardDetailsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetSecureCardDetailsResponse403> When access token provided does not have access to a resource
     */
    getSecureCardDetails(body: types.GetSecureCardDetailsBodyParam, metadata: types.GetSecureCardDetailsMetadataParam): Promise<FetchResponse<200, types.GetSecureCardDetailsResponse200> | FetchResponse<number, types.GetSecureCardDetailsResponseDefault>>;
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
    findCardUsage(metadata: types.FindCardUsageMetadataParam): Promise<FetchResponse<200, types.FindCardUsageResponse200> | FetchResponse<number, types.FindCardUsageResponseDefault>>;
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
    setCardUsage(body: types.SetCardUsageBodyParam, metadata: types.SetCardUsageMetadataParam): Promise<FetchResponse<200, types.SetCardUsageResponse200> | FetchResponse<number, types.SetCardUsageResponseDefault>>;
    /**
     * The Upgrade Card Virtual endpoint allows you to upgrade the virtual card to physical
     * card.
     *
     * @summary Upgrade Card Virtual
     * @throws FetchError<400, types.UpgradeCardVirtualResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpgradeCardVirtualResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpgradeCardVirtualResponse403> When access token provided does not have access to a resource
     */
    upgradeCardVirtual(body: types.UpgradeCardVirtualBodyParam, metadata: types.UpgradeCardVirtualMetadataParam): Promise<FetchResponse<200, types.UpgradeCardVirtualResponse200> | FetchResponse<number, types.UpgradeCardVirtualResponseDefault>>;
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
    unblockPin(body: types.UnblockPinBodyParam, metadata: types.UnblockPinMetadataParam): Promise<FetchResponse<200, types.UnblockPinResponse200> | FetchResponse<number, types.UnblockPinResponseDefault>>;
    /**
     * Retrieve all card limits
     *
     * @summary List Card Limits and Thresholds
     * @throws FetchError<400, types.ListCardLimitsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListCardLimitsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListCardLimitsResponse403> When access token provided does not have access to a resource
     */
    listCardLimits(metadata: types.ListCardLimitsMetadataParam): Promise<FetchResponse<200, types.ListCardLimitsResponse200> | FetchResponse<number, types.ListCardLimitsResponseDefault>>;
    /**
     * Assign behaviour to card
     *
     * @throws FetchError<400, types.CardAssignBehaviourResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CardAssignBehaviourResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CardAssignBehaviourResponse403> When access token provided does not have access to a resource
     */
    cardAssignBehaviour(body: types.CardAssignBehaviourBodyParam, metadata: types.CardAssignBehaviourMetadataParam): Promise<FetchResponse<200, types.CardAssignBehaviourResponse200> | FetchResponse<number, types.CardAssignBehaviourResponseDefault>>;
    /**
     * Returns the limit_name and thresholds configured for the limit_short_name
     *
     * @summary Get Card Limit
     * @throws FetchError<400, types.GetCardLimitResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardLimitResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardLimitResponse403> When access token provided does not have access to a resource
     */
    getCardLimit(metadata: types.GetCardLimitMetadataParam): Promise<FetchResponse<200, types.GetCardLimitResponse200> | FetchResponse<number, types.GetCardLimitResponseDefault>>;
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
    upsertCardLimit(body: types.UpsertCardLimitBodyParam, metadata: types.UpsertCardLimitMetadataParam): Promise<FetchResponse<200, types.UpsertCardLimitResponse200> | FetchResponse<number, types.UpsertCardLimitResponseDefault>>;
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
    setSecurePin(body: types.SetSecurePinBodyParam, metadata: types.SetSecurePinMetadataParam): Promise<FetchResponse<200, types.SetSecurePinResponse200> | FetchResponse<number, types.SetSecurePinResponseDefault>>;
    /**
     * To Set a new or update an existing 3D Secure password
     *
     * @summary Password Authentication
     * @throws FetchError<400, types.TdsPasswordAuthenticationResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.TdsPasswordAuthenticationResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.TdsPasswordAuthenticationResponse403> When access token provided does not have access to a resource
     */
    tdsPasswordAuthentication(body: types.TdsPasswordAuthenticationBodyParam, metadata: types.TdsPasswordAuthenticationMetadataParam): Promise<FetchResponse<200, types.TdsPasswordAuthenticationResponse200> | FetchResponse<number, types.TdsPasswordAuthenticationResponseDefault>>;
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
    relayOOBAuthResult(body: types.RelayOobAuthResultBodyParam, metadata: types.RelayOobAuthResultMetadataParam): Promise<FetchResponse<200, types.RelayOobAuthResultResponse200> | FetchResponse<number, types.RelayOobAuthResultResponseDefault>>;
    /**
     * The Retrieve Card Data for Google Wallet API request returns the encrypted retrieves
     * information required to Tokenize via the Google Wallet
     *
     * @summary Retrieve Card Data for Google Wallet
     * @throws FetchError<400, types.CreateGoogleProvisioningTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateGoogleProvisioningTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateGoogleProvisioningTokenResponse403> When access token provided does not have access to a resource
     */
    createGoogleProvisioningToken(body: types.CreateGoogleProvisioningTokenBodyParam, metadata: types.CreateGoogleProvisioningTokenMetadataParam): Promise<FetchResponse<200, types.CreateGoogleProvisioningTokenResponse200> | FetchResponse<number, types.CreateGoogleProvisioningTokenResponseDefault>>;
    createGoogleProvisioningToken(metadata: types.CreateGoogleProvisioningTokenMetadataParam): Promise<FetchResponse<200, types.CreateGoogleProvisioningTokenResponse200> | FetchResponse<number, types.CreateGoogleProvisioningTokenResponseDefault>>;
    /**
     * Retrieves all DPans associated to a card_id, together with the information held for each
     * DPAN.
     *
     * @summary Retrieve All DPANs for a Card
     * @throws FetchError<400, types.ListCardTokensResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListCardTokensResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListCardTokensResponse403> When access token provided does not have access to a resource
     */
    listCardTokens(metadata: types.ListCardTokensMetadataParam): Promise<FetchResponse<200, types.ListCardTokensResponse200> | FetchResponse<number, types.ListCardTokensResponseDefault>>;
    /**
     * The Resync DPAN API is used to resynchronize the DPAN with the Token Service Provider
     *
     * @summary Resync DPAN
     * @throws FetchError<400, types.ResyncCardTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ResyncCardTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ResyncCardTokenResponse403> When access token provided does not have access to a resource
     */
    resyncCardToken(metadata: types.ResyncCardTokenMetadataParam): Promise<FetchResponse<200, types.ResyncCardTokenResponse200> | FetchResponse<number, types.ResyncCardTokenResponseDefault>>;
    /**
     * Returns detailed information about a specific DPAN associated to a card_id and all
     * devices associated with the DPAN
     *
     * @summary Retrieve One DPAN
     * @throws FetchError<400, types.GetCardTokenResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetCardTokenResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetCardTokenResponse403> When access token provided does not have access to a resource
     */
    getCardToken(metadata: types.GetCardTokenMetadataParam): Promise<FetchResponse<200, types.GetCardTokenResponse200> | FetchResponse<number, types.GetCardTokenResponseDefault>>;
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
    statusChangeCardToken(body: types.StatusChangeCardTokenBodyParam, metadata: types.StatusChangeCardTokenMetadataParam): Promise<FetchResponse<200, types.StatusChangeCardTokenResponse200> | FetchResponse<number, types.StatusChangeCardTokenResponseDefault>>;
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
    getTokenLifecycle(metadata: types.GetTokenLifecycleMetadataParam): Promise<FetchResponse<200, types.GetTokenLifecycleResponse200> | FetchResponse<number, types.GetTokenLifecycleResponseDefault>>;
    /**
     * Creation of a Bulk Address which will be provided to your Card Manufacturer in the Card
     * Embossing File for bulk dispatch
     *
     * @summary Create Bulk Address
     * @throws FetchError<400, types.CreateBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.CreateBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.CreateBulkAddressResponse403> When access token provided does not have access to a resource
     */
    createBulkAddress(body: types.CreateBulkAddressBodyParam, metadata: types.CreateBulkAddressMetadataParam): Promise<FetchResponse<200, types.CreateBulkAddressResponse200> | FetchResponse<number, types.CreateBulkAddressResponseDefault>>;
    /**
     * Allows you to retrieve the information held for a bulk_address_id
     *
     * @summary Retrieve Bulk Address Information
     * @throws FetchError<400, types.GetBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetBulkAddressResponse403> When access token provided does not have access to a resource
     */
    getBulkAddress(metadata: types.GetBulkAddressMetadataParam): Promise<FetchResponse<200, types.GetBulkAddressResponse200> | FetchResponse<number, types.GetBulkAddressResponseDefault>>;
    /**
     * Allows you to update any information for an existing Bulk Address
     *
     * @summary Update Bulk Address
     * @throws FetchError<400, types.UpdateBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.UpdateBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.UpdateBulkAddressResponse403> When access token provided does not have access to a resource
     */
    updateBulkAddress(body: types.UpdateBulkAddressBodyParam, metadata: types.UpdateBulkAddressMetadataParam): Promise<FetchResponse<200, types.UpdateBulkAddressResponse200> | FetchResponse<number, types.UpdateBulkAddressResponseDefault>>;
    /**
     * Allows you to delete an existing Bulk Address that which is no longer required
     *
     * @summary Delete Bulk Address
     * @throws FetchError<400, types.DeleteBulkAddressResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.DeleteBulkAddressResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.DeleteBulkAddressResponse403> When access token provided does not have access to a resource
     */
    deleteBulkAddress(metadata: types.DeleteBulkAddressMetadataParam): Promise<FetchResponse<200, types.DeleteBulkAddressResponse200> | FetchResponse<number, types.DeleteBulkAddressResponseDefault>>;
    /**
     * The List Clients API request retrieves all sub clients held clients.
     *
     * @summary List Clients
     * @throws FetchError<400, types.ListClientsResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.ListClientsResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.ListClientsResponse403> When access token provided does not have access to a resource
     */
    listClients(metadata?: types.ListClientsMetadataParam): Promise<FetchResponse<200, types.ListClientsResponse200> | FetchResponse<number, types.ListClientsResponseDefault>>;
    /**
     * The Get Client API request allows for the retrieval of a client details.
     *
     * @summary Get Client
     * @throws FetchError<400, types.GetClientResponse400> Bad request. Please review data provided
     * @throws FetchError<401, types.GetClientResponse401> When access token is not provided, incorrect, or expired
     * @throws FetchError<403, types.GetClientResponse403> When access token provided does not have access to a resource
     */
    getClient(metadata: types.GetClientMetadataParam): Promise<FetchResponse<200, types.GetClientResponse200> | FetchResponse<number, types.GetClientResponseDefault>>;
}
declare const createSDK: SDK;
export = createSDK;
