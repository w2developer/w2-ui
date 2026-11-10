<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Button from '@/components/ui/Button.vue';

     const codigoVariant = `\
<script setup>
    import Button from '@/components/ui/Button.vue';
<\/script>
<template>
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="sucess">Sucess</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
<\/template>`;

     const codigoSize = `
<script setup>
    import Button from '@/components/ui/Button.vue';
<\/script>
<template>
    <Button variant="default" size="default">Size</Button>
    <Button variant="destructive" size="sm">Size</Button>
    <Button variant="sucess" size="lg">Size</Button>
    <Button variant="outline" size="icon">Size</Button>
<\/template>`;
</script>

<template>
    <div class="flex gap-4 flex-col p-2">
        <ComponentPreview :code="codigoVariant" language="vue">
            <div class="flex gap-4 flex-wrap">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="sucess">Sucess</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </div>
        </ComponentPreview>
        <ComponentPreview :code="codigoSize" language="vue">
            <div class="flex gap-4 flex-wrap items-center">
                <Button variant="default" size="default">Size</Button>
                <Button variant="destructive" size="sm">Size</Button>
                <Button variant="sucess" size="lg">Size</Button>
                <Button variant="outline" size="icon">Size</Button>
            </div>
        </ComponentPreview>
    </div>
</template>