<script setup>
import { ref } from 'vue';
import Tabs from '@/components/ui/Tabs.vue';
import TabsList from '@/components/ui/TabsList.vue';
import TabsTrigger from '@/components/ui/TabsTrigger.vue';
import TabsContent from '@/components/ui/TabsContent.vue';
import CodeBlock from '@/components/ui/CodeBlock.vue';
import { cn } from '@/utils/cn';

const props = defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'vue'
    },
    class: {
        type: [String, Object, Array],
        default: ''
    }
});

const currentTab = ref('preview');
</script>

<template>
    <div :class="cn('w-full flex flex-col space-y-4', props.class)">
        <Tabs v-model="currentTab" class="w-full">
            <!-- Abas -->
            <TabsList class="inline-flex w-auto mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Código</TabsTrigger>
            </TabsList>
            
            <!-- Visualização -->
            <TabsContent value="preview" class="p-6 border border-border rounded-lg flex items-center justify-center min-h-[200px] bg-background">
                <slot />
            </TabsContent>
            
            <!-- Código -->
            <TabsContent value="code">
                <CodeBlock :language="language" :code="code" class="w-full" />
            </TabsContent>
        </Tabs>
    </div>
</template>