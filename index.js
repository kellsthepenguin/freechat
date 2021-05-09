// 아니 타입스크립트 쓰고싶었는데 너무 엄격해요

const express = require('express')
const { Server } = require('socket.io')

const app = express()

app.use(require('./router/api'))