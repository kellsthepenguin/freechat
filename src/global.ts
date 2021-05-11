import knex from 'knex'

const db = knex({
  client: 'mysql',
  connection: {
    user: 'freechat',
    database: 'freechat'
  }
})

export { db }
