<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Dropdown from '@/components/ui/Dropdown.vue';
    import Button from '@/components/ui/Button.vue';
    import { Settings } from '@lucide/vue';

    const codigo = `\
<script setup>
    import Dropdown from '@/components/ui/Dropdown.vue';
<\/script>
<template>
    <Dropdown>
        <template #trigger>
            // Abrir (ex: button)
        </template>
        <template #content>
            // Centeúdo (ex: div + button)
        </template>
    </Dropdown>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">

        <div class="flex p-2">
            <Dropdown>
                <template #trigger>
                    <Button variant="default">
                        Abrir Dropdown
                    </Button>
                </template>
                <template #content>
                    <div class="flex flex-col gap-2 p-2">
                        <Button variant="outline" class="flex gap-2 justify-start">
                            <Settings size="18"/> Opção 1
                        </Button>
                        <Button variant="outline" class="flex gap-2 justify-start">
                            <Settings size="18"/> Opção 2
                        </Button>
                        <Button variant="outline" class="flex gap-2 justify-start">
                            <Settings size="18"/> Opção 3
                        </Button>
                    </div>
                </template>
            </Dropdown>
        </div>

    </ComponentPreview>
</template>