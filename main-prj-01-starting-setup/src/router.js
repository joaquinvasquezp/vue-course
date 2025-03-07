import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue'; 
import CoachRegister from './pages/coaches/CoachRegister.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches',
        },
        {
            path: '/coaches',
            component: CoachesList,
        },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {
                    path: 'contact', // /coaches/:id/contact
                    component: ContactCoach
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegister,
        },
        {
            path: '/requests',
            component: RequestsRecieved,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
});

export default router;