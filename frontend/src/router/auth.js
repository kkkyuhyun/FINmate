export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/auth/LoginPage.vue'),
    },
    {
        path: '/join',
        name: 'join',
        component: () => import('../pages/auth/JoinPage.vue'),
    },
    {
        path: '/findId',
        name: 'findId',
        component: () => import('../pages/auth/findId.vue'),
    },
    {
        path: '/findPw',
        name: 'findPw',
        component: () => import('../pages/auth/findPw.vue'),
    },
];
