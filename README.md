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


## Features
- [x] Multiple entry.
- [x] Code linting: [ESlint][url_eslint].
- [x] Inject component libraries at the same time. (**PR is welcome**) 
  - such as [vux][url_vux] / [iview][url_iview] / [element][url_element]
- [x] Upgrade [Webpack][url_webpack] to version 3.
- [x] [History API][url_history] example. [commit🚀](https://github.com/Thunf/grace-vue-webpack-boilerplate/commit/b15ea09b471ca5aa9817400f65a671beb6ffb7d7) 
- [ ] [Vuex][url_vuex] example.
- [ ] [Hot reload][url_hotreload].

[url_eslint]: https://github.com/eslint/eslint
[url_vux]: https://github.com/airyland/vux
[url_iview]: https://github.com/iview/iview
[url_element]: https://github.com/ElemeFE/element
[url_webpack]: https://github.com/webpack/webpack
[url_history]: https://router.vuejs.org/zh-cn/essentials/history-mode.html
[url_vuex]: https://github.com/vuejs/vuex
[url_hotreload]: https://github.com/glenjamin/webpack-hot-middleware

## Usage

### Start
``` bash
cd ~/fe/app/
git clone git@github.com:Thunf/grace-vue-webpack-boilerplate.git

cd grace-vue-webpack-boilerplate

yarn
// or: npm install

npm run dev
```

- `~/fe/app/` is applications' src folder in koa-grace project, see [folder structure - 目录结构](https://github.com/xiongwilee/koa-grace/tree/v2.x#目录结构-1)


### New files
```
npm run new

> ?type: // select a mode
 > init both controller & vue 
   init controller only 
   init vue files only 
> ?name: // get column name
```

### Build
```
npm run build
```


## Related Articles

[前后端分离之路 - Vue2项目多入口模板改造方案🚀](http://thunf.me/2017/02/17/20170217-grace-vue-boilerplate/)


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

