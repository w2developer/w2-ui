<script setup>
    import { ref, computed } from 'vue';
    import { cn } from '@/utils/cn';
    import { getInitials, getAvatarColor } from '@/utils/formatters';

    const props = defineProps({
        src: { type: String, default: '' },
        alt: { type: String, default: 'Avatar' },
        name: { type: String, default: '' },
        initials: { type: String, default: 'W2' },
        class: { type: [String, Object, Array], default: '' },
        
        // Prop de tamanho
        size: { 
            type: String, 
            default: 'md',
            validator: (val) => ['sm', 'md', 'lg', 'xl'].includes(val)
        },
        
        // Prop de estilo/destaque
        variant: { 
            type: String, 
            default: 'default',
            validator: (val) => ['default', 'bordered', 'ring'].includes(val)
        },

        // Prop de formato
        shape: {
            type: String,
            default: 'circle',
            validator: (val) => ['circle', 'square'].includes(val)
        }
    });

    const imageError = ref(false);

    const onImageError = () => {
        imageError.value = true;
    };

    // Usa as iniciais do nome se existir, senão usa a prop initials
    const textoIniciais = computed(() => {
        if (props.name) return getInitials(props.name);
        return props.initials;
    });

    // Gera cor dinâmica se tiver nome, senão usa cor padrão do tema
    const classesCor = computed(() => {
        if (props.name) return getAvatarColor(props.name);
        return 'bg-muted text-foreground';
    });

    // Dicionários de classes Tailwind para as variantes
    const sizeClasses = {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-14 w-14 text-base',
        xl: 'h-20 w-20 text-xl'
    };

    const variantClasses = {
        default: 'border-none',
        bordered: 'border-2 border-border',
        ring: 'ring-2 ring-primary ring-offset-2 ring-offset-background'
    };

    const shapeClasses = {
        circle: 'rounded-full',
        square: 'rounded-lg'
    };
</script>

<template>
    <div
        :class="
            cn(
                'relative flex shrink-0 overflow-hidden bg-muted',
                sizeClasses[props.size],
                variantClasses[props.variant],
                shapeClasses[props.shape],
                props.class
            )
        "
    >
        <!-- Imagem Real -->
        <img
            v-if="src && !imageError"
            :src="src"
            :alt="alt || name"
            @error="onImageError"
            class="aspect-square h-full w-full object-cover"
        />

        <!-- Fallback (Iniciais + Cor) -->
        <div
            v-else
            :class="
                cn(
                    'flex h-full w-full items-center justify-center font-semibold',
                    shapeClasses[props.shape],
                    classesCor
                )
            "
        >
            {{ textoIniciais }}
        </div>
    </div>
</template>