const createServer=require('./src/server');
const loadDB=require('./src/utils/loadDB');

const start=async()=>{
	const server=await createServer();
	server.start((err)=>{
		if(err)
			throw err;
	});
};

start();
//loadDB();
console.log('Server Started!');