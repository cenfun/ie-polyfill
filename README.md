# ie-polyfill
> The way for ie to continue working

##  Why this?
* [@babel/polyfill](https://babel.dev/docs/en/babel-polyfill) has been deprecated since Babel 7.4.0
* load latest core-js and regenerator-runtime without build-ins
* use other polyfill in IE like fetch
## Versions
* [core-js](https://github.com/zloirock/core-js) ^3.9.1
* [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) ^0.13.7
* [whatwg-fetch](https://github.com/github/fetch) ^3.6.2


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
### Note: Please exclude ie-polyfill from webpack babel-loader config
```js
{
    test: /\.(js)$/,
    exclude: /ie-polyfill/,
    use: {
        loader: "babel-loader",
        options: {}
    }
}
```


## In Browser
```html
<script src="path-to/ie-polyfill/dist/ie-polyfill.js"></script>
```

## Changelogs

* 1.0.2  added fetch polyfill
