<script setup>
import { LayoutDashboard, ArrowRight } from '@lucide/vue'
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
        icon: ArrowRight,
    },
    {
        title: 'Avatar',
        to: '/avatar',
        icon: ArrowRight,
    },
    {
        title: 'Badge',
        to: '/badge',
        icon: ArrowRight,
    },
    {
        title: 'Breadcrumb',
        to: '/breadcrumb',
        icon: ArrowRight,
    },
    {
        title: 'Button',
        to: '/button',
        icon: ArrowRight,
    },
    {
        title: 'Card',
        to: '/card',
        icon: ArrowRight,
    },
    {
        title: 'Checkbox',
        to: '/checkbox',
        icon: ArrowRight,
    },
    {
        title: 'CodeBlock',
        to: '/code-block',
        icon: ArrowRight,
    },
    {
        title: 'CommandMenu',
        to: '/command-menu',
        icon: ArrowRight,
    },
    {
        title: 'ComponentPreview',
        to: '/component-preview',
        icon: ArrowRight,
    },
    {
        title: 'Dropdown',
        to: '/dropdown',
        icon: ArrowRight,
    },
    {
        title: 'FormGroup',
        to: '/form-group',
        icon: ArrowRight,
    },
    {
        title: 'Input',
        to: '/input',
        icon: ArrowRight,
    },
    {
        title: 'Label',
        to: '/label',
        icon: ArrowRight,
    },
    {
        title: 'Modal',
        to: '/modal',
        icon: ArrowRight,
    },
    {
        title: 'Select',
        to: '/select',
        icon: ArrowRight,
    },
    {
        title: 'Skeleton',
        to: '/skeleton',
        icon: ArrowRight,
    },
    {
        title: 'Switch',
        to: '/switch',
        icon: ArrowRight,
    },
    {
        title: 'Table',
        to: '/table',
        icon: ArrowRight,
    },
    {
        title: 'TableBody',
        to: '/table-body',
        icon: ArrowRight,
    },
    {
        title: 'TableCell',
        to: '/table-cell',
        icon: ArrowRight,
    },
    {
        title: 'TableHead',
        to: '/table-head',
        icon: ArrowRight,
    },
    {
        title: 'TableHeader',
        to: '/table-header',
        icon: ArrowRight,
    },
    {
        title: 'TableRow',
        to: '/table-row',
        icon: ArrowRight,
    },
    {
        title: 'Tabs',
        to: '/tabs',
        icon: ArrowRight,
    },
    {
        title: 'TabsContent',
        to: '/tabs-content',
        icon: ArrowRight,
    },
    {
        title: 'TabsList',
        to: '/tabs-list',
        icon: ArrowRight,
    },
    {
        title: 'TabsTrigger',
        to: '/tabs-trigger',
        icon: ArrowRight,
    },
    {
        title: 'Textarea',
        to: '/textarea',
        icon: ArrowRight,
    },
    {
        title: 'Toaster',
        to: '/toaster',
        icon: ArrowRight,
    },
    {
        title: 'Tooltip',
        to: '/tooltip',
        icon: ArrowRight,
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