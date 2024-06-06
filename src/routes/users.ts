import { Router } from 'express'
import { createUserSchema } from '../schema/users'
import { createUserHandler, getUserHandler } from '../controller/users'
import validate from '../middleware/validate'

const router = Router()

// 获取所有用户
router.get('/', getUserHandler)
// 创建用户
router.post('/', validate(createUserSchema), createUserHandler)

export default router
