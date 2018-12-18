const Sequelize = require('sequelize');
console.log(process.env.DATABASE_URL);
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