
exports.up = function(knex, Promise) {
    knex.schema.createTable('character', function (table) {
        table.increments()
        table.string('name')
        table.integer('height')
        table.integer('mass')
    })
}

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExist('character')
}
