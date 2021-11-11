<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <div class="row items-bottom justify-between">
          <div class="text-h2 text-secondary q-my-md">Listagem de Pizzas</div>
          <q-btn color="positive" class="q-mt-auto q-mb-lg" label="Cadastrar Pizza" />
        </div>
        <q-table
          title="Pizzas"
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
    nome: 'Frango com Requeijão',
    ingredientes: 'Frango desfiado, cebola, oregano e requeijão',
    img: require('src/assets/pizza1.jpg')
  },
  {
    value: 2,
    preco: '42,00',
    nome: 'Bauru',
    ingredientes: 'Mussarela, presunto, requeijão, oregano e tomate.',
    img: require('src/assets/pizza2.jpg')
  },
  {
    value: 3,
    preco: '42,00',
    nome: 'Calabresa',
    ingredientes: 'Mussarela, calabresa e cebola, oregano.',
    img: require('src/assets/pizza3.jpg')
  },
  {
    value: 4,
    preco: '42,00',
    nome: 'Catuperoni',
    ingredientes: 'Mussarela, pepperoni, requeijão, oregano e parmesão ralado.',
    img: require('src/assets/pizza4.jpg')
  },
  {
    value: 5,
    preco: '42,00',
    nome: 'Mussarela',
    ingredientes: 'Queijo mussarela e oregano.',
    img: require('src/assets/pizza5.jpg')
  },
  {
    value: 6,
    preco: '42,00',
    nome: 'Margherita',
    ingredientes: 'Mussarela, tomate, oregano e manjericão.',
    img: require('src/assets/pizza6.jpg')
  },
  {
    value: 7,
    preco: '42,00',
    nome: 'Pepperoni',
    ingredientes: 'Mussarela, oregano e pepperoni.',
    img: require('src/assets/pizza7.jpg')
  }
]

export default defineComponent({
  nome: 'pizza-list',

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
