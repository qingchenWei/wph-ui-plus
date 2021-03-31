<template>
  <div id="app">
    <h3>朴素按钮：</h3>
    <div class="box">
      <wph-button plain>按钮</wph-button>
      <wph-button plain type="primary">primary按钮</wph-button>
      <wph-button plain type="success">success按钮</wph-button>
      <wph-button plain type="info">info按钮</wph-button>
      <wph-button plain type="danger">danger按钮</wph-button>
      <wph-button plain type="warning">warning按钮</wph-button>
    </div>
    <h3>默认按钮：</h3>
    <div class="box">
      <wph-button>按钮</wph-button>
      <wph-button type="primary">primary按钮</wph-button>
      <wph-button type="success">success按钮</wph-button>
      <wph-button type="info">info按钮</wph-button>
      <wph-button type="danger">danger按钮</wph-button>
      <wph-button type="warning">warning按钮</wph-button>
    </div>
    <h3>圆角按钮</h3>
    <div class="box">
      <wph-button round>按钮</wph-button>
      <wph-button round type="primary">primary按钮</wph-button>
      <wph-button round type="success">success按钮</wph-button>
      <wph-button round type="info">info按钮</wph-button>
      <wph-button round type="danger">danger按钮</wph-button>
      <wph-button round type="warning">warning按钮</wph-button>
    </div>
    <h3>椭圆按钮</h3>
    <div class="box">
      <wph-button circle>按钮</wph-button>
      <wph-button circle type="primary">primary按钮</wph-button>
      <wph-button circle type="success">success按钮</wph-button>
      <wph-button circle type="info">info按钮</wph-button>
      <wph-button circle type="danger">danger按钮</wph-button>
      <wph-button circle type="warning">warning按钮</wph-button>
    </div>
    <h3>禁用按钮</h3>
    <div class="box">
      <wph-button disabled>按钮111</wph-button>
      <wph-button disabled type="primary">primary按钮</wph-button>
      <wph-button disabled type="success">success按钮</wph-button>
      <wph-button disabled type="info">info按钮</wph-button>
      <wph-button disabled type="danger">danger按钮</wph-button>
      <wph-button disabled type="warning">warning按钮</wph-button>
    </div>
    <h3>图标按钮</h3>
    <div class="box">
      <wph-button class="iconfont wph-icon-bags"></wph-button>
      <wph-button class="iconfont wph-icon-ashbin" type="primary"></wph-button>
      <wph-button class="iconfont wph-icon-browse" type="success"></wph-button>
      <wph-button class="iconfont wph-icon-jewelry" type="info"></wph-button>
      <wph-button class="iconfont wph-icon-hot" type="danger"></wph-button>
      <wph-button
        class="iconfont wph-icon-collection"
        type="warning"
      ></wph-button>
    </div>
    <h3>dialog弹框</h3>
    <div class="box">
      <wph-button @click="dislogChange">dialog弹框</wph-button>
    </div>
    <div>
      <wph-dialog
        title="这是一个弹窗"
        :visible="showDialog"
        width="60%"
        @close="showDialog = false"
      >
        <template v-slot:title>
          <h3>这是一个标题</h3>
        </template>
        <div>这是内容部分</div>
        <template v-slot:footer>
          <wph-button @click="showDialog = false" plain type="info"
            >取消</wph-button
          >
          <wph-button plain @click="showmessage" type="primary">确认</wph-button>
        </template>
      </wph-dialog>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance} from "vue";
export default {
  name: "App",
  setup() {
    let { proxy } = getCurrentInstance();
    const showDialog = ref(false);
    const dislogChange = () => {
      showDialog.value = true;
    };
    const showmessage = () => {
      proxy.Message.success()
    }
    return {
      dislogChange,
      showDialog,
      showmessage
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  margin-top: 20px;
  width: 900px;
  display: flex;
  justify-content: space-around;
}
</style>
