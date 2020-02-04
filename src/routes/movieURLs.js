const handlers=require('../handlers/movieHandlers');

const routesArr=[
	{method:'GET',path:'/movies',handler:handlers.getMovieDetails},
	{method:'POST',path:'/movie',handler:handlers.postMovieDetail},
	{method:'PUT',path:'/loadDB',handler:handlers.loadDB}
];

module.exports=routesArr;