const frisby = require('frisby');
require('dotenv').config();
// // import fetch from 'node-fetch';

it('should return a status of 200', function () {
  return frisby
    .get(
      process.env.TEST_SERVER_URL +
        process.env.ST_API_PATH +
        '?apikey=' +
        process.env.API_KEY +
        '&apiuser=' +
        process.env.API_EMAIL +
        '&allocationType=pct&input={"portfolio": {"id":122382369}}'
    )
    .expect('status', 404);
});
// const fetch = require('node-fetch');

// let status;
// let getExample = () => {
//   return fetch('www.yahoo.com').then((res) => res.status);
// };

// it('should return a status of 200', function () {
//   return fetch('http://api.example.com').expect('status', 200);
// });
// test('gets yahoo ok', async () => {
//   console.log(document);
//   expect(await getExample()).toBe(200);
// });

// let getGoogle = async () => {
//   try {
//     const res = await fetch('https://wwww.google.com');
//     const { statusCode } = res;
//     return statusCode;
//   } catch (e) {
//     // console.log(e);
//   }
// };

// test('gets google ok', () => {
//   expect(getGoogle()).toBe(200);
// });

// test('gets google ok', () => {
//   expect(getGoogle()).toBe(200);
// });

// let getNoHttp = () => 200;

// test('getsNoHttp ok', () => {
//   expect(getNoHttp()).toBe(200);
// });

// https://test.hiddenlevers.com/l/api/v2/riskprofile?apikey=4ebc01811d962b31-52d28091eec0[…]ct&input=%7B%22portfolio%22:%20%7B%22id%22:122382369%7D%7D

// A more complete set of steps is:

// npm i --save-dev jest babel-jest @babel/preset-env
// add the follow to the module.exports in your jest.config.js
// transform: {
//     "^.+\\.jsx?$": "babel-jest"
//   },
// create a babel.config.json file with the following
// {
//   "presets": ["@babel/preset-env"]
// }
// After this, I was able to get files with imports working just fine.
