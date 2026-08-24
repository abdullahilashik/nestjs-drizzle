import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DRIZZLE } from './drizzle.provider';

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {

    constructor(

    ) { }

    onModuleDestroy() {

    }

    onModuleInit() {

    }
}
