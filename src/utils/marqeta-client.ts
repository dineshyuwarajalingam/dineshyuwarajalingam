import axios from 'axios';
import { MARQETA } from '~/config';
import { marqetaConfig } from '~/marqetaConfig';

const { baseUri, username, password } = marqetaConfig;

export const marqetaClient = axios.create({
  baseURL: baseUri,
  timeout: Number(MARQETA.API_TIMEOUT_SECONDS),
  auth: {
    username,
    password,
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
