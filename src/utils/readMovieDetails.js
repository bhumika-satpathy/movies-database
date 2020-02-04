const readJson=require('./readJsonPage');
const db=require('../../models/index');

const moviesJson=readJson('https://stormy-plains-72807.herokuapp.com/movies');
const genresJson=readJson('https://stormy-plains-72807.herokuapp.com/genres');
const actorsJson=readJson('https://stormy-plains-72807.herokuapp.com/actors');

const getDetails=async()=>{
	return db.moviedetails.findAll();
};

module.exports={getDetails};