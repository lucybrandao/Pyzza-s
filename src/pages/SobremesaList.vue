<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <div class="row items-bottom justify-between">
          <div class="text-h2 text-secondary q-my-md">Listagem de Sobremesas</div>
          <q-btn @click="toForm" color="positive" class="q-mt-auto q-mb-lg" label="Cadastrar Sobremesa" />
        </div>
        <q-table
          title="Sobremesas"
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
    nome: 'Churrosbread',
    ingredientes: 'Nossa saborosa massa recheada de muito doce de leite, coberta de açúcar e canela.',
    img: require('src/assets/sobremesa1.jpg')
  },
  {
    value: 2,
    preco: '42,00',
    nome: 'Chocobread',
    ingredientes: 'Massa deliciosa massa recheada de muito chocolate e cobertura de creme de baunilha com granulado.',
    img: require('src/assets/sobremesa2.jpg')
  },
  {
    value: 3,
    preco: '42,00',
    nome: 'Brotinho de Brigadeiro',
    ingredientes: 'Brotinho de brigadeiro com creme de baunilha ,brigadeiro de chocolate e granulado.',
    img: require('src/assets/sobremesa3.jpg')
  },
  {
    value: 4,
    preco: '42,00',
    nome: 'Brotinho de Ovomaltine®',
    ingredientes: 'Brotinho recheada com creme de baunilha e creme de Ovomaltine® crocante.',
    img: require('src/assets/sobremesa4.jpg')
  },
  {
    value: 5,
    preco: '42,00',
    nome: 'Brotinho Laka Oreo',
    ingredientes: 'Brotinho coberta com chocolate Laka Oreo cremoso.',
    img: require('src/assets/sobremesa5.jpg')
  }
]

export default defineComponent({
  name: 'sobremesa-list',

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
      this.$router.push({ name: 'sobremesa-form' })
    }
  }
})
</script>
