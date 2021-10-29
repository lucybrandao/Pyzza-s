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
        <q-card flat bordered square class="q-mt-md bg-primary text-white">
          <q-card-section horizontal>
            <div class="row items-center">
              <div class="col">
                <div class="text-h6 text-bold text-uppercase q-pl-md">Sobremesas</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <!-- Pizzas -->
        <div class="row q-my-sm">
          <div v-for="(sobremesa, index) in sobremesas" :key="index" class="col-4 q-pa-sm">
            <q-img :src="sobremesa.img" />
            <q-btn flat class="full-width bg-negative text-white text-bold q-py-sm q-my-sm">Adicionar ao Carrinho</q-btn>
            <div class="text-bold text-primary">{{ sobremesa.nome }}</div>
            <div class="text-caption text-grey-8 q-mb-md">{{ sobremesa.ingredientes }}</div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cardapio-sobremesa-list',

  setup () {
    return {
      sobremesas: [
        {
          value: 1,
          nome: 'Churrosbread',
          ingredientes: 'Nossa saborosa massa recheada de muito doce de leite, coberta de açúcar e canela.',
          img: require('src/assets/sobremesa1.jpg')
        },
        {
          value: 2,
          nome: 'Chocobread',
          ingredientes: 'Massa deliciosa massa recheada de muito chocolate e cobertura de creme de baunilha com granulado.',
          img: require('src/assets/sobremesa2.jpg')
        },
        {
          value: 3,
          nome: 'Brotinho de Brigadeiro',
          ingredientes: 'Brotinho de brigadeiro com creme de baunilha ,brigadeiro de chocolate e granulado.',
          img: require('src/assets/sobremesa3.jpg')
        },
        {
          value: 4,
          nome: 'Brotinho de Ovomaltine®',
          ingredientes: 'Brotinho recheada com creme de baunilha e creme de Ovomaltine® crocante.',
          img: require('src/assets/sobremesa4.jpg')
        },
        {
          value: 5,
          nome: 'Brotinho Laka Oreo',
          ingredientes: 'Brotinho coberta com chocolate Laka Oreo cremoso.',
          img: require('src/assets/sobremesa5.jpg')
        }
      ]
    }
  }
})
</script>
