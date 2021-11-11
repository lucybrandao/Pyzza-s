<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <q-breadcrumbs class="bg-grey-3 q-pb-sm q-px-md q-mt-sm">
          <q-breadcrumbs-el label="Site" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Admin" :to="{ name: 'admin-dashboard' }" />
          <q-breadcrumbs-el label="Listagem de Pedidos" />
        </q-breadcrumbs>
        <div class="text-h2 text-secondary q-my-md">Listagem de Pedidos</div>
        <q-table
          title="Pedidos"
          :rows="rows"
          :columns="columns"
          row-key="value"
          class="q-mt-lg"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

const columns = [
  {
    nome: 'value',
    required: true,
    label: '#Pedido',
    align: 'left',
    field: row => row.value,
    format: val => `${val}`,
    sortable: true
  },
  {
    nome: 'momento',
    align: 'left',
    label: 'Hora do pedido',
    field: 'momento',
    sortable: true
  },
  {
    nome: 'pedido',
    align: 'left',
    label: 'Pedido',
    field: 'pedido'
  },
  {
    nome: 'cliente',
    align: 'left',
    label: 'Cliente',
    field: 'cliente',
    sortable: true
  },
  {
    nome: 'endereco',
    align: 'left',
    label: 'Endereço',
    field: 'endereco',
    sortable: true
  },
  {
    nome: 'status',
    align: 'left',
    label: 'Status',
    field: 'status',
    sortable: true
  },
  {
    nome: 'valortotal',
    label: 'Valor Total',
    field: 'valortotal',
    sortable: true
  }
]

const rows = [
  {
    value: 1,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Frango com Requeijão',
    endereco: 'Frango desfiado, cebola, oregano e requeijão',
    valortotal: '42,00',
    status: 'Em andamento'
  },
  {
    value: 2,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Bauru',
    endereco: 'Mussarela, presunto, requeijão, oregano e tomate.',
    valortotal: '42,00',
    status: 'Em andamento'
  },
  {
    value: 3,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Calabresa',
    endereco: 'Mussarela, calabresa e cebola, oregano.',
    valortotal: '42,00',
    status: 'Em andamento'
  },
  {
    value: 4,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Catuperoni',
    endereco: 'Mussarela, pepperoni, requeijão, oregano e parmesão ralado.',
    valortotal: '42,00',
    status: 'Em andamento'
  },
  {
    value: 5,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Mussarela',
    endereco: 'Queijo mussarela e oregano.',
    valortotal: '42,00',
    status: 'Em andamento'
  },
  {
    value: 6,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Margherita',
    endereco: 'Mussarela, tomate, oregano e manjericão.',
    valortotal: '42,00',
    status: 'Em andamento'
  },
  {
    value: 7,
    momento: '10/11/2021 21:58:16',
    pedido: require('src/assets/pizza1.jpg'),
    cliente: 'Pepperoni',
    endereco: 'Mussarela, oregano e pepperoni.',
    valortotal: '42,00',
    status: 'Em andamento'
  }
]

export default defineComponent({
  nome: 'pedido-list',

  setup () {
    return {
      columns,
      rows
    }
  },

  methods: {
    toCardapio () {
      this.$router.push({ nome: 'cardapio' })
    }
  }
})
</script>
