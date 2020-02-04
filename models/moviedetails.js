'use strict';
module.exports = (sequelize, DataTypes) => {
	const moviedetails = sequelize.define('moviedetails', {
		name: DataTypes.STRING,
		genres: DataTypes.ARRAY(DataTypes.STRING),
		actors: DataTypes.ARRAY(DataTypes.STRING)
	}, {});
	moviedetails.associate = function(models) {
		// associations can be defined here
	};
	return moviedetails;
};