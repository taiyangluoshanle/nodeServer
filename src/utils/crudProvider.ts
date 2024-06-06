import {
  FilterQuery,
  UpdateQuery,
  MongooseUpdateQueryOptions,
  Model,
  InsertManyOptions,
} from 'mongoose'

class BaseCrudProviderCls<TDocument, Cdocument> {
  private DBModel: Model<TDocument>

  constructor(DBModel: Model<TDocument>) {
    this.DBModel = DBModel
  }

  async create(input: Cdocument) {
    const data = await this.DBModel.create(input)

    return data.toJSON()
  }

  async update(
    query: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
    options?: MongooseUpdateQueryOptions
  ) {
    return this.DBModel.updateOne(query, update, options)
  }

  async find(
    query: FilterQuery<TDocument>,
    projection?: any,
    options?: MongooseUpdateQueryOptions
  ) {
    const result = await this.DBModel.find(query, projection, options)
    return result && result.map((d) => d.toJSON())
  }
}

const BaseCrudProvider = function <TDocument, Cdocument>(DBModel: Model<any>) {
  const CRUD = new BaseCrudProviderCls<TDocument, Cdocument>(DBModel)

  return {
    create: CRUD.create.bind(CRUD),
    update: CRUD.update.bind(CRUD),
    find: CRUD.find.bind(CRUD),
  }
}

export { BaseCrudProvider }
