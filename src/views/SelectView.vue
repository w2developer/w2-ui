<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Select from '@/components/ui/Select.vue';

    const optionSelected = ref('')

    const op = [
		{ label: 'Opção 01', value: '01' },
		{ label: 'Opção 02', value: '02' },
		{ label: 'Opção 03', value: '03' }
	]

    const codigo = `\
<script setup>
    import { ref } from 'vue';
    import Select from '@/components/ui/Select.vue';
    const optionSelected = ref('')
    const op = [
		{ label: '', value: '' }
	]
<\/script>
<template>
    <Select v-model="optionSelected" :options="op" placeholder=""></Select>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex p-2">
            <Select v-model="optionSelected" :options="op" placeholder="Escolha uma Opção"></Select>
        </div>
    </ComponentPreview>
</template>