let BetterDate = require('../7-testing');

describe('BetterDate', function() {
	it('should return the day of the week', function() {
		let betterDate = new BetterDate('06 Nov 2018');
		expect(betterDate.getDay()).toBe('Tuesday');
	});
});