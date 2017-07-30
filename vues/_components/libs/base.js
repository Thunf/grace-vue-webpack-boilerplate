/* eslint-disable */
import Console from './console.js';

export default {
  mixins: [Console],
  methods: {
    /**
     * [公共方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */
    noop() {
      return false;
    },
    hasProperty(obj, type) {
      return Object.prototype.hasOwnProperty.call(obj, type);
    },

    /**
     * [isXXX 基础方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */
    isUndefined(item) {
      return typeof item === 'undefined';
    },
    isDefined(item) {
      return !this.isUndefined(item);
    },
    isString(item) {
      return typeof item === 'string';
    },
    isNumber(item) {
      return typeof item === 'number';
    },
    isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    },
    isObject(item) {
      return typeof item === 'object' && !this.isArray(item);
    },
    isFunction(item) {
      return typeof item === 'function';
    },


    /**
    * [getXXX 增强方法]
    * @param  {[type]}  item [description]
    * @return {Boolean}      [description]
    */
    getString(item, defaultStr) {
        if (this.isString(item)) return item.trim();
        if (this.isNumber(item)) return `${item}`.trim();
        return defaultStr || '';
    },
    getNumber(item, defaultNum) {
        var matches = this.getString(item).match(/\d+/);
        return this.isNumber(matches && +matches[0]) ? +matches[0] : (defaultNum || -1);
    },
    getObject(item, defaultObj) {
        return this.isObject(item) ? item : (defaultObj || {});
    },
    getArray(item, defaultArr) {
        return this.isArray(item) ? item : (defaultArr || []);
    },
    getFunction(item) {
        return this.isFunction(item) ? item : this.noop;
    },


    /**
     * [拓展方法]
     * @param  {[type]}  item [description]
     * @return {Boolean}      [description]
     */
    goHref(url) {
      if (this.isString(url) && !this.isDebuging(`阻止跳转: ${this.getHref(url)}`)) {
        window.location.href = url;
      }
    },
    getFullHref(href) {
      if (!document) return href;
      const a = document.createElement('a');
      a.href = href;
      return a.href;
    },
    loopByKeys(obj, keys, callback) {
      if (this.isArray(keys)) {
        if (keys.length === 0) {
          return obj;
        }
        if (this.hasProperty(obj, keys[0])) {
          let item = obj[keys[0]];
          if (this.isFunction(callback)) {
            item = callback(item);
          }
          return this.loopByKeys(item, keys.slice(1), callback);
        }
        return undefined;
      }
      return obj;
    },

  },
};
/* eslint-enable */
