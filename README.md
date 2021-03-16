# ie-polyfill
> The way for ie to continue working

##  Why this?
* [@babel/polyfill](https://babel.dev/docs/en/babel-polyfill) has been deprecated since Babel 7.4.0
* want to load latest core-js and regenerator-runtime without build-ins
## Versions
* [core-js/stable](https://github.com/zloirock/core-js) ^3.9.1
* [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) ^0.13.7


## Install
```sh
npm i ie-polyfill
```

## Usage
```js
import "ie-polyfill"
//or
require("ie-polyfill")
```

## In Browser
```html
<script src="path-to/ie-polyfill/dist/ie-polyfill.js"></script>
```

