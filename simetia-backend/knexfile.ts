import { Config } from "knex";
import path from 'path';

export const configuration: Config = {
    client: 'pg',
    connection: {
        host :    'batyr.db.elephantsql.com',
        user:     'gfewvidg',
        password: 'P67A_Ei91pk40SmPe6dquOlhPOyyF0Gd',
        database: 'gfewvidg'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
}
export const development: Config = { ...configuration }
export const production: Config = { ...configuration }
