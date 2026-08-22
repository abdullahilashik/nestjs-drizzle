import { Global, Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';
import { drizzleProvider } from './providers';

@Global()
@Module({
  providers: [DrizzleService, drizzleProvider],
  exports: [drizzleProvider]
})
export class DrizzleModule { }
