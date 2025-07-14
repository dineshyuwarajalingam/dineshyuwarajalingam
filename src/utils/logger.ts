
// Created this file so that if in the future we would need to centralize logger using 
// winston or some other package if we want, we can do that here
const info = console.info;
const log = console.log;
const error = console.error;

export const logger = { log, info, error };
