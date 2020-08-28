exports.up = function(knex) {
  return knex.schema.alterTable('tweets', col => {
    col.string('type')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('tweets', col => {
    col.dropColumn('type')
  })
};
