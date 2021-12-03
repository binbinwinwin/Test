import Vue from 'vue';
import VueRouter from 'vue-router';
import Card from '@/components/Card.vue';
import Card2 from '@/components/Card2.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    {
      name: '首頁', // 元件接下來會呈現的名稱
      path: '/', // 對應的虛擬路徑
      component: Card // 對應的元件，本文件上面自訂的分頁元件名稱
    },
    {
        name: '次頁', // 元件接下來會呈現的名稱
        path: '/two', // 對應的虛擬路徑
        component: Card2 // 對應的元件，本文件上面自訂的分頁元件名稱
    },
],
});