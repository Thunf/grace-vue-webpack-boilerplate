/* eslint-disable */
import Base from './base.js';
import Cookie from './cookie.js';

export default {
  mixins: [Base, Cookie],
  methods: {
    $post(url, data, successCb, errorCb) {
      // 接收方法，默认处理错误，仅在code==0完全成功时才回调成功
      let callback = this.getFunction(errorCb);
      this.$Loading && this.$Loading.start();
      this.$http.post(url, data, {
        headers: { 'X-XSRF-TOKEN': decodeURIComponent(this.getCookie('XSRF-TOKEN-MS')) },
      }).then((res) => {
        this.$Loading && this.$Loading.finish();
        const rdata = res && res.data;
        if (rdata) {
          // 处理message
          if (this.isObject(rdata)) {
            rdata.message = rdata.message || rdata.msg || rdata.code;
          }
          // 处理错误号
          switch (+rdata.code) {
            default: break;
            case 0: {
              callback = this.getFunction(successCb);
            }
          }
        }
        callback.call(this, rdata || res);
      }, (...res) => {
        this.$Loading && this.$Loading.error();
        console.error('接口报错', res);
        if (this.isFunction(errorCb)) {
          errorCb.apply(this, res);
        }
      });
    },
    $get(url, data, successCb, errorCb) {
      if (this.isFunction(data)) {
        errorCb = successCb;
        successCb = data;
      }

      // 接收方法，默认处理错误，仅在code==0完全成功时才回调成功
      let callback = this.getFunction(errorCb);
      // 发起请求
      this.$Loading && this.$Loading.start();
      this.$http.get(url, {
        params: data,
      }).then((res) => {
        this.$Loading && this.$Loading.finish();
        const rdata = res && res.data;
        if (rdata) {
          // 处理message
          if (this.isObject(rdata)) {
            rdata.message = rdata.message || rdata.msg || rdata.code;
          }
          // 处理错误号
          switch (+rdata.code) {
            default: break;
            case 0: {
              callback = this.getFunction(successCb);
            }
          }
        }
        callback.call(this, rdata || res);
      }, (...res) => {
        this.$Loading && this.$Loading.error();
        console.error('接口报错', res);
        if (this.isFunction(errorCb)) {
          errorCb.apply(this, res);
        }
      });
    },
  },
};
/* eslint-enable */
