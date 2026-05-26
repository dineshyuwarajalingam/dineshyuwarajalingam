import 'dotenv/config';

export const clowd9Config = {
  key: process.env.CLOWD9_KEY ?? '',
  secret: process.env.CLOWD9_SECRET ?? '',
  productId: process.env.CLOWD9_PRODUCT_ID ?? '',
  clientId: process.env.CLOWD9_CLIENT_ID ?? '',
  cardManufacturerId: process.env.CLOWD9_CARD_MANUFACTURER_ID ?? '',
};
