<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';

    import Card from '@/components/ui/Card.vue';
    import CardHeader from '@/components/ui/CardHeader.vue';
    import CardContent from '@/components/ui/CardContent.vue';

     const codigo = `\
<script setup>
    import Card from '@/components/ui/Card.vue';
    import CardHeader from '@/components/ui/CardHeader.vue';
    import CardContent from '@/components/ui/CardContent.vue';
<\/script>
<template>
    <Card>
        <CardHeader></CardHeader>
        <CardContent></CardContent>
    </Card>    
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div>
            <Card>
                <CardHeader class=" border-b border-zinc-200">
                    <h2 class="font-bold">Card Header</h2>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Card Content 1</li>
                        <li>Card Content 1</li>
                    </ul>
                </CardContent>
            </Card>    
        </div>
    </ComponentPreview>
</template>