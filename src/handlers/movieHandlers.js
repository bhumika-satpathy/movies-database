const operations=require('../utils/readMovieDetails');


const getMovieDetails=async(request,h)=>{
	try{
		const res=await operations.getDetails();
		return h.response(res).code(200);
	}catch(err){
		return h.response(err.message).code(500);
	}
};

module.exports={getMovieDetails};