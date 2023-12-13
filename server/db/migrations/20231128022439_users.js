/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id').unique()
    table.string('username').notNullable()
    table.string('email').notNullable()
    table.boolean('is_admin').defaultTo(false)
    table.string('full_name')

    table.string('location')
    table.text('image')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
