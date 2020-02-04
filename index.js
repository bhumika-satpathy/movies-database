const createServer=require('./src/server');
const operations=require('./src/utils/readMovieDetails');
const start=async()=>{
	const server=await createServer();
	server.start((err)=>{
		if(err)
			throw err;
	});
};

const loadDataBase=async()=>{
	await operations.loadDB();
};

start();
loadDataBase();
console.log('Server Started!');
console.log('DataBase Loaded! Yipee!');
