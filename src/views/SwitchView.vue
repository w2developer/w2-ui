<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Switch from '@/components/ui/Switch.vue';
    import Badge from '@/components/ui/Badge.vue';

    const isActive = ref(false)

    const codigo = `\
<script setup>
    import { ref } from 'vue';
    import Switch from '@/components/ui/Switch.vue';
    const isActive = ref(false)
<\/script>
<template>
    <Switch v-model="isActive" />
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex flex-col p-2 gap-2">
            <Badge :variant="isActive ? 'default' : 'destructive'">
                {{ isActive }}
            </Badge>
            <Switch v-model="isActive" />
        </div>
    </ComponentPreview>
</template>