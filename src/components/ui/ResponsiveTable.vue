<!-- ResponsiveTable.vue -->
<script setup>

defineProps({
    headers: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="w-full">
        <div class="block md:hidden space-y-4">
            <div 
                v-for="(item, index) in items" 
                :key="index" 
                class="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 shadow-sm"
            >
                <div 
                    v-for="header in headers" 
                    :key="header.key" 
                    class="flex flex-col py-2 bg-background border-b last:border-0 border-neutral-200 dark:border-neutral-800"
                >
                    <span class="text-xs font-semibold text-foreground mb-1">
                        {{ header.label }}
                    </span>
                    <span class="text-sm text-foreground">
                        <slot :name="`cell-${header.key}`" :item="item">
                            {{ item[header.key] }}
                        </slot>
                    </span>
                </div>
            </div>
        </div>

        <!-- Layout Desktop: Tabela -->
        <div class="hidden md:block overflow-x-auto border border-neutral-300 rounded-lg shadow-sm">
            <table class="w-full text-sm text-left">
                <thead class="bg-gray-50 border-b border-neutral-300">
                    <tr>
                        <th 
                            v-for="header in headers" 
                            :key="header.key" 
                            class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                        >
                            {{ header.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="(item, index) in items" 
                        :key="index" 
                        class="border-b last:border-0 border-neutral-300 bg-white hover:bg-gray-50"
                    >
                        <td 
                            v-for="header in headers" 
                            :key="header.key" 
                            class="px-6 py-4 cursor-cell"
                        >
                            <!-- Slot dinâmico para customização da célula -->
                            <slot :name="`cell-${header.key}`" :item="item">
                                {{ item[header.key] }}
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>