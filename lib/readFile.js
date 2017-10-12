const { Observable } = require('rxjs');
const { readFile } = require('fs');
const curry = require('ramda/src/curry');

/**
 * Reads in a file with the specified encoding.
 * @param {string} encoding - The encoding to read the file as.
 * @param {string} filename - The name of the file to be read.
 * @return {buffer} - A Buffer of the file contents.
 */

const readFileObservable = Observable.bindNodeCallback(readFile);
const _readFile = curry((encoding, filename) =>
    readFileObservable(filename, encoding));

module.exports = _readFile;
