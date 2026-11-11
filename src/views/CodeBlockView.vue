<script setup>
    import CodeBlock from '@/components/ui/CodeBlock.vue';
    import Card from '@/components/ui/Card.vue';
    const codigo = `\
<script setup>
    import CodeBlock from '@/components/ui/CodeBlock.vue';
    const codigo = 'console.log("Olá, Mundo!")';
<\/script>

<template>
    <CodeBlock :code="codigo" language="javascript"></CodeBlock>
<\/template>`;

</script>

<template>
    <div class="flex p-2 w-full">
        <CodeBlock :code="codigo" language="vue" class="w-full"></CodeBlock>
    </div>

    <div class="flex p-2 w-full"></div>

    <div class="flex p-2 w-full">
        <Card class="felx p-4 w-full overflow-x-scroll">
<pre>
const codigo = `\
&lt;script setup>
    import CodeBlock from '@/components/ui/CodeBlock.vue';
    const codigo = 'console.log("Olá, Mundo!")';
<\/script>
<&lt;template>
    &lt;CodeBlock :code="codigo" language="javascript"><&lt;/CodeBlock>
<\/template>`;
</pre>
        </Card>
    </div>
</template>