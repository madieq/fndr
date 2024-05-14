import { MongoDataServicesModule } from './mongo/mongo.module'
import { Module } from '@nestjs/common'

@Module({
	imports: [MongoDataServicesModule],
	exports: [MongoDataServicesModule],
})
export class DataServicesModule {}
