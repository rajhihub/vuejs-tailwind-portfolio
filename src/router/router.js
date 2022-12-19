import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Blog from '../components/Blog.vue';
import Contact from '../components/Contact.vue';




const routes = [{

        path: '/',
        component: Home,
    },
    {

        path: '/about',
        component: About,
    },
    {

        path: '/projects',
        component: Projects,
    },
    {

        path: '/blog',
        component: Blog,
    },
    {

        path: '/contact',
        component: Contact,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;