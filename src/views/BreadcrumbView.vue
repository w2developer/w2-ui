<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Breadcrumb from '@/components/ui/Breadcrumb.vue'
    import { useBreadcrumb } from '@/composables/useBreadcrumb'

    const navigation = [
        { title: 'Início', to: '/', icon: 'home' },
        { title: 'Breadcrumb', to: '/breadcrumb' }
    ]

    const { breadcrumbItems } = useBreadcrumb(navigation)

    const codigo = `\
<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Breadcrumb from '@/components/ui/Breadcrumb.vue'
    import { useBreadcrumb } from '@/composables/useBreadcrumb'

    const navigation = [
        { title: 'Início', to: '/', icon: 'home' },
        { title: 'Breadcrumb', to: '/breadcrumb' }
    ]

    const { breadcrumbItems } = useBreadcrumb(navigation)

<\/script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex gap-4">
            <Breadcrumb :items="breadcrumbItems" />
        </div>
    </ComponentPreview>
<\/template>
    `;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex gap-4">
            <Breadcrumb :items="breadcrumbItems" />
        </div>
    </ComponentPreview>
</template>