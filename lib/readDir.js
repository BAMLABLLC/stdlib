const { Observable } = require('rxjs');
const { readdir } = require('fs');

const readDir = dirname =>
    Observable.create(observer => {
        readdir(dirname, (err, files) => {
            if (err) { return observer.error(err); }
            else { observer.next(files.map(file => `${dirname}/${file}`)); }
            return observer.complete();
        });
    });

module.exports = readDir;
