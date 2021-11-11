<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <q-breadcrumbs class="bg-grey-3 q-pb-sm q-px-md q-mt-sm">
          <q-breadcrumbs-el label="Início" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Admin" :to="{ name: 'admin-dashboard' }" />
          <q-breadcrumbs-el label="Listagem de Bebidas" />
        </q-breadcrumbs>
        <div class="row items-bottom justify-between">
          <div class="text-h2 text-secondary q-my-md">Listagem de Bebidas</div>
          <q-btn @click="toForm" color="positive" class="q-mt-auto q-mb-lg" label="Cadastrar Bebida" />
        </div>
        <q-table
          title="Bebidas"
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
    nome: 'sabor',
    required: true,
    label: 'Sabores',
    align: 'left',
    field: row => row.nome,
    format: val => `${val}`,
    sortable: true
  },
  {
    nome: 'ingredientes',
    align: 'left',
    label: 'Ingredientes',
    field: 'ingredientes'
  },
  {
    nome: 'preco',
    label: 'Preço (R$)',
    field: 'preco',
    sortable: true
  }
]

const rows = [
  {
    value: 1,
    preco: '42,00',
    nome: 'Coca Cola',
    ingredientes: '',
    img: require('src/assets/bebida1.jpg')
  },
  {
    value: 2,
    preco: '42,00',
    nome: 'Coca Cola Zero',
    ingredientes: '',
    img: require('src/assets/bebida2.jpg')
  },
  {
    value: 3,
    preco: '42,00',
    nome: 'Fanta Laranja',
    ingredientes: '',
    img: require('src/assets/bebida3.jpg')
  },
  {
    value: 4,
    preco: '42,00',
    nome: 'Fanta Uva',
    ingredientes: '',
    img: require('src/assets/bebida4.jpg')
  },
  {
    value: 5,
    preco: '42,00',
    nome: 'Fanta guaraná',
    ingredientes: '',
    img: require('src/assets/bebida5.jpg')
  },
  {
    value: 6,
    preco: '42,00',
    nome: 'Ice Tea Limão',
    ingredientes: '',
    img: require('src/assets/bebida6.jpg')
  },
  {
    value: 7,
    preco: '42,00',
    nome: 'Água',
    ingredientes: '',
    img: require('src/assets/bebida7.jpg')
  }
]

export default defineComponent({
  name: 'bebida-list',

  setup () {
    return {
      columns,
      rows
    }
  },

  methods: {
    toCardapio () {
      this.$router.push({ name: 'cardapio' })
    },
    toForm () {
      this.$router.push({ name: 'bebida-form' })
    }
  }
})
</script>
