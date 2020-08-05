exports.up = function(knex) {
  return knex.schema.alterTable('tweets', col => {
    col.integer('original_tweet_id').unsigned()
    col.foreign('original_tweet_id').references('id').inTable('tweets').onDelete('cascade')
  })
};

exports.down = function(knex) {
  
};
