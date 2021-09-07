<!--
 * @file: description
 * @author: huhao03
 * @Date: 2021-09-07 11:09:00
 * @LastEditors: huhao03
 * @LastEditTime: 2021-09-07 14:23:04
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import FMP from './fmp/fmp'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  beforeCreate(){
    (async function fun(){
        const fmp = new FMP()
        setTimeout(()=>{
            const  fmpTime = fmp.fmpTime
            console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
            console.log(fmpTime);
            console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
            console.log(fmp);
            console.log('🍌🍌🍌🍌🍌🍌🍌🍌🍌');
        },6000)
        
    })()
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
