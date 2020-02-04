const createServer=require('./src/server');
const loadDBOperation=require('./src/utils/loadDBOperation');
const start=async()=>{
	const server=await createServer();
	server.start((err)=>{
		if(err)
			throw err;
	});
};

const loadDataBase=async()=>{
	await loadDBOperation();
};

start();
loadDataBase();
console.log('Server Started!');
console.log('DataBase Loaded! Yipee!');
