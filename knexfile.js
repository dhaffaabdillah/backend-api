const dotenv = require('dotenv')
dotenv.config()
module.exports = {
	development : {
		migrations: {tableName: 'knex_migrations'},
		seeds: {tableName: 'seeds'},

		client: 'mysql',
		connection: {
			host: process.env.HOST || 'localhost',
            user: process.env.USER || 'root',
            password: process.env.PASS,
            database: process.env.DATABASE || 'project_android',
            charset: 'utf8',
		}
	}

}