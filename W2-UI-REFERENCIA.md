# W2 UI — Referência técnica para assistentes de IA

> Snapshot de referência baseado no repositório `https://github.com/w2developer/w2-ui`, branch `main`, inspecionado em 17/11/2026. Esta referência descreve os arquivos encontrados nessa revisão. Se o repositório mudar, confirme os arquivos atuais antes de usar APIs que possam ter sido alteradas.

## 1. Objetivo e regra de uso

W2 UI é uma biblioteca pessoal de componentes Vue 3, mantida como código-fonte dentro do projeto. Os componentes são importados diretamente por caminho de arquivo; não presumir que exista um pacote publicado para instalação via npm.

**Regra de autorização:** não use W2 UI automaticamente em projetos ou solicitações comuns. Utilize esta biblioteca somente quando Mateus pedir explicitamente seu uso ou ativar esta habilidade para a tarefa. A existência deste documento, por si só, não autoriza o uso dos componentes.

Quando autorizada:

1. Verifique primeiro se já existe um componente adequado nesta referência e no repositório.
2. Use somente propriedades, variantes, eventos, modelos e slots confirmados pelo código-fonte.
3. Não invente APIs nem adapte silenciosamente nomes de propriedades.
4. Se a informação necessária não estiver documentada ou houver divergência, consulte o arquivo `.vue` correspondente no GitHub ou solicite o arquivo atualizado.
5. Se não existir um componente adequado, apresente as opções: compor com componentes existentes, criar um componente local no projeto consumidor ou propor um novo componente para a biblioteca. Explique a recomendação e aguarde aprovação antes de criar/alterar a biblioteca.
6. Não modifique o repositório W2 UI sem pedido explícito.

## 2. Stack e estrutura confirmadas

Tecnologias declaradas em `package.json` e `README.md`:

- Vue `^3.5.40`, Composition API e `<script setup>`.
- JavaScript (projeto configurado como ES modules).
- Tailwind CSS `^4.3.3` com `@tailwindcss/vite` `^4.3.3`.
- Vite `^8.1.5` e `@vitejs/plugin-vue` `^6.0.8`.
- `@lucide/vue` `^1.35.0`.
- `class-variance-authority` `^0.7.1`.
- `clsx` `^2.1.1` e `tailwind-merge` `^3.6.0`.
- Pinia `^4.0.2` e Vue Router `^5.2.0`.
- Supabase JS `^2.116.0`.

Estrutura principal observada:

```text
src/
    assets/css/global.css
    components/
        layout/
            AppLayout.vue
            Navbar.vue
            Sidebar.vue
            SidebarItem.vue
        ui/
            Accordion.vue
            AccordionContent.vue
            AccordionItem.vue
            AccordionTrigger.vue
            Avatar.vue
            Badge.vue
            Breadcrumb.vue
            Button.vue
            Card.vue
            CardContent.vue
            CardHeader.vue
            Checkbox.vue
            CodeBlock.vue
            CommandMenu.vue
            ComponentPreview.vue
            Dropdown.vue
            FormGroup.vue
            Input.vue
            Label.vue
            Modal.vue
            ResponsiveTable.vue
            Select.vue
            Skeleton.vue
            Switch.vue
            Table.vue
            TableBody.vue
            TableCell.vue
            TableHead.vue
            TableHeader.vue
            TableRow.vue
            Tabs.vue
            TabsContent.vue
            TabsList.vue
            TabsTrigger.vue
            Textarea.vue
            Toaster.vue
            Tooltip.vue
    composables/
        useBreadcrumb.js
        useBrowserNotification.js
        useClickOutside.js
        useCommandMenu.js
        useTheme.js
        useToast.js
    utils/
        cn.js
        constants.js
        dateHelpers.js
        formatters.js
        scheduleHelpers.js
        chatFormatters.js
    layouts/
        MainLayout.vue
    router/index.js
```

Os caminhos acima são relativos a `src/`. Existem 37 arquivos de componentes em `src/components/ui/` na revisão indicada.

## 3. Importação e utilitários centrais

Importe componentes diretamente, por exemplo:

```vue
<script setup>
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Card from '@/components/ui/Card.vue'
</script>
```

O alias `@` aponta para `src/` conforme `vite.config.js`.

### `cn()` — `src/utils/cn.js`

```js
import { cn } from '@/utils/cn'
```

Assinatura: `cn(...inputs)`. Combina classes com `clsx` e resolve conflitos de utilitários Tailwind com `tailwind-merge`. Componentes que aceitam `class` normalmente passam a classe recebida por `cn()` junto às classes-base.

Não substitua `cn()` por outra função sem necessidade e sem verificar o padrão do projeto.

## 4. Tema e tokens CSS

Arquivo principal: `src/assets/css/global.css`.

- Importa Tailwind com `@import 'tailwindcss';`.
- Define `@custom-variant dark (&:where(.dark, .dark *));`; o modo escuro é ativado pela classe `.dark` no elemento HTML.
- Usa `@theme` para expor tokens CSS como `--color-background`, `--color-foreground`, `--color-primary`, `--color-primary-foreground`, `--color-muted`, `--color-muted-foreground`, `--color-border`, `--color-ring` e `--radius-md`.
- Os valores são alimentados por variáveis CSS de `:root` e `.dark`.
- `useTheme()` administra a classe `.dark` e grava a preferência em `localStorage` na chave `w2_tema`.

Preserve os tokens do tema ao compor novas telas. Não introduza uma paleta paralela sem solicitação.

## 5. Catálogo de componentes — APIs verificadas

As propriedades abaixo são as declaradas explicitamente em cada arquivo. Atributos HTML adicionais podem ser encaminhados ao elemento raiz pelo comportamento padrão do Vue, mas não devem ser tratados como props customizadas documentadas.

### Ações, formulários e feedback

#### `Button.vue`

- Props: `variant` (default `default`), `size` (default `default`), `as` (default `button`), `class` (default vazio).
- Variantes de `variant` definidas no código: `default`, `destructive`, `sucess`, `outline`, `ghost`.
- Variantes de `size`: `default`, `sm`, `lg`, `icon`.
- Renderiza o elemento indicado por `as` usando `<component :is="as">`.
- Conteúdo: slot padrão.
- **Atenção:** o identificador no código é escrito `sucess` (um único c). Não presumir que `success` funcione para Button.

#### `Input.vue`

- `v-model`: String ou Number; default `''`.
- Props: `type` (default `text`), `class`, `disabled` (false), `error` (false).
- É renderizado como `<input>` e aceita atributos HTML nativos adicionais por fallthrough.
- Não possui slot de conteúdo.

#### `Textarea.vue`

- `v-model`: String ou Number; default `''`.
- Props: `class`, `disabled` (false), `error` (false).
- É renderizado como `<textarea>` e aceita atributos HTML nativos adicionais por fallthrough.

#### `Select.vue`

- `v-model`: String ou Number; default `''`.
- Props: `options` (Array obrigatório; default `[]`), `placeholder` (default `Selecione uma opção`), `class` (String/Array/Object), `disabled` (false), `error` (false).
- Cada item de `options` deve ter o formato `{ label, value }`.
- O menu é construído internamente e teleportado para `body`.
- **Não há slot documentado para fornecer elementos `<option>`.** Não usar o exemplo antigo com `<option>` como se fosse a API atual.

#### `Checkbox.vue`

- `v-model`: Boolean; default `false`.
- Props: `id`, `disabled` (false), `class`.
- Implementado como `<button role="checkbox">`, com `aria-checked`.
- Não possui slot de label; associe um `Label` ou `<label>` no consumidor conforme o caso.

#### `Switch.vue`

- `v-model`: Boolean; default `false`.
- Props: `id`, `disabled` (false), `variant` (default `default`), `class`.
- Variantes implementadas: `default`, `violet`, `emerald`, `amber`; variantes desconhecidas caem no estilo `default`.
- Implementado como botão com `role="switch"` e `aria-checked`.

#### `FormGroup.vue`

- Props: `label` (String obrigatório), `id` (''), `description` (''), `error` ('').
- Slot padrão: conteúdo do controle, normalmente `Input`, `Select` ou `Textarea`.
- Renderiza `Label`, descrição e mensagem de erro. Quando `error` está preenchido, substitui a descrição.

#### `Label.vue`

- Props: `class` e `for` (ambos default vazio).
- Slot padrão.

#### `Badge.vue`

- Props: `variant` (default `default`) e `class`.
- Variantes: `default`, `secondary`, `destructive`, `outline`, `success`, `ghost`.
- Slot padrão.
- `success` está documentado no código para Badge; não confundir com a grafia `sucess` de Button.

#### `Avatar.vue`

- Props: `src` (''), `alt` (`Avatar`), `name` (''), `initials` (`W2`), `class` (String/Object/Array), `size` (`md`), `variant` (`default`), `shape` (`circle`).
- `size`: `sm`, `md`, `lg`, `xl`.
- `variant`: `default`, `bordered`, `ring`.
- `shape`: `circle`, `square`.
- Se a imagem falhar ou não existir, mostra iniciais. `name` alimenta `getInitials()` e `getAvatarColor()`.

#### `Skeleton.vue`

- Prop: `class` (default vazio).
- Renderiza um `div` com `animate-pulse`, `rounded-md` e `bg-muted`.

#### `CodeBlock.vue`

- Props: `code` (String obrigatório), `language` (''), `class` (String/Object/Array).
- Mostra o texto do código e oferece cópia para clipboard.
- Não executa nem destaca sintaxe do código no próprio componente.

#### `ComponentPreview.vue`

- Props: `code` (String obrigatório), `language` (default `vue`), `class` (String/Object/Array).
- Slot padrão: conteúdo de preview.
- Possui abas internas `Preview` e `Código`; usa `Tabs` e `CodeBlock`.

#### `Tooltip.vue`

- Props: `content` (String obrigatório), `position` (default `top`).
- Posições implementadas: `top`, `bottom`, `right`, `left`.
- Slot padrão: elemento acionador.
- Abre em hover/focus e é teleportado para `body`.

#### `Toaster.vue`

- Não declara props nem slots.
- Consome `useToast()` e apresenta notificações globais. O layout principal `AppLayout.vue` já inclui um `<Toaster />`.
- Variantes visuais reconhecidas: `default`, `success`, `destructive`, `warning`.
- Montar o Toaster em um ponto global da aplicação; evitar instâncias duplicadas sem intenção.

### Sobreposições, menus e navegação

#### `Modal.vue`

- `v-model`: Boolean; default `false`.
- Props: `title` (''), `description` (''), `size` (`md`).
- Tamanhos implementados: `sm`, `md`, `lg`, `xl`, `full`.
- Slot padrão: conteúdo do modal.
- Slot nomeado `footer`: ações do rodapé, renderizado somente quando fornecido.
- Fecha pelo botão interno, Escape e clique fora.
- É teleportado para `body`.

#### `Dropdown.vue`

- Não declara props.
- Slot nomeado obrigatório na prática: `trigger` (acionador).
- Slot nomeado: `content` (conteúdo do menu).
- Fecha ao clicar fora, pressionar Escape, rolar/redimensionar a janela ou clicar no conteúdo.
- O conteúdo é teleportado para `body`.

#### `Breadcrumb.vue`

- Props: `items` (Array obrigatório), `class` (default `mb-6 pb-2`).
- Formato dos itens: `{ label, to?, icon? }`.
- `to` transforma o item em `RouterLink`; sem `to`, o item é texto final.
- `icon: 'home'` exibe o ícone Home.
- Depende de Vue Router.

#### `CommandMenu.vue`

- Prop: `actions` (Array; default `[]`).
- Cada ação usa os campos observados no código: `title`, `description` opcional, `icon` opcional, `shortcut` opcional e `onSelect` opcional.
- Abre/fecha com Ctrl+K ou Cmd+K.
- Suporta pesquisa, setas, Enter e Escape.
- Usa o estado global de `useCommandMenu()`.

### Componentes compostos de conteúdo

#### `Card.vue`, `CardHeader.vue`, `CardContent.vue`

- Cada componente aceita apenas `class` como prop explícita.
- Todos possuem slot padrão.
- Composição usual: `Card` envolvendo `CardHeader` e `CardContent`.

#### `Accordion.vue`

- `v-model`: String; default `''`.
- Slot padrão: `AccordionItem`.
- Mantém um único valor ativo (um item aberto por vez).

#### `AccordionItem.vue`

- Props: `value` (String obrigatório), `class`.
- Slot padrão: conteúdo composto por `AccordionTrigger` e `AccordionContent`.

#### `AccordionTrigger.vue` e `AccordionContent.vue`

- Cada um aceita `class`.
- Ambos dependem de `Accordion` e `AccordionItem` ancestrais, pois usam `inject`.
- Ambos possuem slot padrão.

#### `Tabs.vue`

- `v-model`: String obrigatório.
- Slot padrão: `TabsList` e `TabsContent`.

#### `TabsList.vue`

- Prop: `class`.
- Slot padrão: normalmente contém `TabsTrigger`.

#### `TabsTrigger.vue`

- Props: `value` (String obrigatório), `class`.
- Slot padrão: rótulo da aba.
- Atualiza o modelo de `Tabs` ancestral.

#### `TabsContent.vue`

- Props: `value` (String obrigatório), `class`.
- Slot padrão: conteúdo da aba.
- Renderiza o conteúdo somente quando `value` corresponde à aba ativa.

#### `Table.vue`

- Prop: `class`.
- Slot padrão: estrutura de tabela (`TableHeader`, `TableBody`, etc.).
- Renderiza um wrapper com overflow e um elemento `<table>`.
- **Não é o componente de tabela em cartões para mobile.** Para esse comportamento, consulte `ResponsiveTable.vue`.

#### `TableHeader.vue`, `TableBody.vue`, `TableRow.vue`

- Cada um aceita `class` e possui slot padrão.
- Renderizam respectivamente `thead`, `tbody` e `tr`.

#### `TableHead.vue` e `TableCell.vue`

- Props: `class`, `align` (default `left`), `vAlign` (default `middle`).
- `align`: `left`, `center`, `right`.
- `vAlign`: `top`, `middle`, `bottom`.
- Slot padrão.
- Renderizam respectivamente `th` e `td`.

#### `ResponsiveTable.vue`

- Props obrigatórias: `headers` (Array) e `items` (Array).
- Espera `headers` com objetos contendo `key` e `label`.
- Em mobile, apresenta itens como cartões; em desktop, como tabela.
- Permite slots dinâmicos `cell-<header.key>`.
- O slot recebe `item` como prop; sem slot, usa `item[header.key]`.

## 6. Composables e utilitários relacionados

### `useToast()` e `toast`

Arquivo: `src/composables/useToast.js`.

- `useToast()` retorna `{ toasts, remove, add }`.
- `toasts` é estado reativo compartilhado no módulo.
- `add(options)` inclui uma notificação; opções usadas pelo código incluem `title`, `description`, `variant`, `duration`.
- `remove(id)` remove pelo identificador.
- API imperativa exportada `toast`:
  - `toast.default(title, description = '', duration = 3000)`
  - `toast.success(title, description = '', duration = 3000)`
  - `toast.warning(title, description = '', duration = 4000)`
  - `toast.error(title, description = '', duration = 5000)`
  - `toast.infinit(title, description = '')`
- **Atenção:** a função está nomeada `infinit` no código. Não inventar `toast.info`, `toast.loading` ou `toast.infinite` sem verificar a implementação atual.

### `useClickOutside(elementRef, callback)`

Arquivo: `src/composables/useClickOutside.js`.

- Registra listeners `mousedown` e `touchstart` no `document` ao montar.
- Executa `callback` quando o evento ocorre fora do elemento referenciado.
- Remove os listeners ao desmontar.

### `useCommandMenu()`

Arquivo: `src/composables/useCommandMenu.js`.

Retorna `{ isOpen, toggle, open, close }`. O estado é compartilhado no módulo.

### `useTheme()`

Arquivo: `src/composables/useTheme.js`.

Retorna `{ isDark, initTheme }`. Gerencia `.dark` no elemento `<html>` e persiste a escolha em `localStorage` pela chave `w2_tema`.

### `useBreadcrumb(navigation)`

Arquivo: `src/composables/useBreadcrumb.js`.

Recebe a árvore de navegação e retorna `{ breadcrumbItems }`, um computed derivado da rota atual via Vue Router. Espera itens com `title`, `to` e opcionalmente `children`.

### `useBrowserNotification()`

Arquivo: `src/composables/useBrowserNotification.js`.

Retorna `modalPermissaoAberto`, `permissaoAtual`, `verificarPermissaoInicial`, `solicitarPermissao`, `recusarPermissao` e `dispararNotificacao`. Usa a Notifications API do navegador e `toast` para mensagens.

## 7. Padrões de composição — exemplos

### Formulário com FormGroup, Input e Select

```vue
<script setup>
import { ref } from 'vue'
import FormGroup from '@/components/ui/FormGroup.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'

const name = ref('')
const role = ref('user')
const roles = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Usuário', value: 'user' },
]
</script>

<template>
    <form class="space-y-4">
        <FormGroup id="name" label="Nome">
            <Input id="name" v-model="name" placeholder="Digite o nome" />
        </FormGroup>

        <FormGroup id="role" label="Perfil">
            <Select id="role" v-model="role" :options="roles" />
        </FormGroup>
    </form>
</template>
```

### Modal com slot de rodapé

```vue
<script setup>
import { ref } from 'vue'
import Modal from '@/components/ui/Modal.vue'
import Button from '@/components/ui/Button.vue'

const isOpen = ref(false)
</script>

<template>
    <Button @click="isOpen = true">Abrir modal</Button>

    <Modal v-model="isOpen" title="Confirmar" description="Revise a operação.">
        <p>Conteúdo do modal.</p>

        <template #footer>
            <Button variant="ghost" @click="isOpen = false">Cancelar</Button>
            <Button @click="isOpen = false">Confirmar</Button>
        </template>
    </Modal>
</template>
```

### Accordion e Tabs

```vue
<script setup>
import { ref } from 'vue'
import Accordion from '@/components/ui/Accordion.vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'
import AccordionTrigger from '@/components/ui/AccordionTrigger.vue'
import AccordionContent from '@/components/ui/AccordionContent.vue'
import Tabs from '@/components/ui/Tabs.vue'
import TabsList from '@/components/ui/TabsList.vue'
import TabsTrigger from '@/components/ui/TabsTrigger.vue'
import TabsContent from '@/components/ui/TabsContent.vue'

const openItem = ref('item-1')
const currentTab = ref('details')
</script>

<template>
    <Accordion v-model="openItem">
        <AccordionItem value="item-1">
            <AccordionTrigger>Detalhes</AccordionTrigger>
            <AccordionContent>Conteúdo dos detalhes.</AccordionContent>
        </AccordionItem>
    </Accordion>

    <Tabs v-model="currentTab">
        <TabsList>
            <TabsTrigger value="details">Detalhes</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>
        <TabsContent value="details">Conteúdo dos detalhes.</TabsContent>
        <TabsContent value="history">Conteúdo do histórico.</TabsContent>
    </Tabs>
</template>
```

## 8. Divergências encontradas na documentação existente

O arquivo `W2-UI-DOCS.md` já existe no repositório, mas esta revisão identificou divergências que exigem conferência no código-fonte:

1. O exemplo antigo de `Select` utiliza elementos `<option>` como filhos. A implementação atual declara `options` como prop obrigatória e não expõe slot para opções.
2. A documentação chama `Table` de tabela híbrida responsiva em mobile. O componente `Table.vue` atual apenas envolve uma tabela HTML com overflow; a apresentação em cartões/mobile está em `ResponsiveTable.vue`.
3. A documentação mostra opções e variantes gerais sem registrar a grafia exata `sucess` no `Button.vue`. Já `Badge.vue` utiliza `success`.
4. A documentação não é um substituto para conferir as props reais de cada componente.

Quando houver conflito entre exemplos antigos e código-fonte atual, confira a versão atual do componente. Se ainda houver dúvida, solicite o arquivo ao usuário.

## 9. Regras para criar ou ampliar a biblioteca

- Antes de criar um componente, procure um componente existente ou uma composição possível.
- Siga o estilo de implementação da biblioteca: Vue 3, `<script setup>`, JavaScript, Tailwind CSS 4, `cn()` e `@lucide/vue` quando necessário.
- Mantenha a ordem dos blocos `.vue`: script, template e style, quando houver.
- Não crie props, eventos, variantes, métodos ou slots sem definir e documentar sua API.
- Prefira APIs explícitas e consistentes com os componentes existentes.
- Evite adicionar dependências sem uma justificativa clara.
- Atualize a documentação quando uma API mudar.
- Não altere o repositório remoto sem autorização explícita.

## 10. Fonte de verdade

Esta referência é um índice de consulta, não substitui o código-fonte. Para uma implementação concreta, use a seguinte ordem:

1. Arquivo atual do componente no repositório `w2developer/w2-ui`.
2. Esta referência Markdown para localizar e compreender rapidamente a API.
3. `W2-UI-DOCS.md` e `README.md` como contexto e exemplos, verificando divergências antes de copiar.

Links principais:

- Repositório: https://github.com/w2developer/w2-ui
- Documentação inicial: https://github.com/w2developer/w2-ui/blob/main/W2-UI-DOCS.md
- Componentes UI: https://github.com/w2developer/w2-ui/tree/main/src/components/ui
- Composables: https://github.com/w2developer/w2-ui/tree/main/src/composables
- Utilitário de classes: https://github.com/w2developer/w2-ui/blob/main/src/utils/cn.js
- Tema global: https://github.com/w2developer/w2-ui/blob/main/src/assets/css/global.css
