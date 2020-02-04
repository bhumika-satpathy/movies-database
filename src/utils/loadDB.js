const readJson=require('./readJsonPage');

//{"movies":[{"id":"6638453965","name":"The Shawshank Redemption","genres":[2,4]},{"id":"3704208720","name":"Inception","genres":[1,3,6]},
// {"id":"5908099208","name":"Shutter Island","genres":[2,1,3]},{"id":"1393797017","name":"Fight Club","genres":[1,6]},
// {"id":"5908099207","name":"Titanic","genres":[5,4]},{"id":"7533474498","name":"Moneyball","genres":[4]},
// {"id":"6621531522","name":"The Wolf of Wall Street","genres":[1,5]},{"id":"6621531523","name":"Seven","genres":[2,3,1]}]}

// {"genres":[{"name":"Crime","id":1},{"name":"Mystery","id":2},{"name":"Thriller","id":3},
// {"name":"Romance","id":4},{"name":"Drama","id":5},{"name":"Sci-fi","id":6}]}

// {"actors":[{"name":"Brad Pitt","movies":["7533474498","1393797017","6621531523"]},
// {"name":"Morgan Freeman","movies":["6621531523","6638453965"]},
// {"name":"Leonardo Di Caprio","movies":["5908099208","6621531522","3704208720","5908099207"]},
// {"name":"Margot Robbie","movies":["6621531522","3704208722"]}]}

const moviesArray=async()=>{
	const moviesJson=await readJson('https://stormy-plains-72807.herokuapp.com/movies');
	return await moviesJson.movies;
};

const genresArray=async()=>{
	const genresJson=await readJson('https://stormy-plains-72807.herokuapp.com/genres');
	return await genresJson.genres;
};

const actorsArray=async()=>{
	const actorsJson=await readJson('https://stormy-plains-72807.herokuapp.com/actors');
	return await actorsJson.actors;
};

module.exports={moviesArray,genresArray,actorsArray};