// imports
// const Product = require('../models/product.model');
//
// // Simple version, without validation or sanitation
// exports.test = (req, res) => {
//     res.send('Greetings from the Test controller!');
// };

const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
