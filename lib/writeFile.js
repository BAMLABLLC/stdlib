const { Observable } = require('rxjs');
const { writeFile } = require('fs');
const curry = require('ramda/src/curry');

const _writeFile = curry((encoding, filename, data) =>
    Observable.create(observer => {
        writeFile(filename, data, encoding, err => {
            if (err) { return observer.error(err); }
            else { observer.next(data); }
            return observer.complete();
        });
    }));

module.exports = _writeFile;
