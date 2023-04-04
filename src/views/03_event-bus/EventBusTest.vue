<template>
  <div>
    <h1>全局事件总线:$bus</h1>
    <div class="box">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
</script>

<style scoped>
.box{
  display: flex;
  justify-content: space-between;
}
</style>