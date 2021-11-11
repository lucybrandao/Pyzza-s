<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <div class="text-h2 text-secondary q-my-md">Listagem de Usuários</div>
        <q-table
          title="Usuários"
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
    nome: 'nome',
    required: true,
    label: 'Nome',
    align: 'left',
    field: row => row.nome,
    format: val => `${val}`,
    sortable: true
  },
  {
    nome: 'cargo',
    align: 'left',
    label: 'Cargo',
    field: 'cargo'
  },
  {
    nome: 'signo',
    label: 'Signo',
    field: 'signo',
    sortable: true
  }
]

const rows = [
  {
    value: 1,
    nome: 'Fulaninho da Silva',
    cargo: 'Dono',
    signo: 'Aries'
  },
  {
    value: 2,
    nome: 'Siclaninho dos Santos',
    cargo: 'Pyzzaiolo',
    signo: 'Gêmeos'
  },
  {
    value: 3,
    nome: 'Beltraninho com Sobrenome',
    cargo: 'Garçom',
    signo: 'Escorpião'
  }
]

export default defineComponent({
  name: 'usuario-list',

  setup () {
    return {
      columns,
      rows
    }
  },

  methods: {
    toCardapio () {
      this.$router.push({ name: 'cardapio' })
    }
  }
})
</script>
