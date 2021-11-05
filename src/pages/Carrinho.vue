<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col-6 q-mb-lg">
        <!-- Começar pedido -->
        <q-card flat class="my-card bg-primary text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col-6 text-center">
                <div class="text-h5 text-bold text-uppercase">Começar o Pedido</div>
              </div>
              <div class="col-6">
                <div class="row justify-around items-center">
                  <q-btn flat class="bg-negative text-white text-bold q-px-xl q-py-sm">Entrega</q-btn>
                  <div class="text-h6 text-bold text-blue-grey-4 text-italic">ou</div>
                  <q-btn flat class="bg-negative text-white text-bold q-px-xl q-py-sm">Retirar na Loja</q-btn>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <!-- Texto -->
        <p class="q-mt-md text-primary text-bold">Este é o nosso cardápio nacional. Para ver os produtos
        disponíveis na sua região,faça o login e insira o seu endereço. Encontre a loja mais próxima.</p>

        <!-- Carrinho -->
        <q-card flat bordered square class="q-mt-md bg-primary text-white">
          <q-card-section horizontal>
            <div class="row items-center">
              <div class="col">
                <div class="text-h6 text-bold text-uppercase q-pl-md">Início / Carrinho</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card flat bordered square class="q-my-md bg-grey-1 text-primary">
          <q-card-section>
            <div class="text-h4">Carrinho</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section v-for="(pedido, index) in pedidos" :key="index" horizontal style="border-bottom: 1px solid #0000001f" class="q-mx-md">
            <q-img class="col-2" :src="pedido.img" />
            <div class="col-10 q-gutter-md q-pl-md">
              <div class="row justify-between">
                <div class="col">
                  <div class="text-h6 text-uppercase q-pt-sm">{{ pedido.nome }}</div>
                  <div class="text-caption">{{ pedido.ingredientes }}</div>
                </div>
                <div class="text-right text-h6 text-bold text-uppercase q-pt-sm">R$ {{ pedido.valor }}</div>
              </div>
              <div class="col self-end q-py-sm">
                <q-btn-group push>
                  <q-btn push label="-" />
                  <div class="q-px-md q-py-sm bg-grey-3">1</div>
                  <q-btn push label="+" />
                </q-btn-group>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="text-right">
            <div class="text-h6">Subtotal (<span>{{ pedidos.length }}</span> itens): <span class="text-bold">R$ 114,50</span></div>
          </q-card-section>
        </q-card>

        <div class="row">
          <div class="col text-right">
            <q-btn label="Fechar Pedido" color="primary" class="aligh-right q-px-xl" />
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Carrinho',

  setup () {
    return {
      pedidos: [
        {
          value: 1,
          nome: 'Frango com Requeijão',
          ingredientes: 'Frango desfiado, cebola, oregano e requeijão.',
          valor: '42,00',
          img: require('src/assets/pizza1.jpg')
        },
        {
          value: 2,
          nome: 'Bauru',
          ingredientes: 'Mussarela, presunto, requeijão, oregano e tomate.',
          valor: '42,00',
          img: require('src/assets/pizza2.jpg')
        },
        {
          value: 3,
          nome: 'Chocobread',
          ingredientes: 'Massa deliciosa massa recheada de muito chocolate e cobertura de creme de baunilha com granulado.',
          valor: '18,50',
          img: require('src/assets/sobremesa2.jpg')
        },
        {
          value: 4,
          nome: 'Coca Cola',
          ingredientes: '---',
          valor: '12,00',
          img: require('src/assets/bebida1.jpg')
        }
      ]
    }
  },

  methods: {
    to (categoria) {
      this.$router.push({ name: categoria })
    }
  }
})
</script>
