const { Observable } = require('rxjs');
const { DOMParser } = require('xmldom');
const parser = new DOMParser();

/**
 * Parses an XML string into a DOM Object.
 * @param {string} xmlString - The XML to parse.
 * @return {document} - A DOM Object.
 */

const parseXML = xmlString =>
    Observable.of(xmlString)
    .map(parser.parseFromString.bind(parser));

module.exports = parseXML;
