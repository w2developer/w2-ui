
<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Avatar from '@/components/ui/Avatar.vue';

    const codigo = `\
<script setup>
    import Avatar from '@/components/ui/Avatar.vue';
<\/script>
<template>
    <Avatar size="xl" variant="default" initials="XL"/>
    <Avatar size="lg" variant="bordered" initials="LG"/>
    <Avatar size="md" variant="ring" initials="MD"/>
    <Avatar size="sm" variant="ring" shape="square" initials="SM"/>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex flex-wrap gap-4 items-center">
            <Avatar size="xl" variant="default" initials="XL"/>
            <Avatar size="lg" variant="bordered" initials="LG"/>
            <Avatar size="md" variant="ring" initials="MD"/>
            <Avatar size="sm" variant="ring" shape="square" initials="SM"/>
        </div>
    </ComponentPreview>
</template>