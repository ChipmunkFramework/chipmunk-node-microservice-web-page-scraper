/**
 * @file
 * @version 1.0.0
 * {@link https://github.com/ChipmunkFramework/ GitHub}
 */

'use strict';

const puppeteer = require('puppeteer');
let path = require('path');
let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

/**
 *
 * @param {String} url - The URL of the web page you want to get a screenshot of.
 */
let generatefullPageScreenshot = (url, options) => {
    const defaultOptions = {
        "screenshotPath": ''
    };

    (async() => {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        //await page.emulate(devices['iPhone 6']);
        await page.goto(url);
        await page.screenshot({path: 'full.png', fullPage: true});
        await browser.close();

    })();
};

generatefullPageScreenshot('https://www.nytimes.com/');

// Construct a schema, using GraphQL schema language
/*let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
    hello: () => {
    return 'Hello world!';
},
};

let app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');*/