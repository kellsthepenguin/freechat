// 아니 타입스크립트 쓰고싶었는데 너무 엄격해요

import express from 'express'

const app = express()

app.use(require('./router/api'))

app.listen(8080)
