import { routesV1 } from '../../../common/configs/app.routes'
import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Post,
	Query,
	Session,
} from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { match, Result } from 'oxide.ts'
import { DocDocument, DocSchema, DocPersistenceDTO, DocModel } from '../../db/doc.schema'
import { DocService } from '../../db/doc.service'
import * as mongoose from 'mongoose'
import { Model } from 'mongoose'

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Controller(routesV1.docs.root)
export class DController {
	constructor(private docService: DocService) { }

	@Get('find')
	async finddocs(
		@Body() b: any,
		@Query() queryParams: any,
		@Session() session: Record<string, any>
	): Promise<any> {
		try {
			b; queryParams;
			let r = await this.docService.findByName(queryParams.name)
			return { ok: true, data: r }
		} catch (error) {
			error('invalid props ' + error.message)
			return { ok: false, message: error.message }
		}
	}

	@Post('create')
	async create(
		@Body() b: any,
		@Query() queryParams: any,
		@Session() session: Record<string, any>
	): Promise<any> {
		try {
			let r = await this.docService.createCounts(b.count)
			return { ok: true }
		} catch (error) {
			error('invalid props ' + error.message)
			return { ok: false, message: error.message }
		}
	}
}
