import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Recebe o array de navegação como parâmetro
export function useBreadcrumb(navigation) {
    const route = useRoute()

    const breadcrumbItems = computed(() => {
        const basePath = '/'
        const items = [{ label: 'Início', to: basePath, icon: 'home' }]
        const currentPath = route.path
        let found = false

        // Busca recursiva na árvore de navegação
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

        // Fallback: Pega a última parte da URL se não achar na navegação
        if (!found && currentPath !== basePath) {
            const parts = currentPath.split('/').filter(Boolean)
            if (parts.length > 0) {
                let fallbackLabel = parts[parts.length - 1]
                // Opcional: Remove hífens e deixa a primeira letra maiúscula
                fallbackLabel = fallbackLabel.replace(/-/g, ' ')
                fallbackLabel = fallbackLabel.charAt(0).toUpperCase() + fallbackLabel.slice(1)
                
                items.push({ label: fallbackLabel })
            }
        }

        return items
    })

    return { breadcrumbItems }
}