<template>
<div id="container">
    <h1 class="title">分頁</h1>
    <!-- 我是分頁 -->
    <input type="button" value="點我拿資料" @click="GetAPI">
    <button type="button"><router-link to="/">點我上一頁</router-link></button>
<div class="user-profile" v-for="item in data" :key="item.name">
    <input type="radio" id="huey" name="drone" value="huey"
    checked>
    <label for="huey">{{item.name}} 居住地:{{item.city}} 興趣:{{item.hobby}}</label>
    <div>
<select>
    <option>請選擇他/她最愛的寵物</option>
    <option>狗</option>
    <option>貓</option>
    <option>兔子</option>
    <option>天竺鼠</option>
</select>
</div>
</div>
</div>
</template>

<script>
import Vue from 'vue/dist/vue.esm.js';

// Vue.component('cardtest',{
// 	props: ['title'],
// 	template:`
// 		<div>456
// 		</div>
// 	`,
// });

export default {
props: {

},
data(){
    return{
        data:[],
    }
},
methods:{
GetAPI(){
this.axios.get('https://mocki.io/v1/a1a08d72-b765-406e-91fa-698f8da971b4')
.then((res)=>{
    console.log(res);
    this.data = res.data;
})
}
},
// 	mounted(){
//     this.axios.get('https://mocki.io/v1/fa720748-af63-4808-9931-03ab18926ffc')
//     .then((res)=>{
//         console.log(res);
//         this.data = res.data;
//     })
// },
}

</script>

<style lang="scss">
body {
background: #ecf0f1;
padding: 2.23em;
}

a{
text-decoration: none;
color:green;
border-radius: 10%;
}

input[type="button"]{
margin: 10px;
color:red;
border-radius: 10%;
}

input[type="radio"]{
margin: 15px;
}

.title {
color: #2c3e50;
font-family: "Coda", sans-serif;
text-align: center;
}
// .user-profile {
//   margin: auto;
// 	width: 27em;
//   height: 11em;
//   background: #fff;
//   border-radius: .3em;
// }

// .user-profile  #fullname {
//   margin: auto;
//   margin-top: -4.40em;
//   margin-left: 5.80em;
//   color: #16a085;
//   font-size: 1.53em;
//   font-family: "Coda", sans-serif;
//   font-weight: bold;
// }

// #username {
//   margin: auto;
//   display: inline-block;
//   margin-left: 10.43em;
//   color: #3498db;
//   font-size: .87em;
//   font-family: "varela round", sans-serif;
// }

// .user-profile > .description {
//   margin: auto;
//   margin-top: 1.35em;
//   margin-right: 3em;
//   width: 18em;
//   color: #7f8c8d;
//   font-size: .87em;
//   font-family: "varela round", sans-serif;
// }

// .user-profile > img#avatar {
// 	padding: .7em;
//   margin-left: .3em;
//   margin-top: .3em;
//   height: 6.23em;
//   width: 6.23em;
//   border-radius: 18em;
// }


// .footer {
// 	margin: 2em auto;
// 	height: 3.70em;
//   background: #16a085;
//   text-align: center;
//   border-radius: 0 0 .3em .3em;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: background 0.1s;
// }

// button {
//   color: white;
//   font-family: "Coda", sans-serif;
//   text-align: center;
//   font-size: 20px;
//   background: none;
//   outline: none;
//   border: 0;
// }

// .footer:hover {
//   background: #1abc9c;
// }
</style>