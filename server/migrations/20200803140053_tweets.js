exports.up = function(knex) {
  return knex.schema.createTable('tweets', table => {
      table.increments()
      table.integer('user_id').unsigned()
      table.string('body')
      table.string('type')
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tweets')
};
