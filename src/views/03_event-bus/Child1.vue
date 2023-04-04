<template>
  <div class="son">
    <h1>我是兄弟组件曹植{{info}}</h1>
  </div>
</template>

<script setup lang="ts">
//引入bus对象
import $bus from "../../bus";
import { onMounted, ref } from "vue";

//接受兄弟组件传递过来的数据
let info = ref("");
onMounted(() => {
  //绑定事件sendData
  $bus.on("sendData", (data: string) => {
    info.value = data;
  });
});
</script>

<style scoped>
.son {
  width: 300px;
  height: 300px;
  background: skyblue;
}
</style>