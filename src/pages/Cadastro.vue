<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col-6 q-mb-lg">
        <!-- Cadastro -->
        <div class="row justify-center">
          <div class="col col-md-7 col-lg-6">
            <q-btn @click="toLogin()" color="primary" flat class="full-width q-ml-sm">
              <i class="fas fa-arrow-left q-mr-md"></i> Voltar para Login
            </q-btn>
          </div>
        </div>
        <div class="row items-center">
          <div class="col text-center">
            <div class="text-h3 text-bold text-uppercase text-primary q-my-md">Cadastro</div>
          </div>
        </div>
        <div class="row justify-center">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="col col-md-7 col-lg-6 q-gutter-md q-my-md"
          >
            <q-input
              filled
              v-model="nome"
              label="Nome"
              hint="Nome e Sobrenome"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, escreva algo']"
            />

            <q-input filled v-model="nascimento" hint="Data de nascimento" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="nascimento">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              type="password"
              v-model="senha"
              label="Senha"
              hint="Pelo menos 4 dígitos"
              lazy-rules
              :rules="[ val => val && val.length > 3 || 'A senha precisa ter pelo menos 4 dígitos']"
            />

            <q-toggle v-model="accept" label="Concordo com os termos e licença" />

            <div>
              <q-btn label="Cadastrar" type="submit" color="primary"/>
              <q-btn label="Limpar Campos" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',

  setup () {
    const $q = useQuasar()

    const nome = ref(null)
    const nascimento = ref(null)
    const senha = ref(null)
    const accept = ref(false)
    return {
      nome,
      nascimento: ref('1998/04/11'),
      senha,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Você precisa aceitar os termos e licenças antes'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Cadastrado'
          })
        }
      },

      onReset () {
        nome.value = null
        nascimento.value = null
        senha.value = null
        accept.value = false
      }
    }
  },

  methods: {
    toLogin () {
      this.$router.push({ name: 'login' })
    }
  }
})
</script>
