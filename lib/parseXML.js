const { Observable } = require('rxjs');
const { DOMparser } = require('xmldom');

const parseXML = xmlString =>
    Observable.create(observer => {
        const parser = new DOMparser();
        try { observer.next(parser.parseFromString(xmlString)); }
        catch (err) { return observer.error(err); }
        return observer.complete();
    });

module.exports = parseXML;
