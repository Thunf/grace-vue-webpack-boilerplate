# grace-vue-webpack-boilerplate

<p align="center"><img width="75%" src="http://7xrhcw.com1.z0.glb.clouddn.com/grace_vue2_boilerplate2.jpg" /></p>

A boilerplate for vue-webpack-project run with [koa-grace](https://github.com/xiongwilee/koa-grace), setup with Multiple entry.

> **Compatibility Note:** 
- In this branch **`Vue@2.x supported 🚀`**
- 1.x Please see the version [boilerplate@v1.x](https://github.com/Thunf/grace-vue-webpack-boilerplate/tree/v1.x)


## Related Documentation

This boilerplate should run with [Koa-grace](https://github.com/xiongwilee/koa-grace). 

Koa-grace is a new generation Nodejs SFB`(Separation of Front and Back ends)` framework.

Make sure you have read it!


## Related Articles

[前后端分离之路 - Vue2项目多入口模板改造方案🚀](http://thunf.me/2017/02/17/20170217-grace-vue-boilerplate/)


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

