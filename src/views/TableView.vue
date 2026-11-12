<script setup>
    import ComponentPreview from '@/components/ui/ComponentPreview.vue';
    import Table from '@/components/ui/Table.vue';
    import TableHeader from '@/components/ui/TableHeader.vue';
    import TableHead from '@/components/ui/TableHead.vue';
    import TableBody from '@/components/ui/TableBody.vue';
    import TableRow from '@/components/ui/TableRow.vue';
    import TableCell from '@/components/ui/TableCell.vue';

    const codigo = ``;
</script>

<template>
    <ComponentPreview :code="codigo" language="vue">
        <div class="flex p-2">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                        <!-- Demais ou Menos -->
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <!-- Demais ou Menos -->
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </ComponentPreview>
</template>