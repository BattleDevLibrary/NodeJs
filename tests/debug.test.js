const { debug } = require('./../src/debug')

describe('Debug', function() {
	test('debug', function() {
		const spy = jest.spyOn(console, 'error').mockImplementation();

		debug('test');

		expect(spy).toHaveBeenCalledTimes(2);

		spy.mockRestore();
	});
});
