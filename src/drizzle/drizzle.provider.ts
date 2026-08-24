import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from 'drizzle-orm/node-postgres';

export const DRIZZLE = 'DRIZZLE_CONNECTION';

export const DrizzleProvider: Provider = {
    provide: DRIZZLE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        const dbUrl = configService.get<string>('DATABASE_URL');
        return drizzle(dbUrl!);
    }
}