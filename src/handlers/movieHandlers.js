const operations=require('../utils/readMovieDetails');


const getMovieDetails=async(request,h)=>{
	try{
		const res=await operations.getDetails();
		return h.response(res);
	}catch(err){
		return h.response(err.message);
	}
};

module.exports={getMovieDetails};