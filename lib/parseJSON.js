const { Observable } = require('rxjs');

/**
 * Parses a JSON string into an Object.
 * @param {string} jsonString - The JSON to parse.
 * @return {object} - An Object.
 */

const parseJSON = jsonString =>
    Observable.of(jsonString)
    .map(JSON.parse);

module.exports = parseJSON;
