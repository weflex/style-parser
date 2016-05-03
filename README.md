# style-parser

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

A [Node.js] library to parse the inline css styles.

## Tutorial

```js
const parse = require('style-parser');
parse('font-size:13px;');
```

## Use cases

Here we would list possible use cases that this library might be used.

### Working with cherrio

[cherrio] is server-side jQuery implementation that scraper would use, but the
jQuery/cherrio API doesn't provide the ability to get structured style object
from the `style` attribute like the below example:

The HTML:

```html
<div style="font-size:13px;width:50px"></div>
```

And the cherrio code:

```js
cherrio(html).attr('style');
// this will only return in string
```

So with the library [style-parser], we can do:

```js
const parse = require('style-parser')
parse(cherrio(html).attr('style'));
// this will return an object: {'font-size': '13px', 'width': '50px'}
```

### Working on browsers

Because the only dependency are [Parsimmon] which is in pure JavaScript, that
you are able to build it for browser environments and make it work with
browser-side jQuery or other useful lands.

## Installation

```sh
$ npm install style-parser --save
```

## License

MIT

[Node.js]: https://github.com/nodejs/node
[style-parser]: https://github.com/weflex/style-parser
[Parsimmon]: https://github.com/jneen/parsimmon
[cherrio]: https://github.com/cheeriojs/cheerio
[npm-image]: https://img.shields.io/npm/v/style-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/style-parser
[travis-image]: https://img.shields.io/travis/weflex/style-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/weflex/style-parser
[coveralls-image]: https://img.shields.io/codecov/c/github/weflex/style-parser.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/weflex/style-parser?branch=master
[david-image]: http://img.shields.io/david/weflex/style-parser.svg?style=flat-square
[david-url]: https://david-dm.org/weflex/style-parser
[downloads-image]: http://img.shields.io/npm/dm/style-parser.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/style-parser
