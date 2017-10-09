## BAM Lab Standard Library

#### Most functions return an `<Observable>` that emits the type defined below

* `readDir :: <String> dirname -> <Array>`
* `readFile :: <String> encoding, <String> filename -> <Buffer>`
* `writeFile :: <String> encoding, <String> filename, <Buffer> data -> <Buffer>`
