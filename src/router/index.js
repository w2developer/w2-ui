import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/MainLayout.vue'),
            children: [
                {
                    path: 'accordion',
                    name: 'Accordion',
                    component: () => import('@/views/AccordionView.vue')
                },
                {
                    path: 'component-preview',
                    name: 'ComponentPreview',
                    component: () => import('@/views/ComponentPreviewView.vue')
                },
                {
                    path: 'avatar',
                    name: 'Avatar',
                    component: () => import('@/views/AvatarView.vue')
                },
                {
                    path: 'badge',
                    name: 'Badge',
                    component: () => import('@/views/BadgeView.vue')
                },
                {
                    path: 'breadcrumb',
                    name: 'Breadcrumb',
                    component: () => import('@/views/BreadcrumbView.vue'),
                },
            ]
        },
    ],
})

export default router
