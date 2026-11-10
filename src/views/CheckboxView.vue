<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';

    import Checkbox from '@/components/ui/Checkbox.vue';
    import { ref } from 'vue';

    const itemTrue = ref(true)
    const itemFalse = ref(false)

    const codigo = `\
<script setup>
    import Checkbox from '@/components/ui/Checkbox.vue';
    import { ref } from 'vue';
    const item = ref(true) // true or false
<\/script>
<template>
    <Checkbox id="itemid" v-model="item"/>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex gap-2 p-2 flex-col">
            <div>
                <span>Ativado: </span>
                <Checkbox id="id1" v-model="itemTrue"/>
            </div>
            <div>
                <span>Desativado: </span>
                <Checkbox id="id2" v-model="itemFalse"/>
            </div>
        </div>
    </ComponentPreview>
</template>