export default [
    {
        path: '/group',
        name: 'group',
        component: () => import('../pages/group/Group.vue'),
    },
    {
        path: '/groupfirst',
        name: 'groupfirst',
        component: () => import('../pages/group/GroupFirst.vue'),
    },
    {
        path: '/groupDetail',
        name: 'groupDetail',
        component: () => import('../pages/group/GroupDetail.vue'),
    },
    {
        path: '/boardDetail',
        name: 'boardDetail',
        component: () => import('../pages/group/BoardDetail.vue'),
    },
];
