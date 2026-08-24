import { defineConfig } from 'drizzle-kit';
import 'dotenv/config'; // <--- CRITICAL: This loads your .env variables

export default defineConfig({
    // Path relative to project root
    schema: './src/drizzle/schema/*',

    // Path relative to project root
    out: './drizzle/migrations',

    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }
});