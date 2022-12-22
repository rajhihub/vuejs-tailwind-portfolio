import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Home.vue';
import About from '../discover/AboutPage.vue';
import Projects from '../discover/ProjectPage.vue';
import Blog from '../discover/BlogPage.vue';
import Contact from '../components/Contact.vue';
import Allblogs from '../components/Allblogs.vue';
import SingleBlog from "../components/SingleBlog.vue";
import SingleProject from "../components/SingleProject.vue";


const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/projects",
        component: Projects,
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/blogs",
        component: Allblogs,
    },
    {
        path: "/singleblog",
        component: SingleBlog,
    },
    {
        path: "/singleproject",
        component: SingleProject,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;