import { createClient } from "@libsql/client";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from '../schema';

export const DRIZZLE = Symbol('DRIZZLE_CONNECTION');

export const drizzleProvider = {
    provide: DRIZZLE,
    inject: [ConfigService],
    useFactory: (ConfigService: ConfigService) => {
        const url = ConfigService.get<string>('DB_FILE_NAME');
        const authToken = ConfigService.get<string>('DATABASE_AUTH_TOKEN');

        const client = createClient({
            url: url!,
            authToken: authToken
        });

        return drizzle(client, { schema });
    }
};