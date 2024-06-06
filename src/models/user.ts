import mongoose from 'mongoose'
import defaultConfig from '../config/default'

export interface UserDocument extends mongoose.Document {
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

userSchema.index({ username: 1, deletedAt: 1 }, { unique: true })
const UserModel = mongoose.model<UserDocument>('users', userSchema)

export default UserModel
