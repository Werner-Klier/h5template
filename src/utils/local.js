/**
 * 本地存储操作封装
 * created by lxc 2020-06-24
 */

//  暴露
export default {
    get(key) {
      return JSON.parse(window.localStorage.getItem(key));
    },
    set(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
      window.localStorage.removeItem(key);
    },
    clear() {
      window.localStorage.clear();
    }
  };
  