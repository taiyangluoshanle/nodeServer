import { Express, Router } from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import User from './users'

interface RouterConf {
  path: string
  router: Router
  meta?: unknown
}

const routerConf: Array<RouterConf> = [{ path: '/api/users', router: User }]

const getInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('info...') : reject('error...')
    }, 500)
  })
}

const routes = (app: Express) => {
  app.get('/', async (req, res) => {
    const [e, result] = await silentHandle(getInfo)

    e ? commonRes.error(res, null) : commonRes(res, { result })
  })
  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
