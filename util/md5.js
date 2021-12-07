const crypto = require('crypto');

module.exports = (str) => {
    return crypto.createHash('md5')
        .update('somemessages' + str)
        .digest('hex');
};

// example how crypto works
// // show all hashing methods
// // console.log(crypto.getHashes());

// const result = crypto.createHash('md5')
//     .update('hello')
//     .digest('hex')


// // hello: 5d41402abc4b2a76b9719d911017c592
// // plaintext -> hashing code
// // hello: 5d41402abc4b2a76b9719d911017c592
// // brute force attack


// // console.log(result);