exports.up = function(knex, Promise) {
	return knex
		.schema
		.createTable('user', function(userTable) {
			// PK
			userTable.increments().primary()
			// data
			userTable.string('username', 60).unique().notNullable()
			userTable.string('password', 20).notNullable()
			userTable.string('first_name', 30).notNullable()
			userTable.string('last_name', 30).notNullable()
			userTable.string('email', 30).unique().notNullable()
			userTable.enum('role', ['Admin', 'SuperAdmin', 'User']).defaultTo('User')
			userTable.integer('age').defaultTo(0)
			userTable.timestamps(true, true)
		})
};

exports.down = function(knex, Promise) {
	// drop table if exist
    return knex
        .schema
            .dropTableIfExists( 'user' );

};
