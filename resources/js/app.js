import './bootstrap';
import '../sass/app.scss';

import {createApp} from "vue";
import Index from './components/Index.vue';



// const routes = [
//     {
//         path: '/people',
//         name: 'person.index',
//         component: () => import('./components/Person/Index.vue')
//     },
//
//
// ];



createApp(Index)
    .mount('#app')

// import {createApp} from "vue/dist/vue.esm-bundler.js";
// import './bootstrap';
//
// createApp(Index)
//     .mount('#app')
