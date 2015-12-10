# assemble-json-index [![npm version](https://badge.fury.io/js/assemble-json-index.svg)](https://badge.fury.io/js/assemble-json-index) [![Build Status](https://travis-ci.org/rparree/assemble-json-index.svg?branch=master)](https://travis-ci.org/rparree/assemble-json-index)

Creates a simple json file from the pages including the URL and the data of the page. This can then be used by the sites's
Javascript for example to add search functionality.

Example

```
[{"url":"article1.md.html","data":{"title":"Shred pumpkin seeds with condensed milk","description":"All bung holes love jolly, evil grogs.","author":"Nagi Iman","date":"2016-10-03T00:00:00.000Z","update":"2016-10-16T00:00:00.000Z","layout":"default.hbs"}},{"url":"article2.md.html","data":{"title":"sour shredded loaf","description":"Jolly, never rob a pants.","author":"Nagi Iman"}}]
```

## Options


### dest

Type: `String`

Default: `undefined`

json file destination. If not set, fallback to page destination.


### excludeData

Type: `Array` ot `String`

Default: `[]`

YAML Front Matter of a page properties to exclude from the json file 

## Usage Examples

See the included smoke test

## License

Copyright © 2015 edc4it b.v.
Released under the MIT license.
