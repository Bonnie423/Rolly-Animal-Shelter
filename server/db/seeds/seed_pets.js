/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()

  // Inserts seed entries
  await knex('pets').insert([
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      category: 'Dog',
      age: 3,
      gender: 'Male',
      image: '/images/dogs/dog1.jpg',
    },

    {
      name: 'Nelly',
      breed: 'Labrador',
      category: 'Dog',
      age: 5,
      gender: 'Female',
      image: '/images/dogs/dog2.jpg',
    },
    {
      name: 'Pup',
      breed: 'Golden Retriever',
      category: 'Dog',
      age: 4,
      gender: 'Male',
      image: '/images/dogs/dog3.jpg',
    },

    {
      name: 'Snow',
      breed: 'Labrador',
      category: 'Dog',
      age: 2,
      gender: 'Fmale',
      image: '/images/dogs/dog4.jpg',
    },
    {
      name: 'Buz',
      breed: 'Golden Retriever',
      category: 'Dog',
      age: 3,
      gender: 'Male',
      image: '/images/dogs/dog5.jpg',
    },

    {
      name: 'Neil',
      breed: 'Labrador',
      category: 'Dog',
      age: 5,
      gender: 'Female',
      image: '/images/dogs/dog6.jpg',
    },
    {
      name: 'Whiskers',
      breed: 'Siamese',
      category: 'Cat',
      age: 2,
      gender: 'Female',
      image: '/images/cats/cat1.jpg',
    },
    {
      name: 'Mittens',
      breed: 'Siamese',
      category: 'Cat',
      age: 2,
      gender: 'Female',
      image: '/images/cats/cat8.jpg',
    },
    {
      name: 'Ginger',
      breed: 'Siamese',
      category: 'Cat',
      age: 3,
      gender: 'Female',
      image: '/images/cats/cat2.jpg',
    },
    {
      name: 'Snowy',
      breed: 'Siamese',
      category: 'Cat',
      age: 2,
      gender: 'Female',
      image: '/images/cats/cat3.jpg',
    },
    {
      name: 'Kitty',
      breed: 'Siamese',
      category: 'Cat',
      age: 2,
      gender: 'Female',
      image: '/images/cats/cat4.jpg',
    },
    {
      name: 'Pear',
      breed: 'Siamese',
      category: 'Cat',
      age: 3,
      gender: 'Female',
      image: '/images/cats/cat5.jpg',
    },
    {
      name: 'Smoky',
      breed: 'Siamese',
      category: 'Cat',
      age: 1,
      gender: 'Female',
      image: '/images/cats/cat6.jpg',
    },
    {
      name: 'Duckky',
      breed: 'Duck',
      category: 'Other',
      age: 1,
      gender: 'Female',
      image: '/images/other/ducklings.jpg',
    },
    {
      name: 'Ham',
      breed: 'Hamster',
      category: 'Other',
      age: 1,
      gender: 'Female',
      image: '/images/other/hamster.jpg',
    },
    {
      name: 'Little white',
      breed: 'Bunny',
      category: 'Other',
      age: 1,
      gender: 'Female',
      image: '/images/other/rabbit1.jpg',
    },
    {
      name: 'Robbie',
      breed: 'Bunny',
      category: 'Other',
      age: 1,
      gender: 'Male',
      image: '/images/other/rabbit2.jpg',
    },
  ])
}
