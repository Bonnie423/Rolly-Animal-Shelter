/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('pets', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('breed')
    table.string('category')
    table.integer('age')
    table.string('gender')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('pets')
}
