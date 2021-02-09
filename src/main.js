import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'

//将api.js文件中的方法定义为插件的形式
import {postKeyValueRequest} from "@/utils/api";
import {postRequest} from "@/utils/api";
import {putRequest} from "@/utils/api";
import {getRequest} from "@/utils/api";
import {deleteRequest} from "@/utils/api";
import {initMenu} from "@/utils/menus";


Vue.prototype.postKeyValueRequest=postKeyValueRequest;
Vue.prototype.postRequest=postRequest;
Vue.prototype.putRequest=putRequest;
Vue.prototype.getRequest=getRequest;
Vue.prototype.deleteRequest=deleteRequest;

Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if(to.path=='/'){
    next();
  }else{
    if (window.sessionStorage.getItem("user")) {
      initMenu(router, store);
      next();
    } else {
      next('/?redirect=' + to.path);
    }
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
