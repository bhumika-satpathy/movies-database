const operations=require('../../src/utils/readMovieDetails');
const db=require('../../models/index');

describe('The getdetails function ',()=>{
	it('should invoke the findall function',async()=>{
		const mockFindAll=jest.spyOn(db.moviedetails,'findAll');
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
		mockFindAll.mockResolvedValue(mockResponse);
		const res=await operations.getDetails();
		expect(res).toBe(mockResponse);
		expect(mockFindAll).toHaveBeenCalled();
	});
    
});
