const { Observable } = require('rxjs');
const { DOMparser } = require('xmldom');

const parseXML = xmlString =>
    Observable.of(xmlString)
    .map(parser.parseFromString.bind(parser));

module.exports = parseXML;
