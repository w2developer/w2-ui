<!-- App.vue (Exemplo de uso) -->
<script setup>
import ResponsiveTable from '@/components/ui/ResponsiveTable.vue';

// Definição das colunas
const columns = [
    { key: 'id', label: '# ID' },
    { key: 'name', label: 'Nome Completo' },
    { key: 'email', label: 'E-mail' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Ações' }
]

// Dados da tabela
const data = [
    { id: 1, name: 'Wanderson Mateus', email: 'wanderson@exemplo.com', status: 'Ativo' },
    { id: 2, name: 'João Silva', email: 'joao@exemplo.com', status: 'Pendente' }
]
</script>

<template>
    <div class="p-6">
        <ResponsiveTable :headers="columns" :items="data">
            <!-- Customizando apenas a coluna de Status -->
            <template #cell-status="{ item }">
                <span 
                    class="px-2 py-1 text-xs rounded-full"
                    :class="item.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'"
                >
                    {{ item.status }}
                </span>
            </template>

            <!-- Customizando a coluna de Ações -->
            <template #cell-actions="{ item }">
                <button class="text-blue-600 hover:underline">Editar</button>
            </template>
        </ResponsiveTable>
    </div>
</template>