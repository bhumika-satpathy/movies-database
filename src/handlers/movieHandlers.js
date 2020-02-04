const operations=require('../utils/readMovieDetails');


const getMovieDetails=async(request,h)=>{
	try{
		const res=await operations.getDetails(request.params.id);
		return h.response(res).code(200);
	}catch(err){
		return h.response(err.message).code(500);
	}
};

const postMovieDetail=async(request,h)=>{
	try{
		await operations.postDetail(request.payload);
		return h.response('Movie Added!').code(200);
	}catch(err){
		return h.response(err.message).code(500);
	}
};

module.exports={getMovieDetails,postMovieDetail};