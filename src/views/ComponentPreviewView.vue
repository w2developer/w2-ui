<script setup>
import ComponentPreview from '@/components/ui/ComponentPreview.vue';
import Button from '@/components/ui/Button.vue';

const previewCode = `
<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Button from '@/components/ui/Button.vue';

    const codigo = \`
        <div class="flex gap-4">
            <Button variant="default">Confirmar</Button>
            <Button variant="outline">Cancelar</Button>
        </div>\`;
<\/script>
<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex gap-4">
            <Button variant="default">Confirmar</Button>
            <Button variant="outline">Cancelar</Button>
        </div>
    </ComponentPreview>
</template>`;
</script>

<template>
    <div>
        <ComponentPreview :code="previewCode" language="vue">
            <div class="flex flex-col items-center justify-center p-8 bg-muted/30 border border-dashed border-border rounded-lg w-full">
                <p class="text-sm text-muted-foreground mb-4">O conteúdo dentro do slot aparecerá aqui.</p>
                <div class="flex gap-4">
                    <Button variant="default">Confirmar</Button>
                    <Button variant="outline">Cancelar</Button>
                </div>
            </div>
        </ComponentPreview>
    </div>
</template>