const scraper = require('../index');

test('The message: Hello World! Should be returned.', () => {
    expect(sraper.generatefullPageScreenshot('https://www.nytimes.com/'));
});