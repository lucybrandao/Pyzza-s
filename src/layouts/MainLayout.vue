<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="justify-center">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="row">
                <q-img :src="logo" @click="toHome()" class="logo q-mr-md q-mt-sm" />
                <div class="menu-item q-px-sm text-uppercase text-bold q-py-lg" @click="toCardapio()">Cardápio</div>
                <!-- <div class="menu-item q-px-sm text-uppercase text-bold q-py-lg">Promoções</div> -->
              </div>
            </div>
            <div class="col">
              <div class="row justify-end">
                <div class="menu-item-login q-ml-lg text-uppercase text-bold bg-secondary q-py-lg q-px-md" @click="toLogin()">
                  <i class="far fa-user q-mr-sm"></i>Fazer Login
                </div>
                <div class="menu-item q-px-md text-uppercase text-bold q-py-lg" @click="toCarrinho()">
                  <i class="fas fa-shopping-cart q-mr-sm"></i>Carrinho
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-4">
      <q-toolbar class="justify-center q-py-xl">
        <div class="col-6">
          <div class="row justify-between">
            <div class="text-bold text-grey-9 q-px-md footer-link" @click="toAdmin">Entrar como Funcionário</div>
            <div class="text-bold text-grey-9 q-px-md">Sobre a Pyzza</div>
            <div class="text-bold text-grey-9 q-px-md">Políticas de Privacidade</div>
            <div class="text-bold text-grey-9 q-px-md">Seja um Franqueado</div>
            <div class="text-bold text-grey-9 q-px-md">Fale Conosco</div>
            <div class="text-bold text-grey-9 q-px-md">Termos de Uso</div>
          </div>
        </div>
      </q-toolbar>

      <q-toolbar class="justify-center q-pb-xl">
        <div class="col-6">
          <div class="row items-center">
            <div class="text-bold text-primary text-h5 q-px-md"><i class="fab fa-facebook-f"></i></div>
            <div class="text-bold text-primary text-h5 q-px-md"><i class="fab fa-twitter"></i></div>
            <div class="text-bold text-primary text-h5 q-px-md q-mr-xl"><i class="fab fa-instagram"></i></div>
            <q-img :src="coca" class="coca q-mr-md" />
          </div>
        </div>
      </q-toolbar>

      <q-toolbar class="justify-center q-pb-lg">
        <div class="col-6">
          <div class="row items-center">
            <p class="text-bold text-grey-6">Serviço disponível nas áreas de entrega Pyzza's, todos os dias,
            de acordo com o horário de funcionamento de cada loja. A Pyzza's Brasil
            se reserva o direito de alterar ou encerrar as ofertas sem aviso prévio.
            Todas as promoções expostas não são cumulativas entre si ou com outras promoções
            e descontos. Cobramos taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN.
            Alérgicos: todos os nossos produtos contém ou podem conter traços de Trigo,
            Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada loja.
            Imagens meramente ilustrativas. Consulte se sua loja de preferência pratica a
            promoção escolhida Em caso de dúvidas, consulte nosso SAC:<span class="text-primary">sac@pyzzas.com.br</span>.</p>

            <p class="text-bold text-grey-6">*Preços "a partir de" podem sofrer pequenas variações
            de acordo com a região da loja. Confirme o preço no carrinho de compras antes de confirmar seu pedido.</p>

            <p class="text-bold text-grey-6">DAMA'S PIZZA BRASIL, Av. das Américas, 500 - Bloco 7 – 3º andar –
            Barra da Tijuca, Rio de Janeiro/RJ - 22640-100</p>

            <p class="text-bold text-grey-6">S.A.C: Dúvidas, reclamações, sugestões e / ou
            elogios envie um e-mail para: <span class="text-primary">sac@pyzzas.com.br</span></p>

            <p class="text-bold text-grey-6">Informações sobre o uso de dados pessoais e pedidos de
            descadastro do banco de dados, envie um e-mail para: <span class="text-primary">encarregadodados@pyzzas.com.br</span> –
            Encarregado de Dados - Lucy Brandão</p>
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
      logo: require('src/assets/logo_py.png'),
      coca: require('src/assets/coca.png')
    }
  },

  methods: {
    toCardapio () {
      this.$router.push({ name: 'cardapio' })
    },
    toHome () {
      this.$router.push({ name: 'home' })
    },
    toLogin () {
      this.$router.push({ name: 'login' })
    },
    toCarrinho () {
      this.$router.push({ name: 'carrinho' })
    },
    toAdmin () {
      this.$router.push({ name: 'admin-dashboard' })
    }
  }
})
</script>
