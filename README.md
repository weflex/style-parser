# style-parser

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
[cherrio]: https://github.com/cheeriojs/cheerio

