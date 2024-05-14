import { HttpModule } from '@nestjs/axios'
import { Module, Provider, } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CqrsModule } from '@nestjs/cqrs'
import httpControllers from './api/http'

import { MongooseModule } from '@nestjs/mongoose'
import { DocModel, DocDocument, DocSchema, DocPersistenceDTO } from './db/doc.schema'
import { DocService } from './db/doc.service'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'DocModel', schema: DocSchema },
		]),
		CqrsModule,
		HttpModule,
		ConfigModule
	],
	controllers: [...httpControllers],
	providers: [DocService],
})
export class RMAINModule { }
