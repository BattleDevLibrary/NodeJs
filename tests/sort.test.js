const { sort2D, filterCol2D, sumCol2D } = require('./../src/btdv_Sort');

describe('Sort', () => {
	test('sort2D using objects', () => {
		const toSort = [ { a: 3, b: 'test3' }, { a: 1, b: 'test2' }, { a: 2, b: 'test' } ];

		const expected = [ 1, 2, 3 ];
		const expectedDecreasing = [ 3, 2, 1 ];

		expect(JSON.stringify(sort2D(toSort, 'a', true))).toBe(JSON.stringify(expected));
		expect(JSON.stringify(sort2D(toSort, 'a', false))).toBe(JSON.stringify(expectedDecreasing));
	});

	test('sort2D using arrays', () => {
		const toSort = [ [ 3, 4 ], [ 1, 2 ], [ 2, 5 ] ];

		const expected = [ 1, 2, 3 ];
		const expectedDecreasing = [ 3, 2, 1 ];

		expect(JSON.stringify(sort2D(toSort, 0, true))).toBe(JSON.stringify(expected));
		expect(JSON.stringify(sort2D(toSort, 0, false))).toBe(JSON.stringify(expectedDecreasing));
	});

	test('filterCol2D using objects', () => {
		const toFilter = [ { a: 3, b: 'test3' }, { a: 1, b: 'test2' }, { a: 2, b: 'test' } ];

		const expected = [ 'test3', 'test2', 'test' ];

		expect(JSON.stringify(filterCol2D(toFilter, 'b'))).toBe(JSON.stringify(expected));
	});

	test('filterCol2D using arrays', () => {
		const toFilter = [ [ 3, 4 ], [ 1, 2 ], [ 2, 5 ] ];

		const expected = [ 3, 1, 2 ];

		expect(JSON.stringify(filterCol2D(toFilter, 0))).toBe(JSON.stringify(expected));
	});

	test('sumCol2D', () => {
		const toSum = [ [ 3, 4 ], [ 1, 2 ], [ 2, 5 ] ];

		expect(sumCol2D(toSum, 0)).toBe(6);
	});
});
