<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Skeleton from '@/components/ui/Skeleton.vue';

    const isLoading = ref(true);

    const codigo = `\
<script setup>
    import { ref } from 'vue';
    import Skeleton from '@/components/ui/Skeleton.vue';
    const isLoading = ref(true);
<\/script>
<template>
    <div class="flex p-2">
        <div v-if="isLoading" class="flex gap-4">
            <Skeleton class="w-12 h-12 rounded-full"/>
            <div class="space-y-2">
                <Skeleton class="w-32 h-4"/>
                <Skeleton class="w-24 h-4"/>
            </div>
        </div>
    </div>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex p-2">
            <div v-if="isLoading" class="flex gap-4">
                <Skeleton class="w-12 h-12 rounded-full"/>
                <div class="space-y-2">
                    <Skeleton class="w-32 h-4"/>
                    <Skeleton class="w-24 h-4"/>
                </div>
            </div>
        </div>
    </ComponentPreview>
</template>