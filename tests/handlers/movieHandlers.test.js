const handlers=require('../../src/handlers/movieHandlers');
const operations=require('../../src/utils/readMovieDetails');
const uuid=require('uuid');

describe('The getMovieDetails function ',()=>{
	it('should invoke the getDetails function',async()=>{
		const mockGet=jest.spyOn(operations,'getDetails');
		const mockResponse={
			name: 'Seven',
			genres: [
				'Mystery',
				'Thriller',
				'Crime'
			],
			actors: [
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

		const mockReq={
			params:{
				id:uuid()
			}
		};
        
		const res=await handlers.getMovieDetails(mockReq,mockH);
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
		
		const mockReq={
			params:{
				id:uuid()
			}
		};

		await handlers.getMovieDetails(mockReq,mockH);
		expect(mockGet).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('FAILED!');
		expect(mockCode).toHaveBeenCalledWith(500);
	});
});


describe('The postMovieDetail function ',()=>{
	it('should return 200 status code when successful',async()=>{
		const mockCode=jest.fn();
		const mockH={
			response:jest.fn(()=>{
				return {code:mockCode};
			})
		};
        
		const mockPost=jest.spyOn(operations,'postDetail');
		mockPost.mockResolvedValue();
		
		const mockReq={
			params:{
				id:uuid()
			}
		};
        
		await handlers.postMovieDetail(mockReq,mockH);
		expect(mockPost).toHaveBeenCalled();
		expect(mockCode).toHaveBeenCalledWith(200);
		expect(mockH.response).toHaveBeenCalledWith('Movie Added!');
        
	});
    
	it('should return a status code of 500 when cases fail',async()=>{
		const mockCode=jest.fn();
		const mockH={
			response:jest.fn(()=>{
				return {code:mockCode};
			})
		};
        
		const mockPost=jest.spyOn(operations,'postDetail');
		mockPost.mockRejectedValue(new Error('Update Failed!'));
		const mockReq={
			params:{
				id:uuid()
			}
		};
        
		await handlers.postMovieDetail(mockReq,mockH);
		expect(mockPost).toHaveBeenCalled();
		expect(mockCode).toHaveBeenCalledWith(500);
		expect(mockH.response).toHaveBeenCalledWith('Update Failed!');
	});
});