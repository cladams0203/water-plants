exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
      tbl.integer("phone");
    })
    .createTable("plants", (tbl) => {
      tbl.increments();
      tbl.string("image");
      tbl.string("species").notNullable();
      tbl.string("name").notNullable();
      tbl.string("water_frequency").notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
