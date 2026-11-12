<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Input from '@/components/ui/Input.vue';
    import Label from '@/components/ui/Label.vue';

    const text = ref('')

    const codigo = `\
<script setup>
    import Label from '@/components/ui/Label.vue';
<\/script>
<template>
    <Label>{{ text }}</Label>
<\/template>`;
</script>
<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex flex-col gap-4">
            <Label>Label: {{ text }}</Label>
            <Input placeholder="Digite aqui..." v-model="text"/>
        </div>
    </ComponentPreview>
</template>