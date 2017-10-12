const { Observable } = require('rxjs');
const { DOMparser } = require('xmldom');

/**
 * Parses an XML string into a DOM.
 * @param {string} xmlString - The XML to parse.
 * @return {document} - A DOM Object.
 */

const parseXML = xmlString =>
    Observable.of(xmlString)
    .map(parser.parseFromString.bind(parser));

module.exports = parseXML;
