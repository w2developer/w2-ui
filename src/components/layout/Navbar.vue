<script setup>
    import { inject, ref, onMounted, computed } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { Menu, User, Settings, LogOut, Moon, Sun, Bell } from '@lucide/vue'

    import Button from '../ui/Button.vue'
    import Dropdown from '../ui/Dropdown.vue'
    import Breadcrumb from '../ui/Breadcrumb.vue'
    import Switch from '@/components/ui/Switch.vue';

    import { useTheme } from '@/composables/useTheme';

    const { isDark } = useTheme();

    const toggleMobile = inject('toggleMobile')
    const router = useRouter()
    const route = useRoute()
    const navigation = inject('navigation', [])

    const breadcrumbItems = computed(() => {
        const basePath = '/'
        const items = [{ label: 'Início', to: basePath, icon: 'home' }]
        const currentPath = route.path
        let found = false

        const findInNavigation = (navItems, parents = []) => {
            if (!navItems) return

            for (const item of navItems) {
                if (item.to === currentPath) {
                    parents.forEach((p) => items.push({ label: p.title }))
                    if (item.to !== basePath) {
                        items.push({ label: item.title })
                    }
                    found = true
                    return
                }
                if (item.children) {
                    findInNavigation(item.children, [...parents, item])
                    if (found) return
                }
            }
        }

        findInNavigation(navigation)

        // Fallback: se a rota não estiver na árvore de navegação
        if (!found && currentPath !== basePath) {
            const parts = currentPath.split('/').filter(Boolean)
            if (parts.length > 0) {
                items.push({ label: parts[parts.length - 1] })
            }
        }

        return items
    })
</script>

<template>
    <header class="flex h-16 items-center justify-between border-b border-border bg-background px-4 shadow-sm">
        <div class="flex items-center">
            <Button variant="ghost" size="icon" class="mr-2 lg:hidden" @click="toggleMobile">
                <Menu class="h-5 w-5" />
            </Button>
            <Breadcrumb :items="breadcrumbItems" class="hidden md:flex ml-2" />
        </div>

        <div class="flex items-center gap-2 sm:gap-4">
            <div class="flex items-center gap-2">
                <Sun class="w-4 h-4 text-muted-foreground" />
                <Switch id="toggle-tema" v-model="isDark" variant="violet" />
                <Moon class="w-4 h-4 text-muted-foreground" />
            </div>

            <Dropdown>
                <template #trigger>
                    <button class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                        <User class="h-5 w-5" />
                    </button>
                </template>

                <template #content>
                    <div class="px-4 py-3 border-b border-border mb-1">
                        <p class="text-sm font-medium text-foreground truncate max-w-[180px]">Username</p>
                        <p class="text-xs text-muted-foreground truncate">Cargo: Exemplo</p>
                    </div>
                    
                    <div class="px-1">
                        <button
                            @click=""
                            class="w-full flex cursor-pointer items-center gap-2 px-3 py-2 text-sm rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-left"
                        >
                            <LogOut class="h-4 w-4" />
                            Sair
                        </button>
                    </div>
                </template>
            </Dropdown>
        </div>
    </header>
</template>