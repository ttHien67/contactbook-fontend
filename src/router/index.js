import { createWebHashHistory, createRouter } from "vue-router";
import ContactBook from '@/components/ContactBook.vue';

const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: ContactBook,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;