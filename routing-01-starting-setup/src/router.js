import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams', // redirect to /teams route
        },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter,
            },
            // alias: '/' // this doesn't change the url
            children: [
                {
                    name: 'team-members',
                    path: ':teamId', // /teams/t1
                    component: TeamMembers,
                    props: true // you can pass params as a prop (in this case :teamId), better practice than $route
                },
            ]
        },
        {
            path: '/users',
            components: {
               default: UsersList,
               footer: UsersFooter,
            },
            beforeEnter(to, from, next) {
                console.log('users before enter');
                console.log(to, from);
                next()
            }
        },
        // { If this is necessary, needs to be first than :teamId route
        //     path: '/teams/new',
        //     component: TeamsList
        // },
        {
            // This should come last !!
            path: '/:notFound(.*)', //dynamic sentence, means any character combination, if no of the previous routes "executed"
            // redirect: '/teams',
            component: NotFound,
        },
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from);

    // if (to.meta.needsAuth) {
    //     console.log('Needs auth!');
    //     next();
    // } else{
    //     next();
    // }
    next();
});

router.afterEach((to, from) => {
    // sending analytics data, for example to log every navigation action (user change pages)
    console.log('Global afterEach');
    console.log(to, from);
});

export default router;