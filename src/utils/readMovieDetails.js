const db=require('../../models/index');


const getDetails=async(updateID)=>{
	return await db.moviedetails.findOne({
		where:{
			id:updateID
		}
	});
};


const postDetail=async(movie)=>{
	await db.moviedetails.create({
		name:movie.name,
		genres:movie.genres,
		actors:movie.actors
	});
};



module.exports={getDetails,postDetail};