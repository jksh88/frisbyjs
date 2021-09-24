import frisby from 'frisby';
import fetch from 'node-fetch';

// it('should return a status of 200', function () {
//   return frisby.get('http://api.example.com').expect('status', 200);
// });
// const fetch = require('node-fetch');

// let status;
let getExample = () => {
  return fetch('http://api.example.com')
    .then((res) => {
      return res.json();
    })
    .then((data) => status);
};

it('should return a status of 200', function () {
  return fetch('http://api.example.com').expect('status', 200);
});
// test('gets example ok', () => {
//   expect(getExample()).toBe(200);
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
