<script setup>
    import CommandMenu from '@/components/ui/CommandMenu.vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Badge from '@/components/ui/Badge.vue';

    const codigo = `
<script setup>
    import CommandMenu from '@/components/ui/CommandMenu.vue';
<\/script>
<template>
    <CommandMenu></CommandMenu>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex p-2">
            <Badge variant="outline">
                <code>Ctrl + K</code>
            </Badge>
        </div>
    </ComponentPreview>
    <CommandMenu></CommandMenu>
</template>