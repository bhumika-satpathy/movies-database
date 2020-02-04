'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('moviedetails', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			name: {
				type: Sequelize.STRING
			},
			genres: {
				type: Sequelize.ARRAY(Sequelize.STRING)
			},
			actors: {
				type: Sequelize.ARRAY(Sequelize.STRING)
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('moviedetails');
	}
};