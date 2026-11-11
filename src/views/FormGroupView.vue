<script setup>
    import { ref } from 'vue';
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    
    import FormGroup from '@/components/ui/FormGroup.vue';
    import Input from '@/components/ui/Input.vue';
    import Textarea from '@/components/ui/Textarea.vue';
    import Checkbox from '@/components/ui/Checkbox.vue';
    import Switch from '@/components/ui/Switch.vue';

    const form = ref(
        { 
            name: '', 
            bio: '', 
            active: true, 
            terms: false }
        );

    const codigo = `\
<script setup>
    import { ref } from 'vue';
    import FormGroup from '@/components/ui/FormGroup.vue';
    import Input from '@/components/ui/Input.vue';
    import Textarea from '@/components/ui/Textarea.vue';
    import Checkbox from '@/components/ui/Checkbox.vue';
    import Switch from '@/components/ui/Switch.vue';
    const form = ref(
        { 
            name: '', 
            bio: '', 
            active: true, 
            terms: false }
        );
<\/script>
<template>
    <form>
        <FormGroup description="" id="name" label="">
            <Input :error="!form.name" id="name" placeholder="" v-model="form.name"/>
        </FormGroup>
        <FormGroup id="bio" label="">
            <Textarea id="bio" rows="3" v-model="form.bio"/>
        </FormGroup>
        <div>
            <Switch v-model="form.active"/>
        </div>
        <div>
            <Checkbox id="terms" v-model="form.terms"/>
        </div>
    </form>
<\/template>`;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">

        <form class="space-y-6 w-full">
            <FormGroup description="Como prefere ser chamado." id="name" label="Nome Completo">
                <Input :error="!form.name" id="name" placeholder="Digite seu nome" v-model="form.name"/>
            </FormGroup>

            <FormGroup id="bio" label="Biografia">
                <Textarea id="bio" rows="3" v-model="form.bio"/>
            </FormGroup>

            <div class="flex items-center justify-between border border-border p-4 rounded-lg">
                <span class="text-sm font-medium">Conta Ativa</span>
                <Switch v-model="form.active"/>
            </div>

            <div class="flex items-center gap-3">
                <Checkbox id="terms" v-model="form.terms"/>
                <label for="terms" class="text-sm font-medium cursor-pointer">Aceito os termos</label>
            </div>
        </form>

    </ComponentPreview>
</template>