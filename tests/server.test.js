let  {server}  = require('../src/server');
const operations = require('../src/utils/readMovieDetails');


const init = async () => {
	await server.initialize();
	return server;
};

xdescribe('the server function', () => {
	beforeEach(async () => {
		server = await init();
	});
	afterEach(async () => {
		await server.stop();
	});

	it('should obtain 200 success code for route "movies/id" with GET method', async () => {
		const mockGet = jest.spyOn(operations, 'getDetails');
		const mockResponse = {
			name: 'Pineapple Express',
			genres: [
				'Comedy',
				'Drama',
			],
			actors: [
				'Seth Rogen',
			]
		};
		mockGet.mockResolvedValue(mockResponse);
		const getNotesObj = {
			method: 'GET',
			url: '/movies/{id}',
		};
		const response = await server.inject(getNotesObj);
		expect(response.statusCode).toBe(200);
		expect(response.result).toBe(mockResponse);
		mockGet.mockRestore();
	});

});