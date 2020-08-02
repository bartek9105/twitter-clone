
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {email: 'abc@gmail.com', password: 'abc123'},
        {email: 'def@gmail.com', password: '234524fsd'},
        {email: 'ghi@gmail.com', password: 'sdff435'},
        {email: 'ag54@gmail.com', password: 'sgdfg45'}
      ]);
    });
};
