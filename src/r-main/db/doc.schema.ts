import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose'

import { PartialType } from '@nestjs/mapped-types'

export type DocDocument = Doc & mongoose.Document;

@Schema({ collection: 't_ind' })
export class Doc {
  @Prop({ type: mongoose.Types.ObjectId, required: true })
  _id!: mongoose.Types.ObjectId

  // name
  @Prop({ type: String, required: true, unique: true })
  name!: string
}

const DocSchema = SchemaFactory.createForClass(Doc);
DocSchema.index({ name: 1 })
export { DocSchema }

export class DocPersistenceDTO extends PartialType(
  Doc
) { }

export const DocModel = mongoose.model('DocModel', DocSchema)


