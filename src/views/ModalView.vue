<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Modal from '@/components/ui/Modal.vue';
    import Button from '@/components/ui/Button.vue';

    const isModalOpenSm = ref(false);
    const isModalOpenMd = ref(false);
    const isModalOpenLg = ref(false);
    const isModalOpenXl = ref(false);
    const isModalOpenFull = ref(false);

    const codigo = `\
<script setup>
    import { ref } from 'vue';
    import Modal from '@/components/ui/Modal.vue';
    import Button from '@/components/ui/Button.vue';
    const isModalOpen = ref(false);
<\/script>
<template>
    <Button @click="isModalOpen = true">Modal SM</Button>
    // variants: sm | md | lg | xl | full
    <Modal v-model="isModalOpen" description="Modal" size="sm">
        <p></p>
        <template #footer>
            <Button @click="isModalOpen = false" variant="">Cancelar</Button>
            <Button @click="function" variant="">Confirmar</Button>
        </template>
    </Modal>
<\/template>`;
</script>

<template>

    <ComponentPreview :code="codigo" language="vue">
        <div class="flex p-2 gap-2 flex-wrap">
            <Button @click="isModalOpenSm = true" variant="outline">Modal SM</Button>
            <Button @click="isModalOpenMd = true" variant="outline">Modal MD</Button>
            <Button @click="isModalOpenLg = true" variant="outline">Modal LG</Button>
            <Button @click="isModalOpenXl = true" variant="outline">Modal XL</Button>
            <Button @click="isModalOpenFull = true" variant="outline">Modal FULL</Button>
        </div>
    </ComponentPreview>
    
    <!-- Modal SM -->
    <Modal v-model="isModalOpenSm" description="Modal SM" size="sm">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim voluptatum veritatis, earum eius iusto consequatur consequuntur molestiae quos beatae.</p>
        <template #footer>
            <Button @click="isModalOpenSm = false" variant="outline">Cancelar</Button>
            <Button @click="isModalOpenSm = false" variant="default">Confirmar</Button>
        </template>
    </Modal>

    <!-- Modal MD -->
    <Modal v-model="isModalOpenMd" description="Modal MD" size="md">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim voluptatum veritatis, earum eius iusto consequatur consequuntur molestiae quos beatae.</p>
        <template #footer>
            <Button @click="isModalOpenMd = false" variant="outline">Cancelar</Button>
            <Button @click="isModalOpenMd = false" variant="default">Confirmar</Button>
        </template>
    </Modal>

    <!-- Modal LG -->
    <Modal v-model="isModalOpenLg" description="Modal LG" size="lg">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim voluptatum veritatis, earum eius iusto consequatur consequuntur molestiae quos beatae.</p>
        <template #footer>
            <Button @click="isModalOpenLg = false" variant="outline">Cancelar</Button>
            <Button @click="isModalOpenLg = false" variant="default">Confirmar</Button>
        </template>
    </Modal>

    <!-- Modal XL -->
    <Modal v-model="isModalOpenXl" description="Modal XL" size="xl">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim voluptatum veritatis, earum eius iusto consequatur consequuntur molestiae quos beatae.</p>
        <template #footer>
            <Button @click="isModalOpenXl = false" variant="outline">Cancelar</Button>
            <Button @click="isModalOpenXl = false" variant="default">Confirmar</Button>
        </template>
    </Modal>

    <!-- Modal FULL -->
    <Modal v-model="isModalOpenFull" description="Modal FULL" size="full">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim voluptatum veritatis, earum eius iusto consequatur consequuntur molestiae quos beatae.</p>
        <template #footer>
            <Button @click="isModalOpenFull = false" variant="outline">Cancelar</Button>
            <Button @click="isModalOpenFull = false" variant="default">Confirmar</Button>
        </template>
    </Modal>
</template>