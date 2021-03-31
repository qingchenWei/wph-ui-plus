// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from "./button.vue";
import Dialog from "./dialog.vue";
import Messagecom from "./message.vue";
import "./iconfont/iconfont.css";
import { reactive,createApp, h} from "vue";
const components = [Button, Dialog];
// 定义install方法
const install = function(Vue) {
  // 注册所有的组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const messageData = reactive({
  type: "info",
  title: "这是一个message！",
});
const handleData = (type, title) => {
  // 数据添加
  messageData.type = type;
  messageData.title = title;
  const container = document.createElement('div');
  container.setAttribute("id","message-box")
  document.body.appendChild(container);
  setTimeout(()=>{
    container.remove()
  },2000)
  // 创建
  const app = createApp({
    render() {
      return h(Messagecom, { ...messageData });
    }
  });
  // 容器挂载
  app.mount("#message-box");
};
const Message = {
  // 处理数据
  // 普通提示
  info: (title) => {
    handleData("info", title);
  },

  // 警告提示
  warning: (title) => {
    handleData("warning", title);
  },

  // 成功提示
  success: (title) => {
    handleData("success", title);
  },

  // 错误提示
  danger: (title) => {
    handleData("danger", title);
  },
};

// 导出install方法
export default {
  install,
  Message,
};
