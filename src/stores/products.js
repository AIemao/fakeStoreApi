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


export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: ''
  }),
  getters: {
  },
  actions: {
    async listacategories() {
      const res = await api.get(`/products/category/jewelery`)
      this.categories = res.data
    }
  }
})
