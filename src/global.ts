import knex, { Knex } from 'knex'

interface Global {
  knex: Knex
}

const global: Global = {
  knex: knex({
    client: 'mysql',
    connection: {
      user: 'freechat',
      database: 'freechat'
    }
  })
}

export default global
