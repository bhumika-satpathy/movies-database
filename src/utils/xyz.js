const fetch = require('node-fetch');

const request = async (url) => {
	const response = await fetch(url);
	const json = await response.json();
	console.log(json);
	return json;
};

module.exports=request;



