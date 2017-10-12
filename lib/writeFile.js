const { Observable } = require('rxjs');
const { writeFile } = require('fs');
const curry = require('ramda/src/curry');

/**
 * Writes a file with the specified encoding.
 * @param {string} encoding - The encoding to write the file as.
 * @param {string} filename - The name of the file to be read.
 * @param {buffer} data - The data to be written to the file.
 * @return {buffer} - The same Buffer passed in.
 */

const _writeFile = curry((encoding, filename, data) =>
    Observable.create(observer => {
        writeFile(filename, data, encoding, err => {
            if (err) { return observer.error(err); }
            else { observer.next(data); }
            return observer.complete();
        });
    }));

module.exports = _writeFile;
