import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import mongoConfig from './common/configs/mongo.config'
import { RequestContextModule } from 'nestjs-request-context'
import { DataServicesModule } from './common/db/db.module'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { ConsoleModule } from 'nestjs-console'
import { RMAINModule } from './r-main/r-main.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV || 'local'}.env`,
			isGlobal: true,
			load: [mongoConfig],
			cache: true,
		}),
		ConsoleModule,
		EventEmitterModule.forRoot(),
		RequestContextModule,
		DataServicesModule,
		RMAINModule,
	],
	providers: [],
	controllers: [],
})
export class AppModule { }
