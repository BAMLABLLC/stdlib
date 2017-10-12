const { Observable } = require('rxjs');
const { readdir } = require('fs');

/**
 * Reads the contents of a directory.
 * @param {string} dirname - The directory to read.
 * @return {array} - An array of file names.
 */

const readDir = dirname =>
    Observable.create(observer => {
        readdir(dirname, (err, files) => {
            if (err) { return observer.error(err); }
            else { observer.next(files.map(file => `${dirname}/${file}`)); }
            return observer.complete();
        });
    });

module.exports = readDir;
