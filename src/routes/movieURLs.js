const handlers=require('../handlers/movieHandlers');

const routesArr=[
	{method:'GET',path:'/movies',handler:handlers.getMovieDetails}
];

module.exports=routesArr;