const express = require('express');

/**
 * 
 * @param {express.Express} app 
 */
module.exports = function (app) {
    app.use('/webLearn', express.static(__dirname + '/../docs'));
}