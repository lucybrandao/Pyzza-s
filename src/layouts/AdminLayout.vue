<template>
  <q-layout view="lHh LpR lff">

    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Pyzza's
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple @click="toDash">
            <q-item-section>
              Dashboards
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toPedidos">
            <q-item-section>
              Pedidos
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toPizzas">
            <q-item-section>
              Pizzas
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toSobremesas">
            <q-item-section>
              Sobremesas
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toBebidas">
            <q-item-section>
              Bebidas
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toUsuarios">
            <q-item-section>
              Usuários
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div class="absolute-top bg-primary text-white" style="height: 150px">
        <div class="absolute-bottom bg-transparent q-pa-md">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="logo">
          </q-avatar>
          <div class="text-weight-bold">Usuário Abacateiro</div>
          <div>Cargo do Usuário</div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-4">
      <q-toolbar class="justify-center q-pt-lg q-pb-md">
        <div class="col-10">
          <div class="row justify-between">
            <div class="text-bold text-grey-9 q-px-md footer-link" @click="toHome">Voltar ao site</div>
            <div class="text-bold text-grey-9 q-px-md">Sobre a Pyzza</div>
            <div class="text-bold text-grey-9 q-px-md">Políticas de Privacidade</div>
            <div class="text-bold text-grey-9 q-px-md">Seja um Franqueado</div>
            <div class="text-bold text-grey-9 q-px-md">Fale Conosco</div>
            <div class="text-bold text-grey-9 q-px-md">Termos de Uso</div>
          </div>
        </div>
      </q-toolbar>

      <q-toolbar class="justify-center q-pb-md">
        <div class="col-10">
          <div class="row items-center">
            <div class="text-bold text-primary text-h5 q-px-md"><i class="fab fa-facebook-f"></i></div>
            <div class="text-bold text-primary text-h5 q-px-md"><i class="fab fa-twitter"></i></div>
            <div class="text-bold text-primary text-h5 q-px-md q-mr-xl"><i class="fab fa-instagram"></i></div>
            <q-img :src="coca" class="coca q-mr-md" />
          </div>
        </div>
      </q-toolbar>

      <q-toolbar class="justify-center q-pb-lg">
        <div class="col-10">
          <div class="row items-center">
            <p class="text-bold text-grey-6">Serviço disponível nas áreas de entrega Dama'a Pizza, todos os dias,
            de acordo com o horário de funcionamento de cada loja. A Dama'a Pizza Brasil
            se reserva o direito de alterar ou encerrar as ofertas sem aviso prévio.
            Todas as promoções expostas não são cumulativas entre si ou com outras promoções
            e descontos. Cobramos taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN.
            Alérgicos: todos os nossos produtos contém ou podem conter traços de Trigo,
            Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada loja.
            Imagens meramente ilustrativas. Consulte se sua loja de preferência pratica a
            promoção escolhida Em caso de dúvidas, consulte nosso SAC:<span class="text-primary">sac@damas.com.br</span>.</p>

            <p class="text-bold text-grey-6">*Preços "a partir de" podem sofrer pequenas variações
            de acordo com a região da loja. Confirme o preço no carrinho de compras antes de confirmar seu pedido.</p>

            <p class="text-bold text-grey-6">DAMA'S PIZZA BRASIL, Av. das Américas, 500 - Bloco 7 – 3º andar –
            Barra da Tijuca, Rio de Janeiro/RJ - 22640-100</p>

            <p class="text-bold text-grey-6">S.A.C: Dúvidas, reclamações, sugestões e / ou
            elogios envie um e-mail para: <span class="text-primary">sac@damas.com.br</span></p>

            <p class="text-bold text-grey-6">Informações sobre o uso de dados pessoais e pedidos de
            descadastro do banco de dados, envie um e-mail para: <span class="text-primary">encarregadodados@damas.com.br</span> –
            Encarregado de Dados - Lucy Brandão</p>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AdminLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      logo: require('src/assets/logo_py.png'),
      coca: require('src/assets/coca.png'),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods: {
    toHome () {
      this.$router.push({ name: 'home' })
    },
    toDash () {
      this.$router.push({ name: 'admin-dashboard' })
    },
    toPizzas () {
      this.$router.push({ name: 'pizza-list' })
    },
    toSobremesas () {
      this.$router.push({ name: 'sobremesa-list' })
    },
    toBebidas () {
      this.$router.push({ name: 'bebida-list' })
    },
    toUsuarios () {
      this.$router.push({ name: 'usuario-list' })
    },
    toPedidos () {
      this.$router.push({ name: 'pedido-list' })
    }
  }
}
</script>
