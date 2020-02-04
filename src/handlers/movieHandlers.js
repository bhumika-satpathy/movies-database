const operations=require('../utils/readMovieDetails');


const getMovieDetails=async(request,h)=>{
	try{
		const res=await operations.getDetails();
		return h.response(res).code(200);
	}catch(err){
		return h.response(err.message).code(500);
	}
};

const loadDB=async(request,h)=>{
	try{
		await operations.loadDB();
		return h.response('DB loaded!');
	}catch(err){
		return h.response(err.message);
	}

};

const postMovieDetail=async(request,h)=>{
	try{
		await operations.postDetail(request.payload);
		return h.response('Movie Added!');
	}catch(err){
		return h.response('Error encountered!');
	}
};

module.exports={getMovieDetails,postMovieDetail,loadDB};