# Fake Store API - VUE

Desafio de integrar uma API "FAKE STORE API" [Link](https://fakestoreapi.com/).


## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#the-challenge)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#useful-resources)
- [Autor](#autor)


## Visão geral

Integração de produtos

### O desafio

Os usuários devem ser capazes de:

- Visualize o layout da tela com os produtos da FAKE STORE API

### Captura de tela


:( Api estava off



### Links

- URL da solução: [GITHUB - API FAKE STORE - VUE](https://github.com/AIemao/fakeStoreApiVue)

## Meu processo

 1 - Teamplate das telas
 2 - Organização de pastas
 3 - Criação dos componentes
 4 - Pinia
 5 - Rotas
 6 - API

### Construído com

- VUE 3
- Propriedades personalizadas de CSS
- API FAKE STORE
- Vue Router
- [Pinia](https://pinia.vuejs.org/core-concepts/actions.html)
- [Vue 3](https://vuejs.org/)
- [Fake Store Api](https://fakestoreapi.com/) - Estrutura de reação
- [Componentes estilizados](https://styled-components.com/) - Para estilos


### O que eu aprendi

Vue e sua estrutura, manipulação do Pinia


```Vue Pinia
import { defineStore } from 'pinia'
import { api } from '../api'


export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products:''
  }),
  getters: {
  },
  actions: {
    async listaProducts() {
      const res = await api.get(`/products/`)
      this.products = res.data
    }
  }
})
```

### Desenvolvimento contínuo

Pracitar Vuex e Pinia


### Recursos úteis

- [VUE 3](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/guide/composition-api.html#accessing-mutations-and-actions)
- [Pinia](https://pinia.vuejs.org/core-concepts/actions.html)

## Autor

- Site - [Celio Junior](https://www.linkedin.com/in/celio-junior-152529193/)