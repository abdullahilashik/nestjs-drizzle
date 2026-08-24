import { Provider } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// This token is used to inject the DB client into services
export const DRIZZLE = 'DRIZZLE';

export const DrizzleProvider: Provider = {
    provide: DRIZZLE,
    useFactory: () => {
        // In production, use ConfigService to get this URL
        const connectionString = process.env.DATABASE_URL;

        if (!connectionString) {
            throw new Error('DATABASE_URL is not defined in environment variables');
        }

        const queryClient = postgres(connectionString);
        return drizzle(queryClient, { schema });
    },
};