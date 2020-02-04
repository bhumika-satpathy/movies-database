const fetch = require('node-fetch');

//let url = 'https://stormy-plains-72807.herokuapp.com/movies';

const request = async (url) => {
	const response = await fetch(url);
	const json =  await response.json();
	//console.log(json);
	return json;
};

module.exports=request;
//console.log(y);


