
<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Badge from '@/components/ui/Badge.vue';

    const codigo = `\
<script setup>
    import Badge from '@/components/ui/Badge.vue';
<\/script>
<template>
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="ghost">Ghost</Badge>
<\/template>`;

</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="ghost">Ghost</Badge>
        </div>
    </ComponentPreview>
</template>