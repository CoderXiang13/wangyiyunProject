// 子类 继承 父类

// 子类的实例 具有 父类实例 的方法和属性

// new 类 ->  实例

// vue.extend()  返回的是一个子类

import Vue from 'vue';
import loading from './loading'

let LoadingVue = Vue.extend(loading)



export default {
  createLoading(option) {
    let ins = new LoadingVue({
      data() {
       return {
         msg: option.msg
       }
      },
      methods: {
        fn: option.fn
      }
    });
    let ins1 = ins.$mount();
    // console.log(ins.$el);
    // document.body.appendChild(ins1.$el)
  }
}
