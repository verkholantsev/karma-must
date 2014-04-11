Must.js for Karma
=================

[![NPM version](https://badge.fury.io/js/karma-must.svg)](http://badge.fury.io/js/karma-must)

[Must.js](https://github.com/moll/js-must) for [Karma](http://karma-runner.github.io)

Installation
------------

```sh
npm install karma-must --save-dev
```

Add `must` to `frameworks` in your `karma.conf.js`.

```javascript
// frameworks to use
// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
frameworks: ['mocha', 'must'],

// ...
```

Usage
-----

Must.js asserts are available thru `Object.prototype`

```javascript
[].must.be.empty();
```

And with `expect` wrapper

```javascript
expect([]).be.empty();
```

[Learn more](https://github.com/moll/js-must/blob/master/doc/API.md).

License
-------

The MIT License (MIT)
