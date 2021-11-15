module.exports = [
    {
        path: '/',
        name: 'user.index',
        component: () => import('./routes/User/Index.vue')
    },
    {
        path: '/link',
        name: 'user.link',
        component: () => import('./routes/User/LinkForm.vue')
    },
    {
        path: '/user/:username',
        name: 'user.page',
        component: () => import('./routes/User/Page.vue')
    }
]
