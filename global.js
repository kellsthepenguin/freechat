// 변수노예
const knex = require('knex')

module.exports = {
  /**
   * @type {knex.Knex}
   */
  knex: knex({
    client: 'mysql',
    connection: {
      user: 'freechat',
      database: 'freechat'
    }
  })
}
