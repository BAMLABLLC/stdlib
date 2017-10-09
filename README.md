## BAM Lab Standard Library

#### All asynchronous functions return an `<Observable>` that emits the type defined below

* `parseXML :: <String> xmlString -> <Document>`
* `readDir :: <String> dirname -> <Array>`
* `readFile :: <String> encoding, <String> filename -> <Buffer>`
* `writeFile :: <String> encoding, <String> filename, <Buffer> data -> <Buffer>`
