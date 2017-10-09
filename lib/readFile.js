const { Observable } = require('rxjs');
const { readFile } = require('fs');
const curry = require('ramda/src/curry');

const readFileObservable = Observable.bindNodeCallback(readFile);
const _readFile = curry((encoding, filename) =>
    readFileObservable(filename, encoding))

module.exports = _readFile;
