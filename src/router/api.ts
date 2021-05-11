import { Router, Request, Response } from 'express'

const router = Router()

router.get('/token', (req: Request, res: Response) => {
  const {
    mail, 
    pw
  } = req.body

  if (!mail && pw) {
    return res.json({
      error: 401,
      msg: 'Unauthorized',
      token: null
    })
  }

  res.json({
    token: '이것도 준비 안됐다고.'
  })
})

router.get('/groups', (req: Request, res: Response) => {
  res.send('으쯔라고요 준비 안됐다고.')
})

export default router
