export default [
    {
        path: '/sns',
        name: 'sns',
        component: () => import('../pages/sns/Sns.vue'),
    },
    {
        path: '/snsfirst',
        name: 'snsFirst',
        component: () => import('../pages/sns/SnsFirst.vue'),
    },
    {
        path: '/mysns',
        name: 'mySns',
        component: () => import('../pages/sns/MySns.vue'),
    },
];
