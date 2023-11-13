export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('exampleTable').del()

  // Inserts seed entries
  await knex('exampleTable').insert([
    { id: 1, name: 'Luther' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'Allison' },
    { id: 4, name: 'Klaus' },
    { id: 5, name: 'Number Five' },
    { id: 6, name: 'Ben' },
    { id: 7, name: 'Viktor' },
  ])
}
