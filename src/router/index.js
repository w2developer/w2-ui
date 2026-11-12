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
                    component: () => import('@/views/BreadcrumbView.vue')
                },
                {
                    path: 'button',
                    name: 'Button',
                    component: () => import('@/views/ButtonView.vue')
                },
                {
                    path: 'card',
                    name: 'Card',
                    component: () => import('@/views/CardView.vue')
                },
                {
                    path: 'checkbox',
                    name: 'Checkbox',
                    component: () => import('@/views/CheckboxView.vue')
                },
                {
                    path: 'code-block',
                    name: 'CodeBlock',
                    component: () => import('@/views/CodeBlockView.vue')
                },
                {
                    path: 'command-menu',
                    name: 'CommandMenu',
                    component: () => import('@/views/CommandMenuView.vue')
                },
                {
                    path: 'component-preview',
                    name: 'ComponentPreview',
                    component: () => import('@/views/ComponentPreviewView.vue')
                },
                {
                    path: 'dropdown',
                    name: 'Dropdown',
                    component: () => import('@/views/DropdownView.vue')
                },
                {
                    path: 'form-group',
                    name: 'FormGroup',
                    component: () => import('@/views/FormGroupView.vue')
                },
                {
                    path: 'input',
                    name: 'Input',
                    component: () => import('@/views/InputView.vue')
                },
                {
                    path: 'label',
                    name: 'Label',
                    component: () => import('@/views/LabelView.vue')
                },
                {
                    path: 'modal',
                    name: 'Modal',
                    component: () => import('@/views/ModalView.vue')
                },
                {
                    path: 'responsive-table',
                    name: 'ResponsiveTable',
                    component: () => import('@/views/ResponsiveTableView.vue')
                },
                {
                    path: 'select',
                    name: 'Select',
                    component: () => import('@/views/SelectView.vue')
                },
                {
                    path: 'skeleton',
                    name: 'Skeleton',
                    component: () => import('@/views/SkeletonView.vue')
                },
                {
                    path: 'switch',
                    name: 'Switch',
                    component: () => import('@/views/SwitchView.vue')
                },
                {
                    path: 'table',
                    name: 'Table',
                    component: () => import('@/views/TableView.vue')
                },
                {
                    path: 'tabs',
                    name: 'Tabs',
                    component: () => import('@/views/TabsView.vue')
                },
                {
                    path: 'tabs-content',
                    name: 'TabsContent',
                    component: () => import('@/views/TabsContentView.vue')
                },
                {
                    path: 'tabs-list',
                    name: 'TabsList',
                    component: () => import('@/views/TabsListView.vue')
                },
                {
                    path: 'tabs-trigger',
                    name: 'TabsTrigger',
                    component: () => import('@/views/TabsTriggerView.vue')
                },
                {
                    path: 'textarea',
                    name: 'Textarea',
                    component: () => import('@/views/TextareaView.vue')
                },
                {
                    path: 'toaster',
                    name: 'Toaster',
                    component: () => import('@/views/ToasterView.vue')
                },
                {
                    path: 'tooltip',
                    name: 'Tooltip',
                    component: () => import('@/views/TooltipView.vue')
                }
            ]
        },
    ],
})

export default router
