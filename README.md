# grace-vue-webpack-boilerplate

> A boilerplate for vue-webpack-project run with [koa-grace](https://github.com/xiongwilee/koa-grace), build with multiple entry

> **Compatibility Note:** In this branch `Vue@2.x supported 🚀`


## Related Documentation

This boilerplate should run with [Koa-grace](https://github.com/xiongwilee/koa-grace). 

Koa-grace is a new generation Nodejs SFB`(Separation of Front and Back ends)` framework.

Make sure you have read it!


## Usage

``` bash
cd ~/fe/app/
git clone git@github.com:Thunf/grace-vue-webpack-boilerplate.git grace-project

cd grace-project
npm install

npm run dev
```

- `~/fe/app/` is applications' src folder in koa-grace project, see [folder structure - 目录结构](https://github.com/xiongwilee/koa-grace/tree/v2.x#目录结构-1)


## What's Included

- `npm run dev`
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving compilation error overlay
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - Static files copy with [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with template to these generated assets.


## Thanks

This boilerplate is made from [vuejs-templates/vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack).

For detailed explanation & more functions, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and run it on [koa-grace](https://github.com/xiongwilee/koa-grace)

