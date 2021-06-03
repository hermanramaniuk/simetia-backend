import Knex from 'knex';
import { AES } from 'crypto-ts';

export async function seed(knex: Knex) {
    await knex('user').insert([
        {
            email: 'miriele@gmail.com',
            name: 'Miriele', role: 'ADM',
            password: '$2b$10$7IZoPrGSAM1k6TeFDyaHK.fKpx./lU/3Ur3G8fMYMvJHY1KlhjnTm',
            createdAt: '2020-10-10 10:00:00'
        },
        {
            email: 'gonzalez@gmail.com',
            name: 'Gonzalez', role: 'ADM',
            password: '$2b$10$7IZoPrGSAM1k6TeFDyaHK.fKpx./lU/3Ur3G8fMYMvJHY1KlhjnTm',
            createdAt: '2020-10-10 10:00:00'
        },
    ]);
}