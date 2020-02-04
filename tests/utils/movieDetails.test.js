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

describe('The postDetail function ',()=>{
	it('should invoke the create function to add a note',async()=>{
		const mockCreate=jest.spyOn(db.moviedetails,'create');
		mockCreate.mockResolvedValue();
		const note={
			name: 'Pineapple Express',
			genres: ['Comedy','Drama'],
			actors: ['Seth Rogen']
			
		};
		mockCreate.mockResolvedValue();
		await operations.postDetail(note);
		expect(mockCreate).toHaveBeenCalledWith(note);
	});
    
});

describe('The loadDB function',()=>{
	it('should invoke the create function',async()=>{
		const mockCreate=jest.spyOn(db.moviedetails,'create');
		mockCreate.mockResolvedValue();
		const note={
			name: 'Pineapple Express',
			genres: ['Comedy','Drama'],
			actors: ['Seth Rogen']  
		};
		mockCreate.mockResolvedValue();
		await operations.loadDB();
		expect(mockCreate).toHaveBeenCalledWith(note);
	});
});




