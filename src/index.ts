import express from 'express'

import api from './router/api'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(api)

app.listen(8080)
