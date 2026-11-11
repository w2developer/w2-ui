# W2Ui

Uma biblioteca de componentes de interface (UI) desenvolvida para uso pessoal. Construída com Vue 3, Tailwind CSS e Vite, a W2Ui é focada em produtividade, consistência e facilidade de integração.

 Demo e Código: 

## Tecnologias Utilizadas

* Framework: Vue 3 (Composition API)
* Estilização: Tailwind CSS v4
* Build Tool: Vite
* Gerenciamento de Estado: Pinia
* Roteamento: Vue Router
* Ícones: Lucide Vue
* Backend/BaaS: Supabase
* Utilitários: clsx, tailwind-merge, class-variance-authority

## Instalação e Uso Local

1. Instale as dependências do projeto:
npm install

2. Inicie o servidor de desenvolvimento:
npm run dev

3. Para gerar o build de produção:
npm run build

4. Para formatar o código:
npm run format

## Componentes Disponíveis

A biblioteca possui uma arquitetura modular com os seguintes componentes já implementados:

* Layout & Estrutura: AppLayout, Navbar, Sidebar, SidebarItem, Breadcrumb, Tabs (List, Trigger, Content)
* Interação & Formulários: Button, Input, Textarea, Checkbox, Select, Switch, CommandMenu, FormGroup, Label
* Exibição de Dados: Card (Header, Content), Table (Header, Body, Row, Head, Cell), Accordion (Item, Trigger, Content), Avatar, Badge, CodeBlock
* Feedback & Utilitários: Modal, Skeleton, Toaster, Tooltip, ComponentPreview

## Utilitários Base

O projeto conta com funções utilitárias essenciais para o funcionamento da UI, incluindo a função cn() (mesclando clsx e tailwind-merge) para resolver conflitos de classes do Tailwind de forma dinâmica e limpa.
