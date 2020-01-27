const express = require('express');

/**
 * 
 * @param {express.Express} app 
 */
module.exports = function (app) {
    app.use(express.static(__dirname + '/../docs'));
}