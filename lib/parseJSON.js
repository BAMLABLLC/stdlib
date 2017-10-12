const { Observable } = require('rxjs');

const parseJSON = jsonString =>
    Observable.of(jsonString)
    .map(JSON.parse);

module.exports = parseJSON;
