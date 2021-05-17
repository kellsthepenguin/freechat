import { Router, Request, Response } from 'express'
import { sha256 } from 'js-sha256'

import fs from 'fs'
import jwt from 'jsonwebtoken'

import { db } from '../global'

const router = Router()

const ERROR_OBJS = {
  UNAUTHORIZED: {
    error: 401,
    msg: 'Unauthorized',
    token: null
  },

  MORE_BODY_REQUIRES(...bodys: string[]) {
    let strBodys = ''

    bodys.forEach((val, i) => { 
      if (i === bodys.length) return strBodys += `'${val}'`
      strBodys += `'${val}' `
    })

    return {
      error: 400,
      msg: `More body(${strBodys}) requires`
    }
  }
}

function genSalt () {
  let salt = ''

  for (let i = 0; i < 50; i++) {
    salt += String.fromCharCode(Math.floor(Math.random() * 65535))
  }
  
  return salt
}

router.post('/register', async (req: Request, res: Response) => {
  const {
    mail,
    pw
  } = req.body

  if (!mail && pw) return res.json(ERROR_OBJS.MORE_BODY_REQUIRES('mail', 'pw'))

  const salt = genSalt()

  const user: IUser = {
    mail,
    salt,
    pw
  }

  db('users')
    .insert(user)
    .then(() => {
      res.json({
        code: 200
      })
    })
})

router.get('/token', async (req: Request, res: Response) => {
  const {
    mail, 
    pw
  } = req.body

  if (!mail && pw) return res.json(ERROR_OBJS.MORE_BODY_REQUIRES('mail', 'pw'))

  const user: IUser = (await db('users').where('mail', mail))[0]

  if (!user) return res.json(ERROR_OBJS.UNAUTHORIZED)
  if (sha256(user.salt + pw) === pw) {
    return res.json({
      token: jwt.sign({ mail }, fs.readFileSync('../../resources/private.key').toString('utf8'))
    })
  }

  res.json(ERROR_OBJS.UNAUTHORIZED)
})

export default router
