## BAM Lab Standard Library

#### All asynchronous functions return an `<Observable>` that emits the type defined below

* `parseXML :: <String> xml -> <Document>`
* `readDir :: <String> directory -> <Array>`
* `readFile :: <String> encoding, <String> file -> <Buffer>`
* `writeFile :: <String> encoding, <String> file, <Buffer> data -> <Buffer>`
