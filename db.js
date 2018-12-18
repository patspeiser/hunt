const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const Test = db.define('test', {
	name: {type: Sequelize.STRING}
});

module.exports = {
	db: db,
	models: {
		Test: Test
	}
};