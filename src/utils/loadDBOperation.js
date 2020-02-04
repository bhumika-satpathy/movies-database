const db=require('../../models/index');
const {moviesArray,genresArray,actorsArray}=require('../utils/loadDB');


const loadDB=async()=>{

	const moviesArr=await moviesArray();
	const genresArr=await genresArray();
	const actorsArr=await actorsArray();

	 await moviesArr.forEach(async(movie) => {

		const fakeGenres=[];
		const fakeActors=[];
        
		 movie.genres.forEach((id)=>{
			 genresArr.forEach((genre)=>{
				if(genre.id===id)
					 fakeGenres.push(genre.name);
			});
		});
		 actorsArr.forEach((actor)=>{
			 actor.movies.forEach((movieID)=>{
				if(movieID===movie.id){
					 fakeActors.push(actor.name);
				}
			});
		});
		// const uid=await uuid();
		await db.moviedetails.create({
			name:movie.name,
			// id:movie.id,
			genres:fakeGenres,
			actors:fakeActors
		});
	});
};

module.exports=loadDB;