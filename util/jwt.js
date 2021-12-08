const jwt = require('jsonwebtoken');

const { promisify } = require('util');

exports.sign = promisify(jwt.sign);

exports.verify = promisify(jwt.verify);

exports.decode = promisify(jwt.decode); // only decode, do not verify

// 1. Generate jwt
// 1-1. synchronous signed
// const token = jwt.sign({
//     foo: 'bar'
// }, secretKey);
// console.log(token);

// 1-2. asynchronous signed
// jwt.sign({foo: 'bar'}, secretKey, (err, token) => {
//     if (err) {
//         return console.log('Generating token failed');
//     };
//     console.log(token);
// });

// 2. verify jwt
// 2-1. synchronous
// const result = jwt.verify(
//     "eyJ-----",
//     secretKey
// );
// console.log(result);

// 2-2. asynchronous
// const result = jwt.verify(
//     "eyJ-----",
//     secretKey,
//     (err, result) => {
//         if (err) {
//             return console.log('Token verification failed.');
//         };
//         console.log(result);
//     }
// );