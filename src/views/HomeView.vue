<script setup>
import { ref } from 'vue'
import { ExternalLink, Download } from '@lucide/vue'
import CodeBlock from '@/components/ui/CodeBlock.vue'
import Tabs from '@/components/ui/Tabs.vue'
import TabsList from '@/components/ui/TabsList.vue'
import TabsTrigger from '@/components/ui/TabsTrigger.vue'
import TabsContent from '@/components/ui/TabsContent.vue'

// Importa os arquivos reais da biblioteca como texto para manter os snippets sincronizados
import globalCssRaw from '@/assets/css/global.css?raw'
import cnRaw from '@/utils/cn.js?raw'
import useThemeRaw from '@/composables/useTheme.js?raw'

const repoUrl = 'https://github.com/w2developer/w2-ui'
const downloadZipUrl = 'https://github.com/w2developer/w2-ui/archive/refs/heads/main.zip'

const depsTab = ref('core')
const baseFileTab = ref('global')
const setupTab = ref('main')

const cloneRepoCode = `git clone https://github.com/w2developer/w2-ui.git`

const installCoreCode = `pnpm add tailwindcss @tailwindcss/vite @lucide/vue class-variance-authority clsx tailwind-merge`

const installOptionalCode = `pnpm add vue-router pinia`

const viteConfigCode = `import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})`

const mainJsCode = `import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'

createApp(App).mount('#app')`

const appVueCode = `<script setup>
import { onMounted } from 'vue'
import Toaster from '@/components/ui/Toaster.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
    initTheme()
})
<\/script>

<template>
    <RouterView />
    <Toaster />
</template>`

const usageExampleCode = `<script setup>
import Button from '@/components/ui/Button.vue'
<\/script>

<template>
    <Button>Salvar</Button>
    <Button variant="outline">Cancelar</Button>
</template>`
</script>

<template>
    <div class="mx-auto max-w-4xl space-y-10 pb-12">
        <header class="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div class="space-y-2">
                <h1 class="text-3xl font-bold tracking-tight text-foreground">W2 UI</h1>
                <p class="text-sm text-muted-foreground">
                    Configuração inicial para copiar e utilizar os componentes em um projeto Vue.
                </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <a
                    :href="repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                    <ExternalLink class="h-4 w-4" />
                    GitHub
                </a>
                <a
                    :href="downloadZipUrl"
                    class="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                    <Download class="h-4 w-4" />
                    Baixar ZIP
                </a>
            </div>
        </header>

        <section class="space-y-3">
            <h2 class="text-lg font-semibold text-foreground">1. Repositório</h2>
            <CodeBlock :code="cloneRepoCode" language="bash" />
        </section>

        <section class="space-y-3">
            <h2 class="text-lg font-semibold text-foreground">2. Dependências</h2>
            <Tabs v-model="depsTab">
                <TabsList>
                    <TabsTrigger value="core">Essenciais</TabsTrigger>
                    <TabsTrigger value="optional">Opcionais</TabsTrigger>
                </TabsList>
                <TabsContent value="core" class="mt-3">
                    <CodeBlock :code="installCoreCode" language="bash" />
                </TabsContent>
                <TabsContent value="optional" class="mt-3">
                    <CodeBlock :code="installOptionalCode" language="bash" />
                </TabsContent>
            </Tabs>
        </section>

        <section class="space-y-3">
            <h2 class="text-lg font-semibold text-foreground">3. Vite e alias (@)</h2>
            <CodeBlock :code="viteConfigCode" language="js" />
        </section>

        <section class="space-y-3">
            <h2 class="text-lg font-semibold text-foreground">4. Arquivos base</h2>
            <Tabs v-model="baseFileTab">
                <TabsList>
                    <TabsTrigger value="global">src/assets/css/global.css</TabsTrigger>
                    <TabsTrigger value="cn">src/utils/cn.js</TabsTrigger>
                    <TabsTrigger value="theme">src/composables/useTheme.js</TabsTrigger>
                </TabsList>
                <TabsContent value="global" class="mt-3">
                    <CodeBlock :code="globalCssRaw" language="css" />
                </TabsContent>
                <TabsContent value="cn" class="mt-3">
                    <CodeBlock :code="cnRaw" language="js" />
                </TabsContent>
                <TabsContent value="theme" class="mt-3">
                    <CodeBlock :code="useThemeRaw" language="js" />
                </TabsContent>
            </Tabs>
        </section>

        <section class="space-y-3">
            <h2 class="text-lg font-semibold text-foreground">5. Inicialização</h2>
            <Tabs v-model="setupTab">
                <TabsList>
                    <TabsTrigger value="main">src/main.js</TabsTrigger>
                    <TabsTrigger value="app">src/App.vue</TabsTrigger>
                </TabsList>
                <TabsContent value="main" class="mt-3">
                    <CodeBlock :code="mainJsCode" language="js" />
                </TabsContent>
                <TabsContent value="app" class="mt-3">
                    <CodeBlock :code="appVueCode" language="vue" />
                </TabsContent>
            </Tabs>
        </section>

        <section class="space-y-3">
            <h2 class="text-lg font-semibold text-foreground">6. Uso</h2>
            <CodeBlock :code="usageExampleCode" language="vue" />
        </section>
    </div>
</template>