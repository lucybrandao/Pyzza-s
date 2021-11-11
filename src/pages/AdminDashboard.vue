<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <q-breadcrumbs class="bg-grey-3 q-pb-sm q-px-md q-mt-sm">
          <q-breadcrumbs-el label="Site" />
          <q-breadcrumbs-el label="Admin" />
        </q-breadcrumbs>
        <div class="text-h2 text-secondary q-my-md">Dashboards</div>
        <div class="row q-gutter-md">
          <q-card @click="toPizzas" class="dash-card col-3 bg-red-10 text-white">
            <q-card-section>
              <div class="text-h6">Pizzas</div>
              <div class="text-subtitle2">Total de Pizzas cadastradas: 7</div>
            </q-card-section>
          </q-card>
          <q-card @click="toBabidas" class="dash-card col-3 bg-primary text-white">
            <q-card-section>
              <div class="text-h6">Bebidas</div>
              <div class="text-subtitle2">Total de Bebidas cadastradas: 7</div>
            </q-card-section>
          </q-card>
          <q-card @click="toSobremesas" class="dash-card col-3 bg-purple-9 text-white">
            <q-card-section>
              <div class="text-h6">Sobremesas</div>
              <div class="text-subtitle2">Total de Sobremesas cadastradas: 7</div>
            </q-card-section>
          </q-card>
          <q-card @click="toPedidos" class="dash-card col-3 bg-orange-9 text-white">
            <q-card-section>
              <div class="text-h6">Pedidos</div>
              <div class="text-subtitle2">Total de Pedidos cadastradas: 7</div>
            </q-card-section>
          </q-card>
        </div>

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
  name: 'admin-dashboard',

  setup () {
    return {
      columns,
      rows
    }
  },

  methods: {
    toPizzas () {
      this.$router.push({ name: 'pizza-list' })
    },
    toBabidas () {
      this.$router.push({ name: 'bebida-list' })
    },
    toSobremesas () {
      this.$router.push({ name: 'sobremesa-list' })
    },
    toPedidos () {
      this.$router.push({ name: 'pedido-list' })
    }
  }
})
</script>
