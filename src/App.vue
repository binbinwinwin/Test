<template>
    <div id="app">
    <router-view></router-view>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Card from './components/Card.vue';
import Card2 from './components/Card2.vue';

export default {
  data(){
    return{
      data:[],
    };
  },
  // mounted(){
  // this.axios.get('https://mocki.io/v1/fa720748-af63-4808-9931-03ab18926ffc')
  //     .then((res)=>{
  //       console.log(res);
  //       this.data = res.data;
  //     })
  // },
  name: 'App',
  components: {
    HelloWorld,
    Card,
    Card2
  }
}
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
</style>
