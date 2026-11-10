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
        title: 'Menu 01',
        to: '/',
        icon: LayoutDashboard,
    },
    {
        title: 'Menu 02',
        to: '/',
        icon: LayoutDashboard,
    },
    {
        title: 'Menu 04',
        to: '/',
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