declare const AuthenticateApi: {
    readonly body: {
        readonly required: readonly ["key", "secret"];
        readonly type: "object";
        readonly properties: {
            readonly key: {
                readonly type: "string";
                readonly examples: readonly ["yigGiolSZ8pYOg06IsLQnXAyn1RXxy4S"];
            };
            readonly secret: {
                readonly type: "string";
                readonly "x-sensitive": true;
                readonly examples: readonly ["<secret>"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly access_token: {
                    readonly type: "string";
                    readonly description: "To be used to Access the CLOWD9 APIs";
                    readonly "x-sensitive": true;
                };
                readonly refresh_token: {
                    readonly type: "string";
                    readonly description: "For future use when the JWT lifespan of 120 minutes has been exceeded";
                    readonly "x-sensitive": true;
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
                readonly api_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "API keys Identifier";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CardAssignBehaviour: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["behaviour_id"];
        readonly properties: {
            readonly behaviour_id: {
                readonly type: "string";
                readonly description: "Name of the behaviour selected based on specific criteria.";
                readonly examples: readonly ["f493a2d4-6fc0-4218-92f1-e8a1bcbb39cf"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly type: "string";
                    readonly examples: readonly ["ad46e6a4-3e18-4d35-860c-baefaf14a8e9"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CorrectAccountBalance: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount", "reason"];
        readonly properties: {
            readonly amount: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The amount for the correction. Can be positive or negative.";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly reason: {
                readonly type: "string";
                readonly maxLength: 100;
                readonly description: "Reason for the correction, restricted to 100 characters";
            };
            readonly correction_type: {
                readonly type: "string";
                readonly description: "The type of correction";
            };
            readonly reference_id: {
                readonly type: "string";
                readonly description: "Unique reference Identifier associated to the Correction request";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly previous_actual_balance: {
                    readonly type: "string";
                    readonly description: "The previous actual balance prior to the correction";
                    readonly examples: readonly ["100"];
                };
                readonly new_actual_balance: {
                    readonly type: "string";
                    readonly description: "The new actual balance following the correction";
                    readonly examples: readonly ["200"];
                };
                readonly previous_available_balance: {
                    readonly type: "string";
                    readonly description: "The previous available balance prior to the correction";
                    readonly examples: readonly ["0"];
                };
                readonly new_available_balance: {
                    readonly type: "string";
                    readonly description: "The new available balance following the correction";
                    readonly examples: readonly ["100"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateAccount: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["account_profile_id"];
        readonly properties: {
            readonly account_profile_id: {
                readonly type: "string";
                readonly minLength: 36;
                readonly description: "The Identifier associated to Account Profile";
                readonly examples: readonly ["516ed7e6-ced5-44f1-b4f2-6878bc33be58"];
            };
            readonly account_status: {
                readonly type: "string";
                readonly enum: readonly ["inactive", "active", "closed", "freeze"];
                readonly description: "The default Account status at the time of card creation is inactive. This can be overridden at card creation stage if needed";
                readonly examples: readonly ["active"];
            };
            readonly main_account_id: {
                readonly type: "string";
                readonly minLength: 36;
                readonly description: "Required if creating a further account that is to be linked to the Main account";
                readonly examples: readonly ["c2c0e2a3-b1e4-44d1-9c37-5ec424e217e5"];
            };
            readonly account_name: {
                readonly type: "string";
                readonly description: "The name of the Account if required";
                readonly examples: readonly ["CLOWD9 Expenses"];
            };
            readonly external_id: {
                readonly type: "string";
                readonly description: "Unique Identifier held on yours or a third party system associated with the Account";
                readonly examples: readonly ["018794671"];
            };
            readonly client_id: {
                readonly description: "The identifier of the Client";
                readonly type: "string";
                readonly minLength: 36;
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["eef38755-ad34-44c5-842b-ee048f4303ee"];
            };
            readonly customer_id: {
                readonly description: "The Identifier associated with the Customer";
                readonly type: "string";
                readonly minLength: 36;
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly description: "The Identifier associated to the Account";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["fcd0cecb-90dd-4ae2-879f-d0eda6fbddd4"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateBulkAddress: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 7;
                readonly description: "Title (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Mr"];
            };
            readonly first_name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 50;
                readonly description: "First name ( person in charge of receiving the bulk cards). Format is Alpha only";
                readonly examples: readonly ["Alan"];
            };
            readonly middle_name: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 50;
                readonly description: "Middle name (person in charge of receiving the bulk cards). Format is Alpha only";
                readonly examples: readonly ["Mathison"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 50;
                readonly description: "Last name (person in charge of receiving the bulk cards). Format is Alpha only";
                readonly examples: readonly ["Turing"];
            };
            readonly phone_number: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 15;
                readonly description: "Phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                readonly examples: readonly ["+447599999999"];
            };
            readonly email: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["clowd9@clowd9.com"];
            };
            readonly address_line1: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 100;
                readonly description: "Bulk delivery address line 1. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["99 Church Meadows"];
            };
            readonly address_line2: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Bulk delivery address line 2. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Green House"];
            };
            readonly address_line3: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Bulk delivery address line 3. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Up The Hill"];
            };
            readonly city: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 50;
                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["London"];
            };
            readonly post_code: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 9;
                readonly description: "Bulk delivery address Postal Code. Format is ISO  Alpha, Numeric";
                readonly examples: readonly ["CM7 5SL"];
            };
            readonly state_county_or_province: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Bulk Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Essex"];
            };
            readonly country_iso: {
                readonly type: "string";
                readonly minLength: 3;
                readonly maxLength: 3;
                readonly description: "Bulk Delivery country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                readonly examples: readonly ["GBR"];
            };
            readonly bulk_delivery_method: {
                readonly type: "integer";
                readonly format: "int32";
                readonly enum: readonly [1, 2, 3, 4];
                readonly description: "The method for bulk dispatch. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special)";
                readonly examples: readonly [1];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly bulk_ref: {
                readonly type: "string";
                readonly description: "Clients must agree a bulk reference with the Card Manufacturer. Cards with the same bulk_address_id will be sent together to the bulk address. Format is Alpha, Numeric and Special Characters, maximum length of 36";
                readonly examples: readonly ["CLOWD92024"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_file_schedule_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Card Manufacturer configuration Id generated by CLOWD9 and associated to Product Identifier";
                };
            };
            readonly required: readonly ["card_file_schedule_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly bulk_address_id: {
                    readonly description: "Identifier for the Bulk Address";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a4da9a3d-54c8-499c-9f3b-c1cb5f3f8bbe"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 7;
                    readonly description: "Title (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Mr"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "First name ( person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Alan"];
                };
                readonly middle_name: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 50;
                    readonly description: "Middle name (person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Mathison"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "Last name (person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Turing"];
                };
                readonly phone_number: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 15;
                    readonly description: "Phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                    readonly examples: readonly ["+447599999999"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["clowd9@clowd9.com"];
                };
                readonly address_line1: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 1. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["99 Church Meadows"];
                };
                readonly address_line2: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 2. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Green House"];
                };
                readonly address_line3: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 3. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Up The Hill"];
                };
                readonly city: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["London"];
                };
                readonly post_code: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 9;
                    readonly description: "Bulk delivery address Postal Code. Format is ISO  Alpha, Numeric";
                    readonly examples: readonly ["CM7 5SL"];
                };
                readonly state_county_or_province: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Essex"];
                };
                readonly country_iso: {
                    readonly type: "string";
                    readonly minLength: 3;
                    readonly maxLength: 3;
                    readonly description: "Bulk Delivery country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                    readonly examples: readonly ["GBR"];
                };
                readonly bulk_delivery_method: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly enum: readonly [1, 2, 3, 4];
                    readonly description: "The method for bulk dispatch. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special)\n\n`1` `2` `3` `4`";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly bulk_ref: {
                    readonly type: "string";
                    readonly description: "Clients must agree a bulk reference with the Card Manufacturer. Cards with the same bulk_address_id will be sent together to the bulk address. Format is Alpha, Numeric and Special Characters, maximum length of 36";
                    readonly examples: readonly ["CLOWD92024"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCard: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["card", "customer_id", "product_id"];
        readonly properties: {
            readonly delivery: {
                readonly type: "object";
                readonly title: "Delivery";
                readonly properties: {
                    readonly thermal_line1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line1"];
                    };
                    readonly thermal_line2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line2"];
                    };
                    readonly emboss_name: {
                        readonly type: "string";
                        readonly minLength: 3;
                        readonly maxLength: 26;
                        readonly description: "Name displayed on the front of the card. This field is mandatory for Physical Card format, optional for Virtual card. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Alan Turing"];
                    };
                    readonly emboss_line4: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 35;
                        readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly fulfil1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil1"];
                    };
                    readonly fulfil2: {
                        readonly type: "string";
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil2"];
                    };
                    readonly card_delivery_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 1;
                        readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                        readonly examples: readonly ["1"];
                    };
                    readonly envelope_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "Envelope reference for the card packaging and is to be agreed with the Card Manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly carrier_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["carrier_reference"];
                    };
                    readonly carrier_lang_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 2;
                        readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                        readonly examples: readonly ["EN"];
                    };
                    readonly design_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["design_reference"];
                    };
                    readonly bulk_address_id: {
                        readonly description: "Identifier for the Bulk Address";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a4da9a3d-54c8-499c-9f3b-c1cb5f3f8bbe"];
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery county or province";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly contact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Delivery contact title";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact first name";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact middle name";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact last name";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                        };
                    };
                };
            };
            readonly card: {
                readonly type: "object";
                readonly required: readonly ["card_id", "card_status", "format"];
                readonly properties: {
                    readonly card_id: {
                        readonly description: "The Identifier associated to the Card";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly secure_id: {
                        readonly description: "Used to retrieve and set the PIN information. The value is same as provided for the card_id";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly format: {
                        readonly type: "string";
                        readonly enum: readonly ["virtual", "physical"];
                        readonly description: "Card format, Virtual or Physical";
                        readonly examples: readonly ["physical"];
                    };
                    readonly card_status: {
                        readonly type: "string";
                        readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                        readonly examples: readonly ["active"];
                    };
                    readonly pin: {
                        readonly type: "string";
                        readonly "x-sensitive": true;
                        readonly pattern: "^[0-9]{4,6}$";
                        readonly minLength: 4;
                        readonly maxLength: 6;
                        readonly description: "Desired PIN (digits only). Length 4-6. If not supplied, the system will generate a value.\nOmit when using Secure PIN (`pin_secure`)\n";
                        readonly examples: readonly ["1234"];
                    };
                    readonly pin_secure: {
                        readonly type: "string";
                        readonly "x-sensitive": true;
                        readonly description: "PIN encrypted with customer key. If not supplied, the system will generate a value. Omit when using pin";
                        readonly examples: readonly ["Qp3p7SzE7KBRZ3YzdC9rRBx8Yw=="];
                    };
                    readonly expiry_date: {
                        readonly pattern: "^\\d{2}\\/(0[1-9]|1[0-2])$";
                        readonly type: "string";
                        readonly description: "Expiry date of the card. If not provided, a date will be assigned as per product configuration. YY/MM format";
                        readonly examples: readonly ["26/08"];
                    };
                    readonly valid_from_date: {
                        readonly pattern: "^\\d{2}\\/(0[1-9]|1[0-2])$";
                        readonly type: "string";
                        readonly description: "Date the card is valid from. If not provided, card will be valid from card generation date. YY/MM format";
                        readonly examples: readonly ["24/08"];
                    };
                };
            };
            readonly card_manufacturer_id: {
                readonly minLength: 36;
                readonly description: "Card Manufacturer id provided by CLOWD9";
                readonly type: "string";
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["99f38751-ad34-44c5-842b-bb448f430299"];
            };
            readonly customer_id: {
                readonly description: "The Identifier associated with the Customer";
                readonly type: "string";
                readonly minLength: 36;
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
            };
            readonly product_id: {
                readonly minLength: 36;
                readonly description: "Identifier of card product. The ID is generated by CLOWD9";
                readonly type: "string";
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["18ef9392-bd29-4f40-8b22-3f756977b887"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated with the card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly secure_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "Provided for a Physical card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "The status of the card";
                        };
                        readonly pin: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The PIN value as provided or generated by CLOWD9";
                        };
                        readonly pan: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The last four digits of the Primary Account Number (PAN)";
                        };
                        readonly cvv: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "Three digit Card Verification Value";
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly description: "Expiry date of the card";
                        };
                        readonly valid_from_date: {
                            readonly type: "string";
                            readonly description: "Date the card is valid from";
                        };
                    };
                };
                readonly customer_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the Customer";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly program_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The identifier associated to the Card";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCustomer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly customer: {
                readonly title: "Customer";
                readonly required: readonly ["address", "customer_id", "first_name", "last_name", "phone_number"];
                readonly type: "object";
                readonly properties: {
                    readonly customer_id: {
                        readonly minLength: 36;
                        readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                        readonly type: "string";
                        readonly description: "The Identifier associated with the Customer";
                        readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 7;
                        readonly description: "Customer title. Format is Alpha, Numeric and Special Characters";
                        readonly examples: readonly ["Mr"];
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer first name. Format is Alpha";
                        readonly examples: readonly ["Alan"];
                    };
                    readonly middle_name: {
                        readonly type: "string";
                        readonly maxLength: 50;
                        readonly description: "Customer middle name. Format is Alpha";
                        readonly examples: readonly ["Mathison"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer last name. Format is Alpha";
                        readonly examples: readonly ["Turing"];
                    };
                    readonly date_of_birth: {
                        readonly type: "string";
                        readonly description: "Customer date of birth";
                        readonly examples: readonly ["24/10/1981"];
                    };
                    readonly phone_number: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 15;
                        readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                        readonly examples: readonly ["+447599999999"];
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 100;
                        readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                        readonly examples: readonly ["clowd9@clowd9.com"];
                    };
                    readonly external_ref: {
                        readonly type: "string";
                        readonly description: "This is a customer reference held in the client's system";
                        readonly examples: readonly ["98f9d102-fd0b-4cc1-a38b-5a190ad4171e"];
                    };
                    readonly language_code: {
                        readonly type: "string";
                        readonly description: "The BCP-47 identification code of the language the customer prefers in SMS and email communications for 3DS OTP delivery";
                        readonly examples: readonly ["en-US"];
                    };
                    readonly free_text: {
                        readonly type: "string";
                        readonly maxLength: 256;
                        readonly description: "Some description";
                        readonly examples: readonly ["Some description"];
                    };
                    readonly address: {
                        readonly title: "Customer's Address";
                        readonly required: readonly ["address_line1", "city", "country_iso", "post_code"];
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Customer address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Customer Postal Code. Format is ISO  Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly identification: {
                        readonly type: "object";
                        readonly properties: {
                            readonly identification_1_type: {
                                readonly type: "string";
                                readonly description: "Customer identification type 1 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                            };
                            readonly identification_1_id: {
                                readonly type: "string";
                                readonly description: "Alpha numeric value associated with the ID type";
                            };
                            readonly identification_1_country: {
                                readonly type: "string";
                                readonly description: "Identifier 1 issuing country (mandatory field if identification  type 1 is populated )";
                                readonly examples: readonly ["GBR"];
                            };
                            readonly identification_1_state: {
                                readonly type: "string";
                                readonly description: "Identifier 1 issuing state (mandatory if identification 1 country is USA)";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly identification_2_type: {
                                readonly type: "string";
                                readonly description: "customer identifier type 2 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                            };
                            readonly identification_2_id: {
                                readonly type: "string";
                                readonly description: "Alpha numeric value associated with the ID type";
                            };
                            readonly identification_2_country: {
                                readonly type: "string";
                                readonly description: "Identifier 2 issuing country (mandatory if identification type 2 is populated)";
                                readonly examples: readonly ["GBR"];
                            };
                            readonly identification_2_state: {
                                readonly type: "string";
                                readonly description: "Identifier 2 issuing state (mandatory if identification 2 country is USA)";
                                readonly examples: readonly ["Essex"];
                            };
                        };
                    };
                };
            };
            readonly client_id: {
                readonly minLength: 36;
                readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                readonly type: "string";
                readonly description: "Identifier associated to you";
                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the Customer";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["ad46e6a4-3e18-4d35-860c-baefaf14a8e9"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateGoogleProvisioningToken: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly visa: {
                readonly type: "object";
                readonly required: readonly ["device_id", "app_id", "token_requestor_id"];
                readonly properties: {
                    readonly device_id: {
                        readonly type: "string";
                    };
                    readonly app_id: {
                        readonly description: "Application unique ID from Visa";
                        readonly type: "string";
                    };
                    readonly token_requestor_id: {
                        readonly type: "string";
                        readonly description: "Unique ID that identifies the entity for which the token request is being conducted. Format: Numeric; maximum 11 digits.";
                        readonly maxLength: 11;
                        readonly minLength: 0;
                    };
                    readonly wallet_account_id: {
                        readonly type: "string";
                        readonly description: "Client-provided consumer ID that identifies the Wallet Account Holder entity.\nThis value must match the clientWalletAccountID that the Token Wallet Provider (e.g., Google)\nwill send in the token provision request.";
                        readonly maxLength: 24;
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly push_data: {
                    readonly type: "string";
                    readonly description: "The encrypted push data for Google Pay provisioning";
                };
                readonly card: {
                    readonly type: "object";
                    readonly description: "Card provision data";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated to the Card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly card_ending: {
                            readonly type: "string";
                            readonly description: "The last four digits of the PAN associated with the card_id";
                            readonly examples: readonly ["1234"];
                        };
                        readonly format: {
                            readonly type: "string";
                            readonly description: "Card format, physical or virtual";
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "Current card status";
                        };
                    };
                };
                readonly customer: {
                    readonly type: "object";
                    readonly description: "The customer provision data.";
                    readonly properties: {
                        readonly customer_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated with the Customer";
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly description: "Customer first name";
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly description: "Customer last name";
                        };
                        readonly address_line1: {
                            readonly type: "string";
                        };
                        readonly address_line2: {
                            readonly type: "string";
                        };
                        readonly address_line3: {
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "Customer City. Format is Alpha, Numeric and Special Characters";
                            readonly examples: readonly ["London"];
                        };
                        readonly post_code: {
                            readonly type: "string";
                            readonly description: "Customer postal code";
                        };
                        readonly country_iso: {
                            readonly type: "string";
                            readonly description: "Customer country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain)";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                            readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                            readonly examples: readonly ["+447599999999"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 100;
                            readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                            readonly examples: readonly ["clowd9@clowd9.com"];
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DecreaseAccountBalance: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount"];
        readonly properties: {
            readonly amount: {
                readonly type: "integer";
                readonly format: "int64";
                readonly minLength: 1;
                readonly description: "The amount to be debited from the Account";
                readonly examples: readonly [1000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly reference_name: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 30;
                readonly description: "Optional information to be applied";
                readonly examples: readonly ["Debit Card"];
            };
            readonly reference: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Optional reference for the Account Balance change";
                readonly examples: readonly ["Return of Funds"];
            };
            readonly reference_id: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Unique reference Identifier associated to the Decrease request";
                readonly examples: readonly ["Transfer 20250706"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly previous_actual_balance: {
                    readonly type: "string";
                    readonly description: "The previous actual balance prior to the request";
                    readonly examples: readonly ["100"];
                };
                readonly new_actual_balance: {
                    readonly type: "string";
                    readonly description: "The Actual balance following the request";
                    readonly examples: readonly ["200"];
                };
                readonly previous_available_balance: {
                    readonly type: "string";
                    readonly description: "The previous available balance of the Account";
                    readonly examples: readonly ["0"];
                };
                readonly new_available_balance: {
                    readonly type: "string";
                    readonly description: "The Available balance following the request";
                    readonly examples: readonly ["100"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteBulkAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_file_schedule_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Card Manufacturer configuration Id generated by CLOWD9 and associated to Product Identifier";
                };
                readonly bulk_address_id: {
                    readonly type: "string";
                    readonly examples: readonly ["b97882a6-949b-49db-9549-9de9be2eca33"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier of the Bulk Address";
                };
            };
            readonly required: readonly ["card_file_schedule_id", "bulk_address_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly bulk_address_id: {
                    readonly description: "Identifier for the Bulk Address";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a4da9a3d-54c8-499c-9f3b-c1cb5f3f8bbe"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FindAccountsByCustomer: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["customer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accounts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly type: "string";
                                readonly description: "The Identifier associated to the Account";
                                readonly examples: readonly ["fcd0cecb-90dd-4ae2-879f-d0eda6fbddd5"];
                            };
                            readonly account_name: {
                                readonly type: "string";
                                readonly description: "The name of the Account";
                                readonly examples: readonly ["Account name"];
                            };
                            readonly external_id: {
                                readonly type: "string";
                                readonly description: "The external_id of the Account";
                                readonly examples: readonly ["External id"];
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FindCardUsage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly usages: {
                    readonly type: "array";
                    readonly description: "List of card usages for specified card_id";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the Usage Rule";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of the Usage Rule";
                            };
                            readonly enabled: {
                                readonly type: "boolean";
                                readonly description: "To enable / disable the Usage Rule where permitted";
                            };
                            readonly applied_from: {
                                readonly type: "string";
                            };
                            readonly can_be_overridden_at_card: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FindCardsByCustomerId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["customer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly cards: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly card_id: {
                                readonly minLength: 36;
                                readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                                readonly type: "string";
                                readonly description: "The Identifier associated to the Card";
                                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                            };
                            readonly card_ending: {
                                readonly type: "string";
                                readonly description: "The last four digits of the PAN associated with the card_id";
                                readonly examples: readonly ["1234"];
                            };
                            readonly format: {
                                readonly type: "string";
                                readonly enum: readonly ["virtual", "physical"];
                                readonly description: "Card format, physical or virtual\n\n`virtual` `physical`";
                                readonly examples: readonly ["virtual"];
                            };
                            readonly card_status: {
                                readonly type: "string";
                                readonly description: "The default card status at the time of card creation is:\nvirtual card = active,\nphysical card = inactive,\nThis can be overridden at card creation stage if needed.";
                                readonly examples: readonly ["active"];
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The identifier used to track the API request";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly description: "The Identifier associated to the Account";
                                readonly type: "string";
                                readonly minLength: 36;
                                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                                readonly examples: readonly ["fcd0cecb-90dd-4ae2-879f-d0eda6fbddd4"];
                            };
                            readonly account_profile_id: {
                                readonly type: "string";
                                readonly minLength: 36;
                                readonly description: "The Identifier of the Account Profile the Account is associated with";
                                readonly examples: readonly ["84b1625e-f6d4-4d05-8b10-9d84ea42d292"];
                            };
                            readonly main_account_id: {
                                readonly type: "string";
                                readonly description: "Returned if the account_id is linked to a Main Account";
                                readonly examples: readonly ["c2c0e2a3-b1e4-44d1-9c37-5ec424e217e5"];
                            };
                            readonly account_name: {
                                readonly type: "string";
                                readonly description: "The name of the Account if required. If provided, CLOWD9 will include this value in Account Reports and Vista displays";
                                readonly examples: readonly ["CLOWD9 Expenses"];
                            };
                            readonly account_status: {
                                readonly type: "string";
                                readonly description: "The status of the Account";
                                readonly examples: readonly ["active"];
                            };
                            readonly account_currency_code: {
                                readonly type: "string";
                                readonly description: "The Numeric currency code";
                                readonly examples: readonly ["826"];
                            };
                            readonly account_currency: {
                                readonly type: "string";
                                readonly description: "The Alpha (2-3) currency code";
                                readonly examples: readonly ["GBP"];
                            };
                            readonly account_type: {
                                readonly type: "string";
                                readonly description: "Identifies the currency / asset of the Account - Fiat, Crypto";
                                readonly examples: readonly ["single"];
                            };
                            readonly multi_currency: {
                                readonly type: "string";
                                readonly enum: readonly ["y", "n"];
                                readonly description: "The type of Account, Single (n) or Multi-Currency (y)\n\n`y` `n`";
                                readonly examples: readonly ["y"];
                            };
                            readonly external_id: {
                                readonly type: "string";
                                readonly description: "The unique Identifier, if provided when the Account was created";
                                readonly examples: readonly ["018794671"];
                            };
                            readonly actual_balance: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The balance of the Account pending Network clearings. This is not the amount that can be spent. A minus figure indicates a debit balance";
                                readonly examples: readonly [1000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly available_balance: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The available balance. A minus figure indicates a debit balance";
                                readonly examples: readonly [900];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly overdraft_value: {
                                readonly type: "string";
                                readonly description: "The agreed value of the Overdraft. This does not identify the value of the Overdraft used";
                                readonly examples: readonly ["500"];
                            };
                            readonly authorized: {
                                readonly type: "string";
                                readonly description: "The total authorized amount pending the Network clearing";
                                readonly examples: readonly ["100"];
                            };
                            readonly trace_id: {
                                readonly type: "string";
                                readonly description: "The Identifier associated with the API";
                                readonly pattern: "^[0-9a-fA-F]{32}$";
                                readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountBalance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly actual_balance: {
                    readonly type: "string";
                    readonly description: "The total balance of the account. This is not the amount that can be spent. A minus figure indicates a debit balance";
                    readonly examples: readonly ["200"];
                };
                readonly available_balance: {
                    readonly type: "string";
                    readonly description: "The value that is available to be spent. A minus figure indicates a debit balance";
                    readonly examples: readonly ["100"];
                };
                readonly overdraft_value: {
                    readonly type: "string";
                    readonly description: "The agreed value of the Overdraft. This does not identify the value of the Overdraft used";
                    readonly examples: readonly ["500"];
                };
                readonly authorized: {
                    readonly type: "string";
                    readonly description: "The total amount of authorized spend if applicable";
                    readonly examples: readonly ["100"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountLinkedCards: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_ids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBehaviour: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly behaviour_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Behaviour";
                };
            };
            readonly required: readonly ["behaviour_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly behaviour_id: {
                    readonly type: "string";
                    readonly "x-order": 1;
                };
                readonly name: {
                    readonly type: "string";
                    readonly "x-order": 2;
                };
                readonly limits: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly limit_name: {
                                readonly type: "string";
                                readonly description: "Name of the limit";
                                readonly examples: readonly ["Ecommerce counter transactions"];
                            };
                            readonly limit_short_name: {
                                readonly type: "string";
                                readonly description: "The limit_short_name associated to the limit_name";
                                readonly examples: readonly ["ecomm_acc"];
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBehaviourLimits: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly behaviour_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Behaviour";
                };
            };
            readonly required: readonly ["behaviour_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limits: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly limit_name: {
                                readonly type: "string";
                                readonly description: "Name of the limit.";
                                readonly "x-order": 1;
                                readonly examples: readonly ["Ecommerce counter transactions"];
                            };
                            readonly limit_short_name: {
                                readonly type: "string";
                                readonly description: "The limit_short_name associated to the limit_name";
                                readonly "x-order": 2;
                                readonly examples: readonly ["ecomm_acc"];
                            };
                            readonly limit_id: {
                                readonly type: "string";
                                readonly description: "The Identifier associated to the limit";
                                readonly "x-order": 3;
                                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                            };
                            readonly realtime_threshold: {
                                readonly type: "integer";
                                readonly description: "The volume / value permitted per individual transaction";
                                readonly format: "int64";
                                readonly "x-order": 4;
                                readonly examples: readonly [1000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly daily_threshold: {
                                readonly type: "integer";
                                readonly description: "The volume / value permitted daily and resets at 23:59:59 UTC";
                                readonly format: "int64";
                                readonly "x-order": 5;
                                readonly examples: readonly [12000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly weekly_threshold: {
                                readonly type: "integer";
                                readonly description: "The volume / value permitted weekly. This resets every Sunday at 23:59:59 UTC";
                                readonly format: "int64";
                                readonly "x-order": 6;
                                readonly examples: readonly [140000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly monthly_threshold: {
                                readonly type: "integer";
                                readonly description: "The volume / value permitted Monthly. This is reset on the last day of each month at 23:59:59 UTC";
                                readonly format: "int64";
                                readonly "x-order": 7;
                                readonly examples: readonly [2400000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly yearly_threshold: {
                                readonly type: "integer";
                                readonly description: "The volume / value permitted per year and is reset on 31/12 at 23:59:59 UTC";
                                readonly format: "int64";
                                readonly "x-order": 8;
                                readonly examples: readonly [30400000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly general_threshold: {
                                readonly type: "integer";
                                readonly description: "The maximum lifetime value / volume permitted. The General threshold will not be reset at any stage";
                                readonly format: "int64";
                                readonly "x-order": 9;
                                readonly examples: readonly [32400000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBulkAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_file_schedule_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Card Manufacturer configuration Id generated by CLOWD9 and associated to Product Identifier";
                };
                readonly bulk_address_id: {
                    readonly type: "string";
                    readonly examples: readonly ["b97882a6-949b-49db-9549-9de9be2eca33"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier of the Bulk Address";
                };
            };
            readonly required: readonly ["card_file_schedule_id", "bulk_address_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly bulk_address_id: {
                    readonly description: "Identifier for the Bulk Address";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a4da9a3d-54c8-499c-9f3b-c1cb5f3f8bbe"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 7;
                    readonly description: "Title (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Mr"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "First name ( person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Alan"];
                };
                readonly middle_name: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 50;
                    readonly description: "Middle name (person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Mathison"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "Last name (person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Turing"];
                };
                readonly phone_number: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 15;
                    readonly description: "Phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                    readonly examples: readonly ["+447599999999"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["clowd9@clowd9.com"];
                };
                readonly address_line1: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 1. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["99 Church Meadows"];
                };
                readonly address_line2: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 2. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Green House"];
                };
                readonly address_line3: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 3. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Up The Hill"];
                };
                readonly city: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["London"];
                };
                readonly post_code: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 9;
                    readonly description: "Bulk delivery address Postal Code. Format is ISO  Alpha, Numeric";
                    readonly examples: readonly ["CM7 5SL"];
                };
                readonly state_county_or_province: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Essex"];
                };
                readonly country_iso: {
                    readonly type: "string";
                    readonly minLength: 3;
                    readonly maxLength: 3;
                    readonly description: "Bulk Delivery country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                    readonly examples: readonly ["GBR"];
                };
                readonly bulk_delivery_method: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly enum: readonly [1, 2, 3, 4];
                    readonly description: "The method for bulk dispatch. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special)\n\n`1` `2` `3` `4`";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly bulk_ref: {
                    readonly type: "string";
                    readonly description: "Clients must agree a bulk reference with the Card Manufacturer. Cards with the same bulk_address_id will be sent together to the bulk address. Format is Alpha, Numeric and Special Characters, maximum length of 36";
                    readonly examples: readonly ["CLOWD92024"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly delivery: {
                    readonly title: "DELIVERY AND FULFILMENT";
                    readonly type: "object";
                    readonly properties: {
                        readonly thermal_line1: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 20;
                            readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        };
                        readonly thermal_line2: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 20;
                            readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        };
                        readonly emboss_name: {
                            readonly type: "string";
                            readonly minLength: 3;
                            readonly maxLength: 26;
                            readonly description: "The name displayed on the front of the Physical card. For Physical format, if you do not populate this field, the previous emboss_name provided will be used. Format is Alpha, Numeric, Special Characters";
                        };
                        readonly emboss_line4: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 35;
                            readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                        };
                        readonly fulfil1: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 10;
                            readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                            readonly examples: readonly ["Fulfil1"];
                        };
                        readonly fulfil2: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 10;
                            readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                            readonly examples: readonly ["Fulfil2"];
                        };
                        readonly card_delivery_ref: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 1;
                            readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                            readonly examples: readonly ["1"];
                        };
                        readonly envelope_ref: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 50;
                            readonly description: "Envelope reference for the card packaging and is to be agreed with the card manufacturer. Format is Alpha, Numeric";
                            readonly examples: readonly ["CLOWD9 Travel"];
                        };
                        readonly carrier_ref: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 50;
                            readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                            readonly examples: readonly ["Carrier Reference"];
                        };
                        readonly carrier_lang_ref: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 2;
                            readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                        };
                        readonly design_ref: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 36;
                            readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                            readonly examples: readonly ["Design Reference"];
                        };
                        readonly bulk_address_id: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 36;
                            readonly description: "The Identifier generated by CLOWD9 when a Bulk Address is created. Format is Alpha, Numeric, Special Characters";
                            readonly examples: readonly ["61d87137-42d4-418f-b3cb-fa51fcec1111"];
                        };
                        readonly address: {
                            readonly type: "object";
                            readonly properties: {
                                readonly address_line1: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 100;
                                    readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["99 Church Meadows"];
                                };
                                readonly address_line2: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["Green House"];
                                };
                                readonly address_line3: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["Up The Hill"];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 50;
                                    readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["London"];
                                };
                                readonly state_county_or_province: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Delivery county or province";
                                    readonly examples: readonly ["Essex"];
                                };
                                readonly post_code: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 9;
                                    readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                    readonly examples: readonly ["CM75SL"];
                                };
                                readonly country_iso: {
                                    readonly type: "string";
                                    readonly minLength: 3;
                                    readonly maxLength: 3;
                                    readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                    readonly examples: readonly ["GBR"];
                                };
                            };
                        };
                        readonly contact: {
                            readonly type: "object";
                            readonly properties: {
                                readonly title: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 7;
                                    readonly description: "Delivery contact title";
                                    readonly examples: readonly ["Mr"];
                                };
                                readonly first_name: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Delivery contact first name";
                                    readonly examples: readonly ["Alan"];
                                };
                                readonly middle_name: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Delivery contact middle name";
                                    readonly examples: readonly ["Mathison"];
                                };
                                readonly last_name: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 50;
                                    readonly description: "Delivery contact last name";
                                    readonly examples: readonly ["Turing"];
                                };
                                readonly phone_number: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 15;
                                    readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                    readonly examples: readonly ["+447599999999"];
                                };
                                readonly email: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["clowd9@clowd9.com"];
                                };
                            };
                        };
                    };
                };
                readonly card: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated to the Card";
                            readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                        };
                        readonly card_ending: {
                            readonly type: "string";
                            readonly description: "The last four digits of the PAN associated with the card_id";
                            readonly examples: readonly ["1234"];
                        };
                        readonly format: {
                            readonly type: "string";
                            readonly enum: readonly ["virtual", "physical"];
                            readonly description: "Card format, physical or virtual\n\n`virtual` `physical`";
                            readonly examples: readonly ["physical"];
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                            readonly examples: readonly ["active"];
                        };
                        readonly production_status: {
                            readonly type: "string";
                            readonly description: "Current card production status. Applicable to physical card only if provided by card manufacturer. Can hold the following values: complete, new, sending, error, inproduction, senttocustomer.";
                        };
                    };
                };
                readonly customer_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the Customer";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly program_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The identifier of program";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly product_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The identifier of the product";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCardIdByPan: {
    readonly body: {
        readonly required: readonly ["pan"];
        readonly type: "object";
        readonly properties: {
            readonly pan: {
                readonly minLength: 16;
                readonly type: "string";
                readonly "x-sensitive": true;
                readonly description: "The Primary Account Number";
                readonly examples: readonly ["1234567890123456"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCardLimit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly limit_short_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The limit_short_name associated to the limit_name";
                };
            };
            readonly required: readonly ["card_id", "limit_short_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "object";
                    readonly properties: {
                        readonly limit_short_name: {
                            readonly type: "string";
                            readonly description: "The limit_short_name associated to the limit_name";
                            readonly "x-order": 1;
                            readonly examples: readonly ["ecomm_acc"];
                        };
                        readonly limit_name: {
                            readonly type: "string";
                            readonly description: "Name of the limit";
                            readonly "x-order": 1;
                            readonly examples: readonly ["Ecom Limit"];
                        };
                        readonly realtime_threshold: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value permitted per individual transaction";
                            readonly "x-order": 3;
                            readonly examples: readonly [1000];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly daily_threshold: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value permitted daily and resets at 23:59:59 UTC";
                            readonly "x-order": 4;
                            readonly examples: readonly [210000];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly daily_value: {
                            readonly type: "integer";
                            readonly description: "The volume / value of transactions spent in the threshold period";
                            readonly format: "int64";
                            readonly "x-order": 5;
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly weekly_threshold: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value permitted weekly. This resets every Sunday at 23:59:59 UTC";
                            readonly "x-order": 6;
                            readonly examples: readonly [6100000];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly weekly_value: {
                            readonly type: "integer";
                            readonly description: "The volume / value of transactions spent in the threshold period";
                            readonly format: "int64";
                            readonly "x-order": 7;
                            readonly examples: readonly [1000];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly monthly_threshold: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value permitted Monthly. This is reset on the last day of each month at 23:59:59 UTC";
                            readonly "x-order": 8;
                            readonly examples: readonly [12100000];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly monthly_value: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value of transactions spent in the threshold period";
                            readonly "x-order": 9;
                            readonly examples: readonly [1200];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly yearly_threshold: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value permitted per year and is reset on 31/12 at 23:59:59 UTC";
                            readonly "x-order": 10;
                            readonly examples: readonly [52100000];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly yearly_value: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The volume / value of transactions spent in the threshold period";
                            readonly "x-order": 11;
                            readonly examples: readonly [120200];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                    };
                };
                readonly traceId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for tracing this request";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCardToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly dpan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier for the DPAN";
                };
            };
            readonly required: readonly ["card_id", "dpan_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
                readonly DPAN: {
                    readonly type: "object";
                    readonly properties: {
                        readonly dpan_id: {
                            readonly type: "string";
                            readonly description: "CLOWD9 DPAN reference ID.";
                        };
                        readonly token_reference_id: {
                            readonly type: "string";
                            readonly description: "ID assigned by scheme network for the DPAN.";
                        };
                        readonly requestor_id: {
                            readonly type: "string";
                            readonly description: "DPAN requestor ID.";
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Type of DPAN.";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly description: "Visa or Mastercard";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status of the DPAN.";
                        };
                        readonly pan_entry_mode: {
                            readonly type: "string";
                            readonly description: "Method used to enter the PAN during tokenization.";
                        };
                        readonly activated_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Date and time when the DPAN was activated.";
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Date and time when the DPAN was created.";
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Date and time when the current status of the DPAN was set.";
                        };
                        readonly devices: {
                            readonly type: "array";
                            readonly description: "Collection of devices associated with the DPAN.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly device_id: {
                                        readonly type: "string";
                                        readonly description: "Clowd9 device ID.";
                                    };
                                    readonly identifier: {
                                        readonly type: "string";
                                        readonly description: "Network device identifier.";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Type of device.";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the device.";
                                    };
                                    readonly index: {
                                        readonly type: "integer";
                                        readonly description: "Device index (defaulted to 1 for MDES).";
                                    };
                                    readonly os_type: {
                                        readonly type: "string";
                                        readonly description: "Operating system type of the device.";
                                    };
                                    readonly os_version: {
                                        readonly type: "string";
                                        readonly description: "OS version of the device.";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetClient: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your Client Identifier";
                };
            };
            readonly required: readonly ["client_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly client: {
                    readonly type: "object";
                    readonly properties: {
                        readonly client_id: {
                            readonly type: "string";
                            readonly description: "Identifier associated to you";
                        };
                        readonly client_name: {
                            readonly type: "string";
                            readonly description: "Configured Name associated to you";
                        };
                        readonly client_level: {
                            readonly type: "string";
                            readonly description: "The Client Level for access";
                        };
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetClowd9Api: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["yaml", "json"];
                    readonly default: "json";
                    readonly examples: readonly ["json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The format of the specification to be returned. The default is JSON";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "A valid OpenAPI v3 specification document, served in the requested format (JSON or YAML). The actual content will conform to the OpenAPI 3.x.x structure.";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCustomer: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["customer_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your Client Identifier";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly customer: {
                    readonly title: "Customer";
                    readonly type: "object";
                    readonly required: readonly ["first_name", "last_name", "address", "created_at"];
                    readonly properties: {
                        readonly customer_id: {
                            readonly description: "The Identifier associated with the Customer";
                            readonly type: "string";
                            readonly minLength: 36;
                            readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                            readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 7;
                            readonly description: "Customer title. Format is Alpha, Numeric and Special Characters";
                            readonly examples: readonly ["Mr"];
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 50;
                            readonly description: "Customer first name. Format is Alpha";
                            readonly examples: readonly ["Alan"];
                        };
                        readonly middle_name: {
                            readonly type: "string";
                            readonly maxLength: 50;
                            readonly description: "Customer middle name. Format is Alpha";
                            readonly examples: readonly ["Mathison"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 50;
                            readonly description: "Customer last name. Format is Alpha";
                            readonly examples: readonly ["Turing"];
                        };
                        readonly date_of_birth: {
                            readonly type: "string";
                            readonly description: "Customer date of birth";
                            readonly examples: readonly ["24/10/1981"];
                        };
                        readonly phone_number: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 15;
                            readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                            readonly examples: readonly ["+447599999999"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 100;
                            readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                            readonly examples: readonly ["clowd9@clowd9.com"];
                        };
                        readonly external_ref: {
                            readonly type: "string";
                            readonly description: "This is a customer reference held in the client's system";
                            readonly examples: readonly ["customer-ref-123"];
                        };
                        readonly language_code: {
                            readonly type: "string";
                            readonly description: "The BCP-47 identification code of the language the customer prefers in SMS and email communications for 3DS OTP delivery";
                            readonly examples: readonly ["en_GB"];
                        };
                        readonly free_text: {
                            readonly type: "string";
                            readonly description: "Free text field for client to store any additional information";
                            readonly maxLength: 256;
                        };
                        readonly address: {
                            readonly title: "Customer's Address";
                            readonly required: readonly ["address_line1", "city", "country_iso", "post_code"];
                            readonly type: "object";
                            readonly properties: {
                                readonly address_line1: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 100;
                                    readonly description: "Customer address line 1. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["99 Church Meadows"];
                                };
                                readonly address_line2: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Customer address line 2. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["Green House"];
                                };
                                readonly address_line3: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Customer address line 3. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["Up The Hill"];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Customer City. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["London"];
                                };
                                readonly state_county_or_province: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Customer State, County or Province. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["London"];
                                };
                                readonly post_code: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 9;
                                    readonly description: "Customer Post Code. Format is Alpha, Numeric";
                                    readonly examples: readonly ["SW1A 1AA"];
                                };
                                readonly country_iso: {
                                    readonly type: "string";
                                    readonly minLength: 3;
                                    readonly maxLength: 3;
                                    readonly description: "Customer country code in ISO 3166-3 Alpha-3 representation, for example GBR (Great Britain).";
                                    readonly examples: readonly ["GBR"];
                                };
                            };
                        };
                        readonly identification: {
                            readonly type: "object";
                            readonly properties: {
                                readonly identification_1_type: {
                                    readonly type: "string";
                                    readonly description: "Customer identification type 1 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License.";
                                    readonly examples: readonly ["passport"];
                                };
                                readonly identification_1_id: {
                                    readonly type: "string";
                                    readonly description: "Alpha numeric value associated with the ID type";
                                    readonly examples: readonly ["ASDFG1234"];
                                };
                                readonly identification_1_country: {
                                    readonly type: "string";
                                    readonly description: "Identifier 1 issuing country (mandatory field if identification  type 1 is populated )";
                                    readonly examples: readonly ["GBR"];
                                };
                                readonly identification_1_state: {
                                    readonly type: "string";
                                    readonly description: "Identifier 1 issuing state (mandatory if identification 1 country is USA)";
                                    readonly examples: readonly ["Essex"];
                                };
                                readonly identification_2_type: {
                                    readonly type: "string";
                                    readonly description: "customer identifier type 2 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                                    readonly examples: readonly ["idcard"];
                                };
                                readonly identification_2_id: {
                                    readonly type: "string";
                                    readonly description: "Alpha numeric value associated with the ID type";
                                    readonly examples: readonly ["JKVMK3490"];
                                };
                                readonly identification_2_country: {
                                    readonly type: "string";
                                    readonly description: "Identifier 2 issuing country (mandatory if identification type 2 is populated)";
                                    readonly examples: readonly ["GBR"];
                                };
                                readonly identification_2_state: {
                                    readonly type: "string";
                                    readonly description: "Identifier 2 issuing state (mandatory if identification 2 country is USA)";
                                    readonly examples: readonly ["Essex"];
                                };
                            };
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Timestamp in ISO 8601 format with nanosecond precision (RFC3339Nano) and UTC time zone.\n";
                            readonly examples: readonly ["2022-08-03T16:55:51.123456789Z"];
                        };
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCustomerByExternalRef: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly external_ref: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External Reference Identifier";
                };
            };
            readonly required: readonly ["external_ref"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your Client Identifier";
                };
            };
            readonly required: readonly ["client_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly customer: {
                    readonly title: "Customer";
                    readonly type: "object";
                    readonly required: readonly ["first_name", "last_name", "address", "created_at"];
                    readonly properties: {
                        readonly customer_id: {
                            readonly description: "The Identifier associated with the Customer";
                            readonly type: "string";
                            readonly minLength: 36;
                            readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                            readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 7;
                            readonly description: "Customer title. Format is Alpha, Numeric and Special Characters";
                            readonly examples: readonly ["Mr"];
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 50;
                            readonly description: "Customer first name. Format is Alpha";
                            readonly examples: readonly ["Alan"];
                        };
                        readonly middle_name: {
                            readonly type: "string";
                            readonly maxLength: 50;
                            readonly description: "Customer middle name. Format is Alpha";
                            readonly examples: readonly ["Mathison"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 50;
                            readonly description: "Customer last name. Format is Alpha";
                            readonly examples: readonly ["Turing"];
                        };
                        readonly date_of_birth: {
                            readonly type: "string";
                            readonly description: "Customer date of birth";
                            readonly examples: readonly ["24/10/1981"];
                        };
                        readonly phone_number: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 15;
                            readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                            readonly examples: readonly ["+447599999999"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly minLength: 0;
                            readonly maxLength: 100;
                            readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                            readonly examples: readonly ["clowd9@clowd9.com"];
                        };
                        readonly external_ref: {
                            readonly type: "string";
                            readonly description: "This is a customer reference held in the client's system";
                            readonly examples: readonly ["customer-ref-123"];
                        };
                        readonly language_code: {
                            readonly type: "string";
                            readonly description: "The BCP-47 identification code of the language the customer prefers in SMS and email communications for 3DS OTP delivery";
                            readonly examples: readonly ["en_GB"];
                        };
                        readonly free_text: {
                            readonly type: "string";
                            readonly description: "Free text field for client to store any additional information";
                            readonly maxLength: 256;
                        };
                        readonly address: {
                            readonly title: "Customer's Address";
                            readonly required: readonly ["address_line1", "city", "country_iso", "post_code"];
                            readonly type: "object";
                            readonly properties: {
                                readonly address_line1: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 100;
                                    readonly description: "Customer address line 1. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["99 Church Meadows"];
                                };
                                readonly address_line2: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Customer address line 2. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["Green House"];
                                };
                                readonly address_line3: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 100;
                                    readonly description: "Customer address line 3. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["Up The Hill"];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Customer City. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["London"];
                                };
                                readonly state_county_or_province: {
                                    readonly type: "string";
                                    readonly minLength: 0;
                                    readonly maxLength: 50;
                                    readonly description: "Customer State, County or Province. Format is Alpha, Numeric and Special Characters";
                                    readonly examples: readonly ["London"];
                                };
                                readonly post_code: {
                                    readonly type: "string";
                                    readonly minLength: 1;
                                    readonly maxLength: 9;
                                    readonly description: "Customer Post Code. Format is Alpha, Numeric";
                                    readonly examples: readonly ["SW1A 1AA"];
                                };
                                readonly country_iso: {
                                    readonly type: "string";
                                    readonly minLength: 3;
                                    readonly maxLength: 3;
                                    readonly description: "Customer country code in ISO 3166-3 Alpha-3 representation, for example GBR (Great Britain).";
                                    readonly examples: readonly ["GBR"];
                                };
                            };
                        };
                        readonly identification: {
                            readonly type: "object";
                            readonly properties: {
                                readonly identification_1_type: {
                                    readonly type: "string";
                                    readonly description: "Customer identification type 1 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License.";
                                    readonly examples: readonly ["passport"];
                                };
                                readonly identification_1_id: {
                                    readonly type: "string";
                                    readonly description: "Alpha numeric value associated with the ID type";
                                    readonly examples: readonly ["ASDFG1234"];
                                };
                                readonly identification_1_country: {
                                    readonly type: "string";
                                    readonly description: "Identifier 1 issuing country (mandatory field if identification  type 1 is populated )";
                                    readonly examples: readonly ["GBR"];
                                };
                                readonly identification_1_state: {
                                    readonly type: "string";
                                    readonly description: "Identifier 1 issuing state (mandatory if identification 1 country is USA)";
                                    readonly examples: readonly ["Essex"];
                                };
                                readonly identification_2_type: {
                                    readonly type: "string";
                                    readonly description: "customer identifier type 2 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                                    readonly examples: readonly ["idcard"];
                                };
                                readonly identification_2_id: {
                                    readonly type: "string";
                                    readonly description: "Alpha numeric value associated with the ID type";
                                    readonly examples: readonly ["JKVMK3490"];
                                };
                                readonly identification_2_country: {
                                    readonly type: "string";
                                    readonly description: "Identifier 2 issuing country (mandatory if identification type 2 is populated)";
                                    readonly examples: readonly ["GBR"];
                                };
                                readonly identification_2_state: {
                                    readonly type: "string";
                                    readonly description: "Identifier 2 issuing state (mandatory if identification 2 country is USA)";
                                    readonly examples: readonly ["Essex"];
                                };
                            };
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Timestamp in ISO 8601 format with nanosecond precision (RFC3339Nano) and UTC time zone.\n";
                            readonly examples: readonly ["2022-08-03T16:55:51.123456789Z"];
                        };
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLedgerEntriesForAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly from_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Only entries from the date (YYYY-MM-DD) populated will be retrieved";
                    readonly examples: readonly ["2025-01-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Only entries before the date (YYYY-MM-DD) will be retrieved";
                    readonly examples: readonly ["2025-02-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from_time: {
                    readonly type: "string";
                    readonly format: "time";
                    readonly description: "Time in ISO 8601 format (HH:MM:SS). If not populated, all entries will be retrieved from 00:00:00 UTC of the from_date";
                    readonly examples: readonly ["12:24:46"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to_time: {
                    readonly type: "string";
                    readonly format: "time";
                    readonly description: "Time in ISO 8601 format (HH:MM:SS). If not populated, all entries will be retrieved up to 23:59:59 UTC of the to_date";
                    readonly examples: readonly ["12:24:46"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly description: "Enables you to order from the newest (asc) to the oldest or oldest (desc) to newest entry";
                    readonly examples: readonly ["asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly pattern: "^([1-9][0-9]?|100)$";
                    readonly description: "Allows you to limit the number of entries returned per request. Use the next_page_token for pagination.";
                    readonly examples: readonly ["100"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly description: "To retrieve the next selection of entries, the new_page_token is required";
                    readonly examples: readonly ["aWQrdGltZQo="];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from_date", "to_date"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accounts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly type: "string";
                                readonly description: "The Identifier associated to the Account";
                                readonly examples: readonly ["fcd0cecb-90dd-4ae2-879f-d0eda6fbddd4"];
                            };
                            readonly amount: {
                                readonly type: "string";
                                readonly description: "The amount of the entry. A - sign will mean a debit amount";
                                readonly examples: readonly ["-10000"];
                            };
                            readonly balance_type: {
                                readonly type: "string";
                                readonly description: "Identifies the balance_type the entry relates either Actual or Available";
                                readonly examples: readonly ["Actual"];
                            };
                            readonly date_time: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "When the event occurred";
                                readonly examples: readonly ["2022-08-03T16:55:51.123456789Z"];
                            };
                            readonly entry_source: {
                                readonly type: "string";
                                readonly description: "Identifies the source of the entry_type. For example, Network, API";
                                readonly examples: readonly ["pending"];
                            };
                            readonly entry_type: {
                                readonly type: "string";
                                readonly description: "Identifies the type of the entry provided by you in the API or by CLOWD9";
                                readonly examples: readonly ["authorization"];
                            };
                            readonly reference: {
                                readonly type: "string";
                                readonly description: "The reference you provided in the API, otherwise will be the transaction_linkid value if provided by the Network";
                                readonly examples: readonly ["395330444849561"];
                            };
                            readonly reference_id: {
                                readonly type: "string";
                                readonly description: "The reference_id if provided by you via the API entry. For Network Authorizations and Clearing, the transaction_id will be provided.";
                                readonly examples: readonly ["82c066b1-9b6e-4a98-b31a-ccc19951b462"];
                            };
                            readonly reference_name: {
                                readonly type: "string";
                                readonly description: "The information, if provided in the Increase Account, Decrease Account or Account to Account Transfer API. For Network Authorizations and Clearing, the reference_name will be populated with card_acceptor_name";
                                readonly examples: readonly ["CLOWD9 Travel UK"];
                            };
                        };
                    };
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly description: "Token - required for next page listing";
                    readonly examples: readonly ["aWQrdGltZQo="];
                };
                readonly count: {
                    readonly type: "string";
                    readonly description: "Total count of items";
                    readonly examples: readonly ["10"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSecureCardDetails: {
    readonly body: {
        readonly required: readonly ["customer_id", "encrypted_cipher"];
        readonly type: "object";
        readonly properties: {
            readonly customer_id: {
                readonly minLength: 36;
                readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                readonly type: "string";
                readonly description: "The Identifier associated with the Customer";
                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
            };
            readonly secure_id: {
                readonly minLength: 36;
                readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                readonly type: "string";
                readonly "x-sensitive": true;
                readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
            };
            readonly encrypted_cipher: {
                readonly type: "string";
                readonly description: "Encrypted Cipher";
                readonly examples: readonly ["NmUwNzlkY2ItZmEzZi00NzY5LWI0OTgtYTg2YTNiYzkxNDA3"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly pin: {
                    readonly type: "string";
                    readonly "x-sensitive": true;
                    readonly description: "Personal Identification Number";
                };
                readonly pan: {
                    readonly type: "string";
                    readonly "x-sensitive": true;
                    readonly description: "The Primary Account Number clients.";
                };
                readonly cvv: {
                    readonly type: "string";
                    readonly "x-sensitive": true;
                    readonly description: "Three digit card CVV number";
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
                readonly expiry_date: {
                    readonly type: "string";
                    readonly description: "Expiry date of the card. If not provided, a date will be assigned as per product configuration. YY/MM format.";
                    readonly examples: readonly ["dsag345DscCsd8QH4W0Xfr3VRvcmx13g=="];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSecureFrameKey: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["customer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly key: {
                    readonly minLength: 64;
                    readonly pattern: "[a-zA-Z0-9+/=]";
                    readonly type: "string";
                    readonly description: "The identifier of the key";
                    readonly examples: readonly ["MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCL42zoggnL+2dTRUjwbNN0qua66eyYFtGCpWASK7Da6NBsVt6tz3HfqTTuCLI+"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The identifier used to track the API request";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokenLifecycle: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly dpan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier for the DPAN (token)";
                };
            };
            readonly required: readonly ["card_id", "dpan_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly from_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Only entries from the date (YYYY-MM-DD) populated will be retrieved.\nIf not populated, all entries will be retrieved\n";
                    readonly examples: readonly ["2025-01-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Only entries before the date (YYYY-MM-DD) will be retrieved.\nIf not populated, all entries will be retrieved\n";
                    readonly examples: readonly ["2025-02-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from_time: {
                    readonly type: "string";
                    readonly format: "time";
                    readonly description: "Time in ISO 8601 format (HH:MM:SS). If not populated, all entries will be retrieved";
                    readonly examples: readonly ["12:24:46"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to_time: {
                    readonly type: "string";
                    readonly format: "time";
                    readonly description: "Time in ISO 8601 format (HH:MM:SS). If not populated, all entries will be retrieved";
                    readonly examples: readonly ["12:24:46"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly description: "To limit the number of lifecycle events to be returned per request. Use the next_page_token for pagination";
                    readonly examples: readonly ["50"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly description: "To retrieve the next selection of lifecycle events, the next_page_token is required";
                    readonly examples: readonly ["aWQrdGltZQo="];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly description: "Enables you to order from the newest (asc) to the oldest or oldest (desc) to newest";
                    readonly examples: readonly ["asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from_date", "to_date"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly dpan_id: {
                    readonly type: "string";
                    readonly description: "DPAN identifier";
                    readonly examples: readonly ["987e1234-e89b-12d3-a456-426614174111"];
                };
                readonly events: {
                    readonly type: "array";
                    readonly description: "Collection of lifecycle events";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly lifecycle_id: {
                                readonly type: "string";
                                readonly description: "Unique identifier for the lifecycle event";
                                readonly examples: readonly [""];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status at the time of the event";
                                readonly examples: readonly [""];
                            };
                            readonly action: {
                                readonly type: "string";
                                readonly description: "Action performed (e.g., SUSPEND, RESUME, DELETE, ACTIVATE)";
                                readonly examples: readonly [""];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly description: "Metadata key-value pairs describing the lifecycle event";
                                readonly additionalProperties: {
                                    readonly type: "string";
                                };
                            };
                            readonly performed_by: {
                                readonly type: "string";
                                readonly description: "Identifier of who performed the action";
                                readonly examples: readonly [""];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "When the event occurred";
                                readonly examples: readonly ["2022-08-03T16:55:51.123456789Z"];
                            };
                        };
                    };
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly description: "Token for next page of results";
                    readonly examples: readonly ["aWQrdGltZQo="];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly examples: readonly [404];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Token not found"];
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const HealthCheck: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of ok is returned";
                    readonly examples: readonly ["ok"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const IncreaseAccountBalance: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount"];
        readonly properties: {
            readonly amount: {
                readonly type: "integer";
                readonly format: "int64";
                readonly minLength: 1;
                readonly description: "The amount to be applied to the Account";
                readonly examples: readonly [10000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly reference_name: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 30;
                readonly description: "Optional information to be applied";
                readonly examples: readonly ["Debit Card"];
            };
            readonly reference: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Optional reference for the Account Balance change";
                readonly examples: readonly ["Weekly increase"];
            };
            readonly reference_id: {
                readonly minLength: 1;
                readonly type: "string";
                readonly description: "Unique reference Identifier associated to the Increase request";
                readonly examples: readonly ["Transfer 20250705"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly previous_actual_balance: {
                    readonly type: "string";
                    readonly description: "The previous actual balance prior to the request";
                    readonly examples: readonly ["100"];
                };
                readonly new_actual_balance: {
                    readonly type: "string";
                    readonly description: "The Actual balance following the request";
                    readonly examples: readonly ["200"];
                };
                readonly previous_available_balance: {
                    readonly type: "string";
                    readonly description: "The previous available balance of the Account";
                    readonly examples: readonly ["0"];
                };
                readonly new_available_balance: {
                    readonly type: "string";
                    readonly description: "The Available balance following the request";
                    readonly examples: readonly ["100"];
                };
                readonly trace_id: {
                    readonly pattern: "(?=[a-fA-F0-9]{32})(?=^[0-9a-fA-F]{32}$)";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const LinkCardWithAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["account_id", "card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const LinkCustomerWithAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["account_id", "customer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListBehaviours: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly sort: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly format: "uint64";
                    readonly minimum: 0;
                    readonly maximum: 18446744073709552000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly format: "uint64";
                    readonly minimum: 0;
                    readonly maximum: 18446744073709552000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly behaviours: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly behaviour_id: {
                                readonly type: "string";
                                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Behaviour for Product SAP"];
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListCardLimits: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limits: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly limit_short_name: {
                                readonly type: "string";
                                readonly description: "The limit_short_name associated to the limit_name";
                                readonly "x-order": 1;
                                readonly examples: readonly ["ecomm_acc"];
                            };
                            readonly limit_name: {
                                readonly type: "string";
                                readonly description: "Name of the limit";
                                readonly "x-order": 1;
                                readonly examples: readonly ["Ecom Limit"];
                            };
                            readonly realtime_threshold: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value permitted per individual transaction";
                                readonly "x-order": 3;
                                readonly examples: readonly [1000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly daily_threshold: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value permitted daily and resets at 23:59:59 UTC";
                                readonly "x-order": 4;
                                readonly examples: readonly [210000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly daily_value: {
                                readonly type: "integer";
                                readonly description: "The volume / value of transactions spent in the threshold period";
                                readonly format: "int64";
                                readonly "x-order": 5;
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly weekly_threshold: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value permitted weekly. This resets every Sunday at 23:59:59 UTC";
                                readonly "x-order": 6;
                                readonly examples: readonly [6100000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly weekly_value: {
                                readonly type: "integer";
                                readonly description: "The volume / value of transactions spent in the threshold period";
                                readonly format: "int64";
                                readonly "x-order": 7;
                                readonly examples: readonly [1000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly monthly_threshold: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value permitted Monthly. This is reset on the last day of each month at 23:59:59 UTC";
                                readonly "x-order": 8;
                                readonly examples: readonly [12100000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly monthly_value: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value of transactions spent in the threshold period";
                                readonly "x-order": 9;
                                readonly examples: readonly [1200];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly yearly_threshold: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value permitted per year and is reset on 31/12 at 23:59:59 UTC";
                                readonly "x-order": 10;
                                readonly examples: readonly [52100000];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly yearly_value: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The volume / value of transactions spent in the threshold period";
                                readonly "x-order": 11;
                                readonly examples: readonly [120200];
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListCardTokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly DPANs: {
                    readonly type: "array";
                    readonly description: "Collection of DPANs.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly dpan_id: {
                                readonly type: "string";
                                readonly description: "CLOWD9 DPAN reference ID.";
                            };
                            readonly token_reference_id: {
                                readonly type: "string";
                                readonly description: "ID assigned by scheme network for the DPAN.";
                            };
                            readonly requestor_id: {
                                readonly type: "string";
                                readonly description: "DPAN requestor ID.";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of DPAN.";
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly description: "Visa or Mastercard";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status of the DPAN.";
                            };
                            readonly pan_entry_mode: {
                                readonly type: "string";
                                readonly description: "Method used to enter the PAN during tokenization.";
                            };
                            readonly activated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "Date and time when the DPAN was activated.";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "Date and time when the DPAN was created.";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "Date and time when the current status of the DPAN was set.";
                            };
                            readonly devices: {
                                readonly type: "array";
                                readonly description: "Collection of devices associated with the DPAN.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly device_id: {
                                            readonly type: "string";
                                            readonly description: "Clowd9 device ID.";
                                        };
                                        readonly identifier: {
                                            readonly type: "string";
                                            readonly description: "Network device identifier.";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Type of device.";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "Name of the device.";
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "Device index (defaulted to 1 for MDES).";
                                        };
                                        readonly os_type: {
                                            readonly type: "string";
                                            readonly description: "Operating system type of the device.";
                                        };
                                        readonly os_version: {
                                            readonly type: "string";
                                            readonly description: "OS version of the device.";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListClients: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your Client Identifier";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly clients: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly client_id: {
                                readonly type: "string";
                                readonly description: "Identifier associated to you";
                            };
                            readonly client_name: {
                                readonly type: "string";
                                readonly description: "Configured Name associated to you";
                            };
                            readonly client_level: {
                                readonly type: "string";
                                readonly description: "The Client Level for access";
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListCustomers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your Client Identifier";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly examples: readonly ["asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "To return the Customer list either by the oldest (desc) or newest (asc) creation date";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "To limit the number of Customer records to be returned per request. Use the new_page_token for pagination";
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "To retrieve the next selection of Customers, the new_page_token is required";
                };
            };
            readonly required: readonly ["client_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly customers: {
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Customer";
                        readonly type: "object";
                        readonly required: readonly ["first_name", "last_name", "address", "created_at"];
                        readonly properties: {
                            readonly customer_id: {
                                readonly description: "The Identifier associated with the Customer";
                                readonly type: "string";
                                readonly minLength: 36;
                                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                                readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Customer title. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Customer first name. Format is Alpha";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly maxLength: 50;
                                readonly description: "Customer middle name. Format is Alpha";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Customer last name. Format is Alpha";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly date_of_birth: {
                                readonly type: "string";
                                readonly description: "Customer date of birth";
                                readonly examples: readonly ["24/10/1981"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                            readonly external_ref: {
                                readonly type: "string";
                                readonly description: "This is a customer reference held in the client's system";
                                readonly examples: readonly ["customer-ref-123"];
                            };
                            readonly language_code: {
                                readonly type: "string";
                                readonly description: "The BCP-47 identification code of the language the customer prefers in SMS and email communications for 3DS OTP delivery";
                                readonly examples: readonly ["en_GB"];
                            };
                            readonly free_text: {
                                readonly type: "string";
                                readonly description: "Free text field for client to store any additional information";
                                readonly maxLength: 256;
                            };
                            readonly address: {
                                readonly title: "Customer's Address";
                                readonly required: readonly ["address_line1", "city", "country_iso", "post_code"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly address_line1: {
                                        readonly type: "string";
                                        readonly minLength: 1;
                                        readonly maxLength: 100;
                                        readonly description: "Customer address line 1. Format is Alpha, Numeric and Special Characters";
                                        readonly examples: readonly ["99 Church Meadows"];
                                    };
                                    readonly address_line2: {
                                        readonly type: "string";
                                        readonly minLength: 0;
                                        readonly maxLength: 100;
                                        readonly description: "Customer address line 2. Format is Alpha, Numeric and Special Characters";
                                        readonly examples: readonly ["Green House"];
                                    };
                                    readonly address_line3: {
                                        readonly type: "string";
                                        readonly minLength: 0;
                                        readonly maxLength: 100;
                                        readonly description: "Customer address line 3. Format is Alpha, Numeric and Special Characters";
                                        readonly examples: readonly ["Up The Hill"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly minLength: 0;
                                        readonly maxLength: 50;
                                        readonly description: "Customer City. Format is Alpha, Numeric and Special Characters";
                                        readonly examples: readonly ["London"];
                                    };
                                    readonly state_county_or_province: {
                                        readonly type: "string";
                                        readonly minLength: 0;
                                        readonly maxLength: 50;
                                        readonly description: "Customer State, County or Province. Format is Alpha, Numeric and Special Characters";
                                        readonly examples: readonly ["London"];
                                    };
                                    readonly post_code: {
                                        readonly type: "string";
                                        readonly minLength: 1;
                                        readonly maxLength: 9;
                                        readonly description: "Customer Post Code. Format is Alpha, Numeric";
                                        readonly examples: readonly ["SW1A 1AA"];
                                    };
                                    readonly country_iso: {
                                        readonly type: "string";
                                        readonly minLength: 3;
                                        readonly maxLength: 3;
                                        readonly description: "Customer country code in ISO 3166-3 Alpha-3 representation, for example GBR (Great Britain).";
                                        readonly examples: readonly ["GBR"];
                                    };
                                };
                            };
                            readonly identification: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly identification_1_type: {
                                        readonly type: "string";
                                        readonly description: "Customer identification type 1 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License.";
                                        readonly examples: readonly ["passport"];
                                    };
                                    readonly identification_1_id: {
                                        readonly type: "string";
                                        readonly description: "Alpha numeric value associated with the ID type";
                                        readonly examples: readonly ["ASDFG1234"];
                                    };
                                    readonly identification_1_country: {
                                        readonly type: "string";
                                        readonly description: "Identifier 1 issuing country (mandatory field if identification  type 1 is populated )";
                                        readonly examples: readonly ["GBR"];
                                    };
                                    readonly identification_1_state: {
                                        readonly type: "string";
                                        readonly description: "Identifier 1 issuing state (mandatory if identification 1 country is USA)";
                                        readonly examples: readonly ["Essex"];
                                    };
                                    readonly identification_2_type: {
                                        readonly type: "string";
                                        readonly description: "customer identifier type 2 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                                        readonly examples: readonly ["idcard"];
                                    };
                                    readonly identification_2_id: {
                                        readonly type: "string";
                                        readonly description: "Alpha numeric value associated with the ID type";
                                        readonly examples: readonly ["JKVMK3490"];
                                    };
                                    readonly identification_2_country: {
                                        readonly type: "string";
                                        readonly description: "Identifier 2 issuing country (mandatory if identification type 2 is populated)";
                                        readonly examples: readonly ["GBR"];
                                    };
                                    readonly identification_2_state: {
                                        readonly type: "string";
                                        readonly description: "Identifier 2 issuing state (mandatory if identification 2 country is USA)";
                                        readonly examples: readonly ["Essex"];
                                    };
                                };
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "Timestamp in ISO 8601 format with nanosecond precision (RFC3339Nano) and UTC time zone.\n";
                                readonly examples: readonly ["2022-08-03T16:55:51.123456789Z"];
                            };
                        };
                    };
                };
                readonly next_page_token: {
                    readonly type: "string";
                    readonly description: "Token - required for next page listing";
                    readonly examples: readonly ["aWQrdGltZQo="];
                };
                readonly count: {
                    readonly type: "string";
                    readonly description: "Total count of items";
                    readonly examples: readonly ["10"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnboardCard: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["card", "customer", "product_id"];
        readonly properties: {
            readonly card_manufacturer_id: {
                readonly minLength: 36;
                readonly description: "Card Manufacturer id provided by CLOWD9";
                readonly type: "string";
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["99f38751-ad34-44c5-842b-bb448f430299"];
            };
            readonly delivery: {
                readonly type: "object";
                readonly title: "Delivery";
                readonly properties: {
                    readonly thermal_line1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line1"];
                    };
                    readonly thermal_line2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line2"];
                    };
                    readonly emboss_name: {
                        readonly type: "string";
                        readonly minLength: 3;
                        readonly maxLength: 26;
                        readonly description: "Name displayed on the front of the card. This field is mandatory for Physical Card format, optional for Virtual card. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Alan Turing"];
                    };
                    readonly emboss_line4: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 35;
                        readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly fulfil1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil1"];
                    };
                    readonly fulfil2: {
                        readonly type: "string";
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil2"];
                    };
                    readonly card_delivery_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 1;
                        readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                        readonly examples: readonly ["1"];
                    };
                    readonly envelope_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "Envelope reference for the card packaging and is to be agreed with the Card Manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly carrier_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["carrier_reference"];
                    };
                    readonly carrier_lang_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 2;
                        readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                        readonly examples: readonly ["EN"];
                    };
                    readonly design_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["design_reference"];
                    };
                    readonly bulk_address_id: {
                        readonly description: "Identifier for the Bulk Address";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a4da9a3d-54c8-499c-9f3b-c1cb5f3f8bbe"];
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery county or province";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly contact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Delivery contact title";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact first name";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact middle name";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact last name";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                        };
                    };
                };
            };
            readonly customer: {
                readonly title: "Customer";
                readonly type: "object";
                readonly required: readonly ["first_name", "last_name", "address", "created_at"];
                readonly properties: {
                    readonly customer_id: {
                        readonly description: "The Identifier associated with the Customer";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 7;
                        readonly description: "Customer title. Format is Alpha, Numeric and Special Characters";
                        readonly examples: readonly ["Mr"];
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer first name. Format is Alpha";
                        readonly examples: readonly ["Alan"];
                    };
                    readonly middle_name: {
                        readonly type: "string";
                        readonly maxLength: 50;
                        readonly description: "Customer middle name. Format is Alpha";
                        readonly examples: readonly ["Mathison"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer last name. Format is Alpha";
                        readonly examples: readonly ["Turing"];
                    };
                    readonly date_of_birth: {
                        readonly type: "string";
                        readonly description: "Customer date of birth";
                        readonly examples: readonly ["24/10/1981"];
                    };
                    readonly phone_number: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 15;
                        readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                        readonly examples: readonly ["+447599999999"];
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 100;
                        readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                        readonly examples: readonly ["clowd9@clowd9.com"];
                    };
                    readonly external_ref: {
                        readonly type: "string";
                        readonly description: "This is a customer reference held in the client's system";
                        readonly examples: readonly ["customer-ref-123"];
                    };
                    readonly language_code: {
                        readonly type: "string";
                        readonly description: "The BCP-47 identification code of the language the customer prefers in SMS and email communications for 3DS OTP delivery";
                        readonly examples: readonly ["en_GB"];
                    };
                    readonly free_text: {
                        readonly type: "string";
                        readonly description: "Free text field for client to store any additional information";
                        readonly maxLength: 256;
                    };
                    readonly address: {
                        readonly title: "Customer's Address";
                        readonly required: readonly ["address_line1", "city", "country_iso", "post_code"];
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Customer City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Customer State, County or Province. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Customer Post Code. Format is Alpha, Numeric";
                                readonly examples: readonly ["SW1A 1AA"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 Alpha-3 representation, for example GBR (Great Britain).";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly identification: {
                        readonly type: "object";
                        readonly properties: {
                            readonly identification_1_type: {
                                readonly type: "string";
                                readonly description: "Customer identification type 1 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License.";
                                readonly examples: readonly ["passport"];
                            };
                            readonly identification_1_id: {
                                readonly type: "string";
                                readonly description: "Alpha numeric value associated with the ID type";
                                readonly examples: readonly ["ASDFG1234"];
                            };
                            readonly identification_1_country: {
                                readonly type: "string";
                                readonly description: "Identifier 1 issuing country (mandatory field if identification  type 1 is populated )";
                                readonly examples: readonly ["GBR"];
                            };
                            readonly identification_1_state: {
                                readonly type: "string";
                                readonly description: "Identifier 1 issuing state (mandatory if identification 1 country is USA)";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly identification_2_type: {
                                readonly type: "string";
                                readonly description: "customer identifier type 2 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                                readonly examples: readonly ["idcard"];
                            };
                            readonly identification_2_id: {
                                readonly type: "string";
                                readonly description: "Alpha numeric value associated with the ID type";
                                readonly examples: readonly ["JKVMK3490"];
                            };
                            readonly identification_2_country: {
                                readonly type: "string";
                                readonly description: "Identifier 2 issuing country (mandatory if identification type 2 is populated)";
                                readonly examples: readonly ["GBR"];
                            };
                            readonly identification_2_state: {
                                readonly type: "string";
                                readonly description: "Identifier 2 issuing state (mandatory if identification 2 country is USA)";
                                readonly examples: readonly ["Essex"];
                            };
                        };
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly description: "Timestamp in ISO 8601 format with nanosecond precision (RFC3339Nano) and UTC time zone.\n";
                        readonly examples: readonly ["2022-08-03T16:55:51.123456789Z"];
                    };
                };
            };
            readonly product_id: {
                readonly minLength: 36;
                readonly description: "Identifier of card product. The ID is generated by CLOWD9";
                readonly type: "string";
                readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                readonly examples: readonly ["18ef9392-bd29-4f40-8b22-3f756977b887"];
            };
            readonly card: {
                readonly type: "object";
                readonly required: readonly ["card_id", "card_status", "format"];
                readonly properties: {
                    readonly card_id: {
                        readonly description: "The Identifier associated to the Card";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly secure_id: {
                        readonly description: "Used to retrieve and set the PIN information. The value is same as provided for the card_id";
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly format: {
                        readonly type: "string";
                        readonly enum: readonly ["virtual", "physical"];
                        readonly description: "Card format, Virtual or Physical";
                        readonly examples: readonly ["physical"];
                    };
                    readonly card_status: {
                        readonly type: "string";
                        readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                        readonly examples: readonly ["active"];
                    };
                    readonly pin: {
                        readonly type: "string";
                        readonly "x-sensitive": true;
                        readonly pattern: "^[0-9]{4,6}$";
                        readonly minLength: 4;
                        readonly maxLength: 6;
                        readonly description: "Desired PIN (digits only). Length 4-6. If not supplied, the system will generate a value.\nOmit when using Secure PIN (`pin_secure`)\n";
                        readonly examples: readonly ["1234"];
                    };
                    readonly pin_secure: {
                        readonly type: "string";
                        readonly "x-sensitive": true;
                        readonly description: "PIN encrypted with customer key. If not supplied, the system will generate a value. Omit when using pin";
                        readonly examples: readonly ["Qp3p7SzE7KBRZ3YzdC9rRBx8Yw=="];
                    };
                    readonly expiry_date: {
                        readonly pattern: "^\\d{2}\\/(0[1-9]|1[0-2])$";
                        readonly type: "string";
                        readonly description: "Expiry date of the card. If not provided, a date will be assigned as per product configuration. YY/MM format";
                        readonly examples: readonly ["26/08"];
                    };
                    readonly valid_from_date: {
                        readonly pattern: "^\\d{2}\\/(0[1-9]|1[0-2])$";
                        readonly type: "string";
                        readonly description: "Date the card is valid from. If not provided, card will be valid from card generation date. YY/MM format";
                        readonly examples: readonly ["24/08"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["customer_id"];
            readonly properties: {
                readonly program_id: {
                    readonly description: "The identifier associated with the Program";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
                readonly customer_id: {
                    readonly description: "The Identifier associated with the Customer";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
                };
                readonly card_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated with the card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly secure_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "Provided for a Physical card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "The status of the card";
                        };
                        readonly pin: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The PIN value as provided or generated by CLOWD9";
                        };
                        readonly pan: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The last four digits of the Primary Account Number (PAN)";
                        };
                        readonly cvv: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "Three digit Card Verification Value";
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly description: "Expiry date of the card";
                        };
                        readonly valid_from_date: {
                            readonly type: "string";
                            readonly description: "Date the card is valid from";
                        };
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RefreshToken: {
    readonly body: {
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly access_token: {
                    readonly type: "string";
                    readonly description: "To be used to Access the CLOWD9 APIs";
                    readonly "x-sensitive": true;
                };
                readonly refresh_token: {
                    readonly type: "string";
                    readonly description: "For future use when the JWT lifespan of 120 minutes has been exceeded";
                    readonly "x-sensitive": true;
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
                readonly api_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "API keys Identifier";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RelayOobAuthResult: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly result: {
                readonly type: "string";
                readonly description: "Authentication Result. Values are Approved or Declined";
                readonly examples: readonly ["approved, declined"];
            };
            readonly reason_code: {
                readonly type: "string";
                readonly examples: readonly ["approved, userdeclined,transactionnotrecognized,noregisteredapp, appstatusinvalid,timedout,appunreachable"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly sp_transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["sp_transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RenewCard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly secure_id: {
                readonly type: "string";
                readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
            };
            readonly card: {
                readonly type: "object";
                readonly properties: {
                    readonly card_id: {
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly description: "The Identifier associated to the Card";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly secure_id: {
                        readonly type: "string";
                        readonly minLength: 36;
                        readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly format: {
                        readonly type: "string";
                        readonly examples: readonly ["physical"];
                    };
                    readonly card_status: {
                        readonly type: "string";
                        readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                        readonly examples: readonly ["inactive"];
                    };
                    readonly expiry_date: {
                        readonly type: "string";
                        readonly description: "Expiry date of the card. If not provided, a date will be assigned as per product configuration. YY/MM format";
                        readonly examples: readonly ["25/01"];
                    };
                    readonly valid_from_date: {
                        readonly type: "string";
                        readonly description: "Date the card is valid from. If not provided, card will be valid from card generation date. YY/MM format";
                        readonly examples: readonly ["26/01"];
                    };
                };
            };
            readonly delivery: {
                readonly title: "DELIVERY AND FULFILMENT";
                readonly type: "object";
                readonly properties: {
                    readonly thermal_line1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line1"];
                    };
                    readonly thermal_line2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line2"];
                    };
                    readonly emboss_name: {
                        readonly type: "string";
                        readonly minLength: 3;
                        readonly maxLength: 26;
                        readonly description: "The name displayed on the front of the Physical card. For Physical format, if you do not populate this field, the previous emboss_name provided will be used. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["emboss_name"];
                    };
                    readonly emboss_line4: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 35;
                        readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["emboss_line4"];
                    };
                    readonly fulfil1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil1"];
                    };
                    readonly fulfil2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil2"];
                    };
                    readonly card_delivery_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 1;
                        readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                        readonly examples: readonly ["1"];
                    };
                    readonly envelope_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "Envelope reference for the card packaging and is to be agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly carrier_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["carrier_ref"];
                    };
                    readonly carrier_lang_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 2;
                        readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                        readonly examples: readonly ["EN"];
                    };
                    readonly design_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["design_ref"];
                    };
                    readonly bulk_address_id: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "The Identifier generated by CLOWD9 when a Bulk Address is created. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["35bcf177-547c-46ae-bd6c-738faee2d87f"];
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery county or province";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly contact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Delivery contact title";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact first name";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact middle name";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact last name";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated with the card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly secure_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "Provided for a Physical card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "The status of the card";
                        };
                        readonly pin: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The PIN value as provided or generated by CLOWD9";
                        };
                        readonly pan: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The last four digits of the Primary Account Number (PAN)";
                        };
                        readonly cvv: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "Three digit Card Verification Value";
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly description: "Expiry date of the card";
                        };
                        readonly valid_from_date: {
                            readonly type: "string";
                            readonly description: "Date the card is valid from";
                        };
                    };
                };
                readonly customer_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the Customer";
                    readonly examples: readonly ["583931bf-af63-4ecf-a7ef-19ab3ece5725"];
                };
                readonly program_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The identifier of the card program";
                    readonly examples: readonly ["407c063f-a1a5-41b0-a70b-8d9f264ee000"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReplaceCard: {
    readonly body: {
        readonly required: readonly ["card"];
        readonly type: "object";
        readonly properties: {
            readonly secure_id: {
                readonly type: "string";
                readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
            };
            readonly card: {
                readonly required: readonly ["card_id", "format", "card_status"];
                readonly type: "object";
                readonly properties: {
                    readonly card_id: {
                        readonly minLength: 36;
                        readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                        readonly type: "string";
                        readonly description: "The Identifier associated to the Card";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly secure_id: {
                        readonly minLength: 36;
                        readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                        readonly type: "string";
                        readonly description: "Used to retrieve and set the PIN information and is to be the same value as provided for the card_id";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly format: {
                        readonly type: "string";
                        readonly enum: readonly ["virtual", "physical"];
                        readonly description: "Card format, physical or virtual.";
                        readonly examples: readonly ["virtual"];
                    };
                    readonly card_status: {
                        readonly type: "string";
                        readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                        readonly examples: readonly ["inactive"];
                    };
                    readonly pin: {
                        readonly type: "string";
                        readonly "x-sensitive": true;
                        readonly description: "Desired PIN for the card. If not supplied, the system will generate a value. Omit when using Secure PIN (`pin_secure`)";
                    };
                    readonly pin_secure: {
                        readonly type: "string";
                        readonly "x-sensitive": true;
                        readonly description: "PIN encrypted with customer key. Desired PIN (digits only). If not supplied, the system will generate a value. Omit when using pin";
                        readonly examples: readonly ["Qp3p7SzE7KBRZ3YzdC9rRBx8Yw=="];
                    };
                    readonly expiry_date: {
                        readonly pattern: "^\\d{2}\\/(0[1-9]|1[0-2])$";
                        readonly type: "string";
                        readonly description: "Expiry date of the card. If not provided, a date will be assigned as per product configuration. YY/MM format";
                        readonly examples: readonly ["26/08"];
                    };
                    readonly valid_from_date: {
                        readonly pattern: "^\\d{2}\\/(0[1-9]|1[0-2])$";
                        readonly type: "string";
                        readonly description: "Date the card is valid from. If not provided, card will be valid from card generation date. YY/MM format";
                        readonly examples: readonly ["22/08"];
                    };
                };
            };
            readonly delivery: {
                readonly title: "DELIVERY AND FULFILMENT";
                readonly type: "object";
                readonly properties: {
                    readonly thermal_line1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly thermal_line2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly emboss_name: {
                        readonly type: "string";
                        readonly minLength: 3;
                        readonly maxLength: 26;
                        readonly description: "The name displayed on the front of the Physical card. For Physical format, if you do not populate this field, the previous emboss_name provided will be used. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly emboss_line4: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 35;
                        readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly fulfil1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil1"];
                    };
                    readonly fulfil2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil2"];
                    };
                    readonly card_delivery_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 1;
                        readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                        readonly examples: readonly ["1"];
                    };
                    readonly envelope_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "Envelope reference for the card packaging and is to be agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly carrier_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["carrier_ref"];
                    };
                    readonly carrier_lang_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 2;
                        readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                    };
                    readonly design_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["design ref"];
                    };
                    readonly bulk_address_id: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "The Identifier generated by CLOWD9 when a Bulk Address is created. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["61d87137-42d4-418f-b3cb-fa51fcec1111"];
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery county or province";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly contact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Delivery contact title";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact first name";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact middle name";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact last name";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "The Identifier associated with the card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly secure_id: {
                            readonly minLength: 36;
                            readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                            readonly type: "string";
                            readonly description: "Provided for a Physical card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "The status of the card";
                        };
                        readonly pin: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The PIN value as provided or generated by CLOWD9";
                        };
                        readonly pan: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "The last four digits of the Primary Account Number (PAN)";
                        };
                        readonly cvv: {
                            readonly type: "string";
                            readonly "x-sensitive": true;
                            readonly description: "Three digit Card Verification Value";
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly description: "Expiry date of the card";
                        };
                        readonly valid_from_date: {
                            readonly type: "string";
                            readonly description: "Date the card is valid from";
                        };
                    };
                };
                readonly customer_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the Customer";
                    readonly examples: readonly ["583931bf-af63-4ecf-a7ef-19ab3ece5725"];
                };
                readonly program_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The identifier of the card program";
                    readonly examples: readonly ["407c063f-a1a5-41b0-a70b-8d9f264ee000"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ResyncCardToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly dpan_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the DPAN";
                };
            };
            readonly required: readonly ["card_id", "dpan_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SetCardStatus: {
    readonly body: {
        readonly required: readonly ["status"];
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly description: "The desired new status for the card. Use ListCardStatus.";
                readonly examples: readonly ["lost"];
            };
            readonly note: {
                readonly type: "string";
                readonly examples: readonly ["Card confirmed lost"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
                readonly old_card_status: {
                    readonly type: "string";
                    readonly description: "Previous card status prior to status change";
                    readonly examples: readonly ["active"];
                };
                readonly new_card_status: {
                    readonly type: "string";
                    readonly description: "New status post status change";
                    readonly examples: readonly ["lost"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SetCardUsage: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly usage: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the usage";
                            readonly examples: readonly ["atm_pin_change"];
                        };
                        readonly enabled: {
                            readonly type: "boolean";
                            readonly description: "boolean value";
                            readonly examples: readonly [true];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly usage: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the usage";
                                readonly examples: readonly ["atm_pin_change"];
                            };
                            readonly enabled: {
                                readonly type: "boolean";
                                readonly description: "boolean value";
                                readonly examples: readonly [true];
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SetSecurePin: {
    readonly body: {
        readonly required: readonly ["secure_id", "secure_pin"];
        readonly type: "object";
        readonly properties: {
            readonly secure_pin: {
                readonly type: "string";
                readonly "x-sensitive": true;
                readonly description: "Encrypted PIN using the Customer's public key";
            };
            readonly secure_id: {
                readonly minLength: 36;
                readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                readonly type: "string";
                readonly "x-sensitive": true;
                readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const StatusChangeCardToken: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly action: {
                readonly type: "string";
                readonly description: "Specifies the action to perform on the DPAN.";
                readonly examples: readonly ["activate or deactivate or suspend or resume"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly dpan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier for the DPAN to be managed";
                };
            };
            readonly required: readonly ["card_id", "dpan_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
                readonly DPAN: {
                    readonly type: "object";
                    readonly properties: {
                        readonly dpan_id: {
                            readonly type: "string";
                            readonly description: "CLOWD9 DPAN reference ID.";
                        };
                        readonly token_reference_id: {
                            readonly type: "string";
                            readonly description: "ID assigned by scheme network for the DPAN.";
                        };
                        readonly requestor_id: {
                            readonly type: "string";
                            readonly description: "DPAN requestor ID.";
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Type of DPAN.";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly description: "Visa or Mastercard";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status of the DPAN.";
                        };
                        readonly pan_entry_mode: {
                            readonly type: "string";
                            readonly description: "Method used to enter the PAN during tokenization.";
                        };
                        readonly activated_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Date and time when the DPAN was activated.";
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Date and time when the DPAN was created.";
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Date and time when the current status of the DPAN was set.";
                        };
                        readonly devices: {
                            readonly type: "array";
                            readonly description: "Collection of devices associated with the DPAN.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly device_id: {
                                        readonly type: "string";
                                        readonly description: "Clowd9 device ID.";
                                    };
                                    readonly identifier: {
                                        readonly type: "string";
                                        readonly description: "Network device identifier.";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Type of device.";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the device.";
                                    };
                                    readonly index: {
                                        readonly type: "integer";
                                        readonly description: "Device index (defaulted to 1 for MDES).";
                                    };
                                    readonly os_type: {
                                        readonly type: "string";
                                        readonly description: "Operating system type of the device.";
                                    };
                                    readonly os_version: {
                                        readonly type: "string";
                                        readonly description: "OS version of the device.";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TdsPasswordAuthentication: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly secure_password: {
                readonly type: "string";
                readonly format: "base64";
                readonly description: "Password encrypted with the customer's public key and encoded in Base64 format";
                readonly examples: readonly ["<secure_password_in_base64>"];
            };
        };
        readonly required: readonly ["secure_password"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly description: "The Identifier associated to the Card";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
            };
            readonly required: readonly ["card_id"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TransferFromAccountToAccount: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["source_account_id", "destination_account_id", "amount"];
        readonly properties: {
            readonly source_account_id: {
                readonly type: "string";
                readonly minLength: 36;
                readonly description: "The Identifier associated to Account where the amount is to be transferred from";
                readonly examples: readonly ["516ed7e6-ced5-44f1-b4f2-6878bc33be58"];
            };
            readonly destination_account_id: {
                readonly type: "string";
                readonly minLength: 36;
                readonly description: "The Identifier associated to Account where the amount is to be transferred to";
                readonly examples: readonly ["29860f32-5aad-448d-bd5e-a7f9218422f6"];
            };
            readonly amount: {
                readonly type: "integer";
                readonly format: "int64";
                readonly minLength: 1;
                readonly description: "The amount to be transferred between accounts";
                readonly examples: readonly [100];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly reference_name: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 30;
                readonly description: "Optional information to be applied";
                readonly examples: readonly ["Debit Card"];
            };
            readonly reference: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Optional reference for the Account Balance change";
                readonly examples: readonly ["Weekly increase"];
            };
            readonly reference_id: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Optional Identifier relating to the Account Balance change";
                readonly examples: readonly ["Transfer 20250707"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UnblockPin: {
    readonly body: {
        readonly required: readonly ["secure_id"];
        readonly type: "object";
        readonly properties: {
            readonly secure_id: {
                readonly minLength: 36;
                readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                readonly type: "string";
                readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UnlinkCardFromAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["account_id", "card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UnlinkCustomerFromAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["account_id", "customer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateAccountStatus: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["status"];
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly enum: readonly ["inactive", "active", "closed", "freeze"];
                readonly description: "Default is inactive. All Account activity is restricted until set to Active";
                readonly examples: readonly ["active"];
            };
            readonly note: {
                readonly type: "string";
                readonly maxLength: 256;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Account";
                };
            };
            readonly required: readonly ["account_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_collections: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly previous_account_status: {
                                readonly type: "string";
                                readonly description: "Previous status of the Account";
                                readonly examples: readonly ["inactive"];
                            };
                            readonly new_account_status: {
                                readonly type: "string";
                                readonly description: "New status of the Account";
                                readonly examples: readonly ["active"];
                            };
                            readonly trace_id: {
                                readonly pattern: "[a-fA-F0-9]{32}";
                                readonly type: "string";
                                readonly description: "The Identifier associated with the API";
                                readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateBulkAddress: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 7;
                readonly description: "Title (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Mr"];
            };
            readonly first_name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 50;
                readonly description: "First name ( person in charge of receiving the bulk cards). Format is Alpha only";
                readonly examples: readonly ["Alan"];
            };
            readonly middle_name: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 50;
                readonly description: "Middle name (person in charge of receiving the bulk cards). Format is Alpha only";
                readonly examples: readonly ["Mathison"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 50;
                readonly description: "Last name (person in charge of receiving the bulk cards). Format is Alpha only";
                readonly examples: readonly ["Turing"];
            };
            readonly phone_number: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 15;
                readonly description: "Phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                readonly examples: readonly ["+447599999999"];
            };
            readonly email: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["clowd9@clowd9.com"];
            };
            readonly address_line1: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 100;
                readonly description: "Bulk delivery address line 1. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["99 Church Meadows"];
            };
            readonly address_line2: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Bulk delivery address line 2. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Green House"];
            };
            readonly address_line3: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Bulk delivery address line 3. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Up The Hill"];
            };
            readonly city: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 50;
                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["London"];
            };
            readonly post_code: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 9;
                readonly description: "Bulk delivery address Postal Code. Format is ISO  Alpha, Numeric";
                readonly examples: readonly ["CM7 5SL"];
            };
            readonly state_county_or_province: {
                readonly type: "string";
                readonly minLength: 0;
                readonly maxLength: 100;
                readonly description: "Bulk Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                readonly examples: readonly ["Essex"];
            };
            readonly country_iso: {
                readonly type: "string";
                readonly minLength: 3;
                readonly maxLength: 3;
                readonly description: "Bulk Delivery country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                readonly examples: readonly ["GBR"];
            };
            readonly bulk_delivery_method: {
                readonly type: "integer";
                readonly format: "int32";
                readonly enum: readonly [1, 2, 3, 4];
                readonly description: "The method for bulk dispatch. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special)";
                readonly examples: readonly [1];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly bulk_ref: {
                readonly type: "string";
                readonly description: "Clients must agree a bulk reference with the Card Manufacturer. Cards with the same bulk_address_id will be sent together to the bulk address. Format is Alpha, Numeric and Special Characters, maximum length of 36";
                readonly examples: readonly ["CLOWD92024"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_file_schedule_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Card Manufacturer configuration Id generated by CLOWD9 and associated to Product Identifier";
                };
                readonly bulk_address_id: {
                    readonly type: "string";
                    readonly examples: readonly ["b97882a6-949b-49db-9549-9de9be2eca33"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier of the Bulk Address";
                };
            };
            readonly required: readonly ["card_file_schedule_id", "bulk_address_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly bulk_address_id: {
                    readonly description: "Identifier for the Bulk Address";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a4da9a3d-54c8-499c-9f3b-c1cb5f3f8bbe"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 7;
                    readonly description: "Title (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Mr"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "First name ( person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Alan"];
                };
                readonly middle_name: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 50;
                    readonly description: "Middle name (person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Mathison"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "Last name (person in charge of receiving the bulk cards). Format is Alpha only";
                    readonly examples: readonly ["Turing"];
                };
                readonly phone_number: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 15;
                    readonly description: "Phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                    readonly examples: readonly ["+447599999999"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["clowd9@clowd9.com"];
                };
                readonly address_line1: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 1. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["99 Church Meadows"];
                };
                readonly address_line2: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 2. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Green House"];
                };
                readonly address_line3: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk delivery address line 3. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Up The Hill"];
                };
                readonly city: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 50;
                    readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["London"];
                };
                readonly post_code: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 9;
                    readonly description: "Bulk delivery address Postal Code. Format is ISO  Alpha, Numeric";
                    readonly examples: readonly ["CM7 5SL"];
                };
                readonly state_county_or_province: {
                    readonly type: "string";
                    readonly minLength: 0;
                    readonly maxLength: 100;
                    readonly description: "Bulk Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                    readonly examples: readonly ["Essex"];
                };
                readonly country_iso: {
                    readonly type: "string";
                    readonly minLength: 3;
                    readonly maxLength: 3;
                    readonly description: "Bulk Delivery country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                    readonly examples: readonly ["GBR"];
                };
                readonly bulk_delivery_method: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly enum: readonly [1, 2, 3, 4];
                    readonly description: "The method for bulk dispatch. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special)\n\n`1` `2` `3` `4`";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly bulk_ref: {
                    readonly type: "string";
                    readonly description: "Clients must agree a bulk reference with the Card Manufacturer. Cards with the same bulk_address_id will be sent together to the bulk address. Format is Alpha, Numeric and Special Characters, maximum length of 36";
                    readonly examples: readonly ["CLOWD92024"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateCustomer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly customer: {
                readonly type: "object";
                readonly title: "Customer";
                readonly required: readonly ["address", "first_name", "last_name", "phone_number"];
                readonly properties: {
                    readonly title: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 7;
                        readonly description: "Customer title.";
                        readonly examples: readonly ["Mr"];
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer first name. Format is Alpha";
                        readonly examples: readonly ["Alan"];
                    };
                    readonly middle_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer middle name. Format is Alpha";
                        readonly examples: readonly ["Mathison"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 50;
                        readonly description: "Customer last name. Format is Alpha";
                        readonly examples: readonly ["Turing"];
                    };
                    readonly date_of_birth: {
                        readonly type: "string";
                        readonly description: "Customer date of birth";
                        readonly examples: readonly ["24/10/1981"];
                    };
                    readonly phone_number: {
                        readonly type: "string";
                        readonly minLength: 1;
                        readonly maxLength: 15;
                        readonly description: "Customer phone number. International format, no spaces and + is the only Special Character permitted";
                        readonly examples: readonly ["+447599999999"];
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 100;
                        readonly description: "Customer email address. Format is Alpha, Numeric and Special Characters";
                        readonly examples: readonly ["clowd9@clowd9.com"];
                    };
                    readonly external_ref: {
                        readonly type: "string";
                        readonly description: "This is a customer reference held in the client's system";
                        readonly examples: readonly ["customer-ref-123"];
                    };
                    readonly language_code: {
                        readonly type: "string";
                        readonly description: "The BCP-47 identification code of the language the customer prefers in SMS and email communications for 3DS OTP delivery";
                        readonly examples: readonly ["en-US"];
                    };
                    readonly free_text: {
                        readonly type: "string";
                        readonly maxLength: 256;
                        readonly description: "Free text field for client to store any additional information";
                        readonly examples: readonly ["Some free text"];
                    };
                    readonly address: {
                        readonly title: "Customer's Address";
                        readonly required: readonly ["address_line1", "city", "country_iso", "post_code"];
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Customer address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Customer address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address State, County or Province. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Customer Postal Code. Format is ISO  Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation, for example GBR (Great Britain).";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly identification: {
                        readonly type: "object";
                        readonly properties: {
                            readonly identification_1_type: {
                                readonly type: "string";
                                readonly description: "Customer identification type 1 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                            };
                            readonly identification_1_id: {
                                readonly type: "string";
                                readonly description: "Alpha numeric value associated with the ID type";
                            };
                            readonly identification_1_country: {
                                readonly type: "string";
                                readonly description: "Identifier 1 issuing country (mandatory field if identification  type 1 is populated )";
                            };
                            readonly identification_1_state: {
                                readonly type: "string";
                                readonly description: "Identifier 1 issuing state (mandatory if identification 1 country is USA)";
                            };
                            readonly identification_2_type: {
                                readonly type: "string";
                                readonly description: "customer identifier type 2 i.e. Social Security Number, Individual Taxpayer Identification Number, Passport, Driver's License";
                            };
                            readonly identification_2_id: {
                                readonly type: "string";
                                readonly description: "Alpha numeric value associated with the ID type";
                            };
                            readonly identification_2_country: {
                                readonly type: "string";
                                readonly description: "Identifier 2 issuing country (mandatory if identification type 2 is populated)";
                            };
                            readonly identification_2_state: {
                                readonly type: "string";
                                readonly description: "Identifier 2 issuing state (mandatory if identification 2 country is USA)";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated with the Customer";
                };
            };
            readonly required: readonly ["customer_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly description: "The Identifier associated with the Customer";
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["e33f3875-ad55-44c5-842b-22048f430322"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly pattern: "^[0-9a-fA-F]{32}$";
                    readonly examples: readonly ["9535f56232fd86cf09399818b9548262"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateDelivery: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly delivery: {
                readonly title: "DELIVERY AND FULFILMENT";
                readonly type: "object";
                readonly properties: {
                    readonly thermal_line1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly thermal_line2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly emboss_name: {
                        readonly type: "string";
                        readonly minLength: 3;
                        readonly maxLength: 26;
                        readonly description: "The name displayed on the front of the Physical card. For Physical format, if you do not populate this field, the previous emboss_name provided will be used. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly emboss_line4: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 35;
                        readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly fulfil1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil1"];
                    };
                    readonly fulfil2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil2"];
                    };
                    readonly card_delivery_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 1;
                        readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                    };
                    readonly envelope_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "Envelope reference for the card packaging and is to be agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly carrier_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                    };
                    readonly carrier_lang_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 2;
                        readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                    };
                    readonly design_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly bulk_address_id: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "The Identifier generated by CLOWD9 when a Bulk Address is created. Format is Alpha, Numeric, Special Characters";
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery county or province";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly contact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Delivery contact title";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact first name";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact middle name";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact last name";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated to the Card";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpgradeCardVirtual: {
    readonly body: {
        readonly required: readonly ["card_manufacturer_id"];
        readonly type: "object";
        readonly properties: {
            readonly card_upgrade: {
                readonly type: "object";
                readonly properties: {
                    readonly new_card_id: {
                        readonly type: "string";
                        readonly examples: readonly ["bd27692d-4aff-4130-9962-11542283aa7d"];
                    };
                    readonly secure_id: {
                        readonly type: "string";
                        readonly description: "The same Identifier as the card_id";
                        readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    };
                    readonly card_status: {
                        readonly type: "string";
                        readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                        readonly examples: readonly ["inactive"];
                    };
                    readonly pin: {
                        readonly type: "string";
                        readonly description: "The";
                        readonly examples: readonly ["pin"];
                    };
                    readonly expiry_date: {
                        readonly type: "string";
                    };
                };
            };
            readonly card_manufacturer_id: {
                readonly type: "string";
                readonly minLength: 36;
                readonly description: "Card Manufacturer Identifier is provided by CLOWD9";
                readonly examples: readonly ["67c7961e-fb74-40c3-bfae-a98418744831"];
            };
            readonly delivery: {
                readonly title: "DELIVERY AND FULFILMENT";
                readonly type: "object";
                readonly properties: {
                    readonly thermal_line1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line1"];
                    };
                    readonly thermal_line2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 20;
                        readonly description: "Allows for additional line of text on the card. The value needs to be agreed with the card manufacturer. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["thermal_line2"];
                    };
                    readonly emboss_name: {
                        readonly type: "string";
                        readonly minLength: 3;
                        readonly maxLength: 26;
                        readonly description: "The name displayed on the front of the Physical card. For Physical format, if you do not populate this field, the previous emboss_name provided will be used. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["emboss_name"];
                    };
                    readonly emboss_line4: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 35;
                        readonly description: "Fourth line on the front of card for additional information. For example, a unique Identifier, Corporate Name. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["emboss_line4"];
                    };
                    readonly fulfil1: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil1"];
                    };
                    readonly fulfil2: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 10;
                        readonly description: "Additional fulfilment parameter. Value(s) to be agreed with the Card Manufacturer.  Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["Fulfil2"];
                    };
                    readonly card_delivery_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 1;
                        readonly description: "The desired delivery method. Values are 1 (Standard Mail), 2 (Registered Mail), 3 (Direct Delivery - Courier) or 4 (Special). Format is Numeric";
                        readonly examples: readonly ["1"];
                    };
                    readonly envelope_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "Envelope reference for the card packaging and is to be agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["CLOWD9 Travel"];
                    };
                    readonly carrier_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 50;
                        readonly description: "This is the card carrier reference as agreed with the card manufacturer. Format is Alpha, Numeric";
                        readonly examples: readonly ["carrier_ref"];
                    };
                    readonly carrier_lang_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 2;
                        readonly description: "Language for the card carrier content. Format is Alpha as defined as per the ISO 639-1 standard";
                        readonly examples: readonly ["EN"];
                    };
                    readonly design_ref: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "Pre agreed value with Card Manufacturer. Identifies the card design to be applied in personalization. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["design_ref"];
                    };
                    readonly bulk_address_id: {
                        readonly type: "string";
                        readonly minLength: 0;
                        readonly maxLength: 36;
                        readonly description: "The Identifier generated by CLOWD9 when a Bulk Address is created. Format is Alpha, Numeric, Special Characters";
                        readonly examples: readonly ["35bcf177-547c-46ae-bd6c-738faee2d87f"];
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address_line1: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 1. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["99 Church Meadows"];
                            };
                            readonly address_line2: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 2. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Green House"];
                            };
                            readonly address_line3: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery address line 3. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["Up The Hill"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Bulk delivery address City. Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["London"];
                            };
                            readonly state_county_or_province: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery county or province";
                                readonly examples: readonly ["Essex"];
                            };
                            readonly post_code: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 9;
                                readonly description: "Delivery post_code. Format is Alpha, Numeric";
                                readonly examples: readonly ["CM75SL"];
                            };
                            readonly country_iso: {
                                readonly type: "string";
                                readonly minLength: 3;
                                readonly maxLength: 3;
                                readonly description: "Customer country code in ISO 3166-3 alpha-3 representation,for example GBR (Great Britain). Format is Alpha";
                                readonly examples: readonly ["GBR"];
                            };
                        };
                    };
                    readonly contact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 7;
                                readonly description: "Delivery contact title";
                                readonly examples: readonly ["Mr"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact first name";
                                readonly examples: readonly ["Alan"];
                            };
                            readonly middle_name: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact middle name";
                                readonly examples: readonly ["Mathison"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 50;
                                readonly description: "Delivery contact last name";
                                readonly examples: readonly ["Turing"];
                            };
                            readonly phone_number: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 15;
                                readonly description: "Delivery contact phone number (person in charge of receiving the bulk cards). International format, no spaces and + is the only Special Character permitted";
                                readonly examples: readonly ["+447599999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly minLength: 0;
                                readonly maxLength: 100;
                                readonly description: "Delivery contact email (person in charge of receiving the bulk cards). Format is Alpha, Numeric and Special Characters";
                                readonly examples: readonly ["clowd9@clowd9.com"];
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
            };
            readonly required: readonly ["card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly card_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_id: {
                            readonly minLength: 36;
                            readonly type: "string";
                            readonly description: "The Identifier associated to the Card";
                            readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                        };
                        readonly secure_id: {
                            readonly type: "string";
                            readonly description: "Used to retrieve and set PIN information. This should be the same value as the card_id";
                            readonly examples: readonly ["debb8e19-9d92-4e54-b00d-f49c7bc1c4a0"];
                        };
                        readonly card_status: {
                            readonly type: "string";
                            readonly description: "If not provided, then the default status will apply. For a Virtual card format, this is active and for a Physical card format, inactive";
                            readonly examples: readonly ["inactive"];
                        };
                        readonly pin: {
                            readonly type: "string";
                            readonly description: "Desired PIN for the card. If not supplied, the system will\\ \\ generate a value.";
                            readonly examples: readonly ["2026"];
                        };
                        readonly pan: {
                            readonly type: "string";
                            readonly description: "The Primary Account Number";
                            readonly examples: readonly ["1234567891203456"];
                        };
                        readonly cvv: {
                            readonly type: "string";
                            readonly examples: readonly ["827"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                        };
                        readonly valid_from_date: {
                            readonly type: "string";
                        };
                    };
                };
                readonly customer_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the Customer";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly program_id: {
                    readonly minLength: 36;
                    readonly pattern: "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
                    readonly type: "string";
                    readonly description: "The identifier of the card program";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly trace_id: {
                    readonly pattern: "[a-fA-F0-9]{32}";
                    readonly type: "string";
                    readonly description: "The Identifier associated with the API";
                    readonly examples: readonly ["4063b71ac662e69bf6eeca156eaf478f"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpsertCardLimit: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly realtime_threshold: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The volume / value permitted per individual transaction";
                readonly examples: readonly [1000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly daily_threshold: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The volume / value permitted daily and resets at 23:59:59 UTC";
                readonly examples: readonly [10000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly weekly_threshold: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The volume / value permitted weekly. This resets every Sunday at 23:59:59 UTC";
                readonly examples: readonly [70000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly monthly_threshold: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The volume / value permitted Monthly. This is reset on the last day of each month at 23:59:59 UTC";
                readonly examples: readonly [3100000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly yearly_threshold: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The volume / value permitted per year and is reset on 31/12 at 23:59:59 UTC";
                readonly examples: readonly [36500000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly general_threshold: {
                readonly type: "integer";
                readonly format: "int64";
                readonly description: "The maximum lifetime value / volume permitted. The General threshold will not be reset at any stage";
                readonly examples: readonly [36500000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly card_id: {
                    readonly type: "string";
                    readonly minLength: 36;
                    readonly pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$";
                    readonly examples: readonly ["a2ad322a-a2f9-3a5a-b0a9-e0d5c0f5b9f6"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Identifier associated to the Card";
                };
                readonly limit_short_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The limit_short_name associated to the limit_name";
                };
            };
            readonly required: readonly ["card_id", "limit_short_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit_id: {
                    readonly type: "string";
                    readonly description: "The Identifier associated to the limit";
                    readonly examples: readonly ["9fc53743-247b-185f-8720-13be7ac028b6"];
                };
                readonly trace_id: {
                    readonly type: "string";
                    readonly examples: readonly ["ad46e6a4-3e18-4d35-860c-baefaf14a8e9"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly details: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reason: {
                                readonly type: "string";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AuthenticateApi, CardAssignBehaviour, CorrectAccountBalance, CreateAccount, CreateBulkAddress, CreateCard, CreateCustomer, CreateGoogleProvisioningToken, DecreaseAccountBalance, DeleteBulkAddress, FindAccountsByCustomer, FindCardUsage, FindCardsByCustomerId, GetAccount, GetAccountBalance, GetAccountLinkedCards, GetBehaviour, GetBehaviourLimits, GetBulkAddress, GetCard, GetCardIdByPan, GetCardLimit, GetCardToken, GetClient, GetClowd9Api, GetCustomer, GetCustomerByExternalRef, GetLedgerEntriesForAccount, GetSecureCardDetails, GetSecureFrameKey, GetTokenLifecycle, HealthCheck, IncreaseAccountBalance, LinkCardWithAccount, LinkCustomerWithAccount, ListBehaviours, ListCardLimits, ListCardTokens, ListClients, ListCustomers, OnboardCard, RefreshToken, RelayOobAuthResult, RenewCard, ReplaceCard, ResyncCardToken, SetCardStatus, SetCardUsage, SetSecurePin, StatusChangeCardToken, TdsPasswordAuthentication, TransferFromAccountToAccount, UnblockPin, UnlinkCardFromAccount, UnlinkCustomerFromAccount, UpdateAccountStatus, UpdateBulkAddress, UpdateCustomer, UpdateDelivery, UpgradeCardVirtual, UpsertCardLimit };
