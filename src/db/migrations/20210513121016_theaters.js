exports.up = function (knex) {
  knex.schema.hasTable("theaters").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("theaters", function (table) {
        table.increments("theater_id").primary();
        table.string("name");
        table.string("address_line_1");
        table.string("address_line_2");
        table.string("city");
        table.string("state");
        table.string("zip");
      });
    }
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("theaters");
};
