<template>
  <div class="son">
       <h1>我是子组件:曹植</h1>
       <p>{{props.info}}</p>
       <p>{{props.money}}</p>
      <!--props可以省略前面的名字--->
       <p>{{info}}</p>
       <p>{{money}}</p>
    <p>{{defineNumber}}</p>
       <button @click="updateProps">修改props数据</button>
  </div>
</template>

<script setup lang="ts">
//需要使用到defineProps方法去接受父组件传递过来的数据
//defineProps是Vue3提供方法,不需要引入直接使用
import {ref} from "vue";

let props = defineProps(['info','money']); //数组|对象写法都可以
let defineNumber = ref(123);
//按钮点击的回调
const updateProps = ()=>{
  // props.money+=10;  // props:只读的
  console.log(props.info)
  defineNumber.value = props.money;
}
</script>

<style scoped>
.son{
  width: 400px;
  height: 200px;
  background: hotpink;
}
</style>
