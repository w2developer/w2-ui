<script setup>
import { ref } from 'vue';
import { Copy, Check } from '@lucide/vue';
import { cn } from '@/utils/cn';

const props = defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: ''
    },
    class: {
        type: [String, Object, Array],
        default: ''
    }
});

const isCopied = ref(false);

// Copia o texto e altera estado
const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.code);
        isCopied.value = true;
        
        setTimeout(() => {
            isCopied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Erro:', err);
    }
};
</script>

<template>
    <div :class="cn('relative rounded-lg bg-muted text-foreground border border-border overflow-hidden', props.class)">
        <!-- Cabeçalho -->
        <div v-if="language" class="flex items-center px-4 py-2 border-b border-border text-xs text-muted-foreground font-mono">
            {{ language }}
        </div>
        
        <!-- Botão -->
        <button 
            @click="copyToClipboard"
            class="absolute right-2 top-2 p-1.5 rounded-md hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Copiar"
            title="Copiar"
        >
            <Check v-if="isCopied" class="w-4 h-4 text-primary" />
            <Copy v-else class="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
        </button>
        
        <!-- Código -->
        <div class="p-4 overflow-x-auto">
            <pre><code class="text-sm font-mono leading-relaxed">{{ code }}</code></pre>
        </div>
    </div>
</template>