exports.up = function (knex) {
  knex.schema.hasTable("movies_theaters").then(function (exists) {
    if (!exists) {
  return knex.schema.createTable("movies_theaters", function (table) {
    table
      .integer("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
    table
      .integer("theater_id")
      .references("theater_id")
      .inTable("theaters")
      .onDelete("CASCADE");
    table.boolean("is_showing");
  });
};})};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("movies_theaters");
};
