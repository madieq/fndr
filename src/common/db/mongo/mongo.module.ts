import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose'
@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => {
				const mongoose = configService.get<MongooseModuleOptions>('mongodb')
				return mongoose
			},
			inject: [ConfigService],
		}),
	],
})
export class MongoDataServicesModule { }
