/*
 * @Author: 卫鹏辉 
 * @Date: 2021-03-26 10:38:11 
 * @Last Modified by: 卫鹏辉
 * @Last Modified time: 2021-03-31 15:23:15
 */
<template>
  <div>
    <transition name="message-fade" v-if="show">
      <!-- @click.self避免冒泡，只有点击自己时才能触发   -->
      <div class="message-box" :class="type1">
        <slot>{{title1}}</slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { toRefs,onMounted,ref } from 'vue';
export default {
  name: "wphMessage",
  props: {
    type: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "这是一条提示信息！",
    }
  },
  setup(props) {
    const show  = ref(true);
    const { title , type } = toRefs(props);
    let title1 = title.value;
    let type1 = type.value;
    onMounted(()=>{
      setTimeout(()=>{
        show.value = false;
      },20000)
    })
    return {
      show,
      title1,
      type1
    }
  },
};
</script>

<style lang="scss">
.message-box {
  min-width: 200px;
  // max-width: 100px;
  line-height: 40px;
  border-radius: 10px;
  
  height: 40px;
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translate(-50%,0);
  padding: 2px 10px;
  background: #a6a9ad;
  background-color: #a6a9ad;
  color: #fff;
  text-align: center;
}.success {
  background: #67c23a;
  color: #fff;
}
.info {
  background: #a6a9ad;
  background-color: #a6a9ad;
  color: #fff;
}
.warning {
  background: #ebb563;
  background-color: #ebb563;
  color: #fff;
}
.danger {
  background: #f78989;
  background-color: #f78989;
  color: #fff;
}
.message-enter-active {
  animation: fade 0.3s;
}
.message-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>