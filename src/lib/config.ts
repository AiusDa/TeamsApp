import { config } from 'dotenv';
const result = config();

export const CONFIG = {
  server: {
    port: process.env.PORT || 3000
  },
  database: {
    url: result.parsed.DATABASE_URL
  }
};
