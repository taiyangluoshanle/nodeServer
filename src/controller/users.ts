// user.controller.ts

import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { commonRes, silentHandle } from '../utils'

import { CreateUserInput } from '../schema/users'
import USER_CRUD from '../service/users'

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  const [e, user] = await silentHandle(USER_CRUD.create, {
    ...req.body,
    password: await bcrypt.hash(req.body.password, 10),
    passwordConfirmation: await bcrypt.hash(req.body.password, 10),
  })

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}

export async function getUserHandler(req: Request, res: Response) {
  const [e, user] = await silentHandle(USER_CRUD.find, req.params.userId)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}
