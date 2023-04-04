<template>
   <div>
       <h1>事件相关</h1>
       <pre @click="handler">
          我是祖国的老花骨朵
       </pre>
       <div @click="handler1(1,2,3,$event)">我要传递多个参数</div>
       <hr>
       <Event1 @click="handler2"></Event1>
       <hr>
       <Event2  @xxx="handler3" @click="handler4"></Event2>
   </div>
</template>
<script setup lang="ts">
//自定义事件:实现组件通信[子组件给父组件传递参数]
//vue3中:系统提供标签、组件标签[自定义标签]都即为 @click|@change|mouseenter...原生DOM事件
import Event1 from './Event1.vue';
import Event2 from './Event2.vue';
//pre点击事件回调
const handler = (event)=>{
    //系统注入的event事件对象
    console.log('事件回调执行',event)
}
//div点击事件回调
const handler1 = (a,b,c,$event)=>{
    console.log(a,b,c,$event)
}

//event1子组件事件回调
const handler2 = ()=>{
    console.log(123);
}

//event2自定义事件回调
const handler3 = (car,params)=>{
     console.log(car,params);
}

//自定义事件click写法
const handler4 = (params)=>{
    console.log(params)
}
</script>

<style scoped>

</style>