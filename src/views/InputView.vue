<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Input from '@/components/ui/Input.vue';

    const text = ref('')

    const codigo = `\
<script setup>
    import Input from '@/components/ui/Input.vue';
<\/script>
<template>
    <Input type="" disabled placeholder="" v-model=""/>
<\/template>`;
</script>
<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex flex-col gap-4">
            <span>Texto: {{ text }}</span>
            <Input placeholder="Digite aqui..." v-model="text"/>
        </div>
    </ComponentPreview>
</template>