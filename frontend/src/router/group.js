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
        path: '/Tokyo',
        name: 'Tokyo',
        component: () => import('../pages/group/Tokyo.vue'),
    },
    
];
