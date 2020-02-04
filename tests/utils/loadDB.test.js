const loadDB=require('../../src/utils/loadDBOperation');
const db=require('../../models/index');

describe('The loadDB function ',()=>{
	it('should invoke the create function to add a note',async()=>{
		const mockCreate=jest.spyOn(db.moviesdetails,'create');
		mockCreate.mockResolvedValue();
		const note={
			name: 'Pineapple Express',
			genres: [
				'Comedy',
				'Drama',
			],
			actors: [
				'Seth Rogen',
			]
		};
		mockCreate.mockResolvedValue();
		await loadDB();
		expect(mockCreate).toHaveBeenCalledWith(note);
	});
});