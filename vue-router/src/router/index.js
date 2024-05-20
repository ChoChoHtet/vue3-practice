import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import JobsView from "@/views/jobs/JobsView.vue";
import JobDetail from "@/views/jobs/JobDetail.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'jobDetail',
            component: JobDetail,
            props: true
        },
        //redirect
        {
            path: '/all-jobs',
            redirect:"jobs"
        },
        //catchAll 404
        {
            path: '/:catchAll(.*)',
            component:PageNotFound
        }
    ]
})

export default router
