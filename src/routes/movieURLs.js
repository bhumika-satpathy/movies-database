const handlers=require('../handlers/movieHandlers');

const routesArr=[
	{method:'GET',path:'/movies/{id}',handler:handlers.getMovieDetails},
	{method:'POST',path:'/movie',handler:handlers.postMovieDetail},
];

module.exports=routesArr;