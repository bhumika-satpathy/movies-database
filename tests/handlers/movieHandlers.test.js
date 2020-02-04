const handlers=require('../../src/handlers/movieHandlers');
const operations=require('../../src/utils/readMovieDetails');

describe('The getMovieDetails function ',()=>{
	it('should invoke the getDetails function',async()=>{
		const mockGet=jest.spyOn(operations,'getDetails');
		const mockResponse={
			'name': 'Seven',
			'genres': [
				'Mystery',
				'Thriller',
				'Crime'
			],
			'actors': [
				'Brad Pitt',
				'Morgan Freeman'
			]
		};
		mockGet.mockResolvedValue(mockResponse);
		const mockCode=jest.fn();

		const mockH={
			response:jest.fn(()=>{
				return {code:mockCode};
			})
		};
        
		await handlers.getMovieDetails(null,mockH);
		expect(mockGet).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith(mockResponse);
		expect(mockCode).toHaveBeenCalledWith(200);
	});
    
	it('should return a status code of 500 when case fails',async()=>{
		const mockGet=jest.spyOn(operations,'getDetails');
		mockGet.mockRejectedValue(new Error('FAILED!'));
		const mockCode=jest.fn();

		const mockH={
			response:jest.fn(()=>{
				return {code:mockCode};
			})
		};
        
		await handlers.getMovieDetails(null,mockH);
		expect(mockGet).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('FAILED!');
		expect(mockCode).toHaveBeenCalledWith(500);
	});
});