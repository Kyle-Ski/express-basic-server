

exports.up = function(knex, Promise) {
    return knex.schema.createTable('character', function (table) {
        table.increments()
        table.string('name')
        table.integer('height')
        table.integer('mass')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('character')
}
