import { Provider } from "@nestjs/common"
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/node-postgres';

export const DRIZZLE = Symbol('DRIZZLE_CONNECTION');

export const DrizzleProvider = (): Provider => {
    return {
        provide: DRIZZLE,
        useFactory: () => {
            const db_url = process.env.DATABASE_URL!;
            return drizzle(db_url, { schema });
        }
    }
}