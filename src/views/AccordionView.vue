<script setup>
import ComponentPreview from '@/components/ui/ComponentPreview.vue';
import Accordion from '@/components/ui/Accordion.vue';
import AccordionItem from '@/components/ui/AccordionItem.vue';
import AccordionTrigger from '@/components/ui/AccordionTrigger.vue';
import AccordionContent from '@/components/ui/AccordionContent.vue';
import { ref } from 'vue';

const accordionState = ref('item-1');
// const accordionState = ref(null);

const accordionCode = `
<script setup>
    import { ref } from 'vue';
    import Accordion from '@/components/ui/Accordion.vue';
    import AccordionItem from '@/components/ui/AccordionItem.vue';
    import AccordionTrigger from '@/components/ui/AccordionTrigger.vue';
    import AccordionContent from '@/components/ui/AccordionContent.vue';

    const state = ref('item-1');
<\/script>

<template>
    <Accordion v-model="state">
        <AccordionItem value="item-1">
            <AccordionTrigger>Título 1</AccordionTrigger>
            <AccordionContent>Conteúdo 1</AccordionContent>
        </AccordionItem>
    </Accordion>
</template>`;
</script>

<template>
    <div>
        <ComponentPreview :code="accordionCode" language="vue">
            
            <div class="w-full">
                <Accordion v-model="accordionState">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Exemplo 1</AccordionTrigger>
                        <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corporis?</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Exemplo 2</AccordionTrigger>
                        <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            
        </ComponentPreview>
    </div>
</template>