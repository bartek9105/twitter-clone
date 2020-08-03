
exports.up = function(knex) {
  return knex.schema.createTable('followers', table => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('following_id')
      table.foreign('user_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('followers')
};
