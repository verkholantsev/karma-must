Must.js for Karma
=================

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

Must.js assertations are available thru `Object.prototype`

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
