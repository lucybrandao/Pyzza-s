import api from 'src/api'

export default {
  list: () => api.get('/api/pizzas/').then((response) => response.data.result)
}
