import { BaseCrudProvider } from '../utils/crudProvider'
import UserModel, { UserDocument } from '../models/user'

const CRUD = BaseCrudProvider<UserDocument, Omit<UserDocument, 'createdAt'>>(
  UserModel
)

export default CRUD
