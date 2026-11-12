<script setup>
import { LayoutDashboard } from '@lucide/vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

import AppLayout from '@/components/layout/AppLayout.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Navbar from '@/components/layout/Navbar.vue'

const router = useRouter()

const navigation = [
    {
        title: 'Accordion',
        to: '/accordion',
        icon: LayoutDashboard,
    },
    {
        title: 'Avatar',
        to: '/avatar',
        icon: LayoutDashboard,
    },
    {
        title: 'Badge',
        to: '/badge',
        icon: LayoutDashboard,
    },
    {
        title: 'Breadcrumb',
        to: '/breadcrumb',
        icon: LayoutDashboard,
    },
    {
        title: 'Button',
        to: '/button',
        icon: LayoutDashboard,
    },
    {
        title: 'Card',
        to: '/card',
        icon: LayoutDashboard,
    },
    {
        title: 'Checkbox',
        to: '/checkbox',
        icon: LayoutDashboard,
    },
    {
        title: 'CodeBlock',
        to: '/code-block',
        icon: LayoutDashboard,
    },
    {
        title: 'CommandMenu',
        to: '/command-menu',
        icon: LayoutDashboard,
    },
    {
        title: 'ComponentPreview',
        to: '/component-preview',
        icon: LayoutDashboard,
    },
    {
        title: 'Dropdown',
        to: '/dropdown',
        icon: LayoutDashboard,
    },
    {
        title: 'FormGroup',
        to: '/form-group',
        icon: LayoutDashboard,
    },
    {
        title: 'Input',
        to: '/input',
        icon: LayoutDashboard,
    },
    {
        title: 'Label',
        to: '/label',
        icon: LayoutDashboard,
    },
    {
        title: 'Modal',
        to: '/modal',
        icon: LayoutDashboard,
    },
    {
        title: 'Select',
        to: '/select',
        icon: LayoutDashboard,
    },
    {
        title: 'Skeleton',
        to: '/skeleton',
        icon: LayoutDashboard,
    },
    {
        title: 'Switch',
        to: '/switch',
        icon: LayoutDashboard,
    },
    {
        title: 'Table',
        to: '/table',
        icon: LayoutDashboard,
    },
    {
        title: 'TableBody',
        to: '/table-body',
        icon: LayoutDashboard,
    },
    {
        title: 'TableCell',
        to: '/table-cell',
        icon: LayoutDashboard,
    },
    {
        title: 'TableHead',
        to: '/table-head',
        icon: LayoutDashboard,
    },
    {
        title: 'TableHeader',
        to: '/table-header',
        icon: LayoutDashboard,
    },
    {
        title: 'TableRow',
        to: '/table-row',
        icon: LayoutDashboard,
    },
    {
        title: 'Tabs',
        to: '/tabs',
        icon: LayoutDashboard,
    },
    {
        title: 'TabsContent',
        to: '/tabs-content',
        icon: LayoutDashboard,
    },
    {
        title: 'TabsList',
        to: '/tabs-list',
        icon: LayoutDashboard,
    },
    {
        title: 'TabsTrigger',
        to: '/tabs-trigger',
        icon: LayoutDashboard,
    },
    {
        title: 'Textarea',
        to: '/textarea',
        icon: LayoutDashboard,
    },
    {
        title: 'Toaster',
        to: '/toaster',
        icon: LayoutDashboard,
    },
    {
        title: 'Tooltip',
        to: '/tooltip',
        icon: LayoutDashboard,
    },
]

// Dispara navegação se o link for clicado
const handleNav = (href) => {
    router.push(href)
}
</script>

<template>
    <AppLayout :navigation="navigation">
        <template #sidebar>
            <Sidebar :navigation="navigation" />
        </template>

        <template #navbar>
            <Navbar />
        </template>

        <div class="mx-auto p-4 pb-24">
            <RouterView />
        </div>
    </AppLayout>
</template>