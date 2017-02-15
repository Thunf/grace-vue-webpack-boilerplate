**Compatibility** Note: This branch works with Vue.js 1.x .

# grace-vue-webpack-boilerplate

> a boilerplate for vue-webpack-project run on [koa-grace](https://github.com/xiongwilee/koa-grace)


## Documentation

It's designed for [koa-grace](https://github.com/xiongwilee/koa-grace). 

Koa-grace is a new generation Nodejs SFB(Separation of Front and Back ends) framework.

Make sure to read it!


## Usage

### Simple demo

``` bash
$ cd ~/fe/app/
$ git clone git@github.com:Thunf/grace-vue-webpack-boilerplate.git grace_boilerplate
$
$ cd grace_boilerplate
$ npm install
$ 
$ npm run dev
```


### Custom

- clone this boilerplate to a new folder
```bash
$ cd ~/fe/app/
$ git clone git@github.com:Thunf/grace-vue-webpack-boilerplate.git <newFolderName>
```
- replace all `grace_boilerplate` with `<newFolderName>` in this folder
- install dependency & run dev
```bash
$ cd <newFolderName>
$ npm install
$ npm run dev
```


## What's Included

- `npm run dev`
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving compilation error overlay
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML copy with [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with template to these generated assets.


## Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and run it on [koa-grace](https://github.com/xiongwilee/koa-grace)
