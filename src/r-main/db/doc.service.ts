import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocModel, Doc, DocPersistenceDTO } from './doc.schema';
// import { CreateCatDto } from './dto/create-cat.dto';
import * as mongoose from 'mongoose'


@Injectable()
export class DocService {
    constructor(@InjectModel('DocModel') private dModel: Model<Doc>) { }

    //   async create(createDocDto: DocPersistenceDTO): Promise<Cat> {
    //     const createdCat = new this.(DocPersistenceDTO);
    //     return createdCat.save();
    //   }
    c = 0
    async findAll(): Promise<Doc[]> {
        return this.dModel.find().exec();
    }

    async findByName(name: string): Promise<Doc> {
        return this.dModel.findOne({ name: name });
    }

    async createCounts(c: number) {
        let q = []
        for (let i = 0; i < c; i++)
            q.push({ _id: new mongoose.Types.ObjectId(), name: `${Date.now()}-${this.c++}` })
        return this.dModel.insertMany(q)
    }
}
