import { createStore } from 'vuex'
import axios from 'axios'

/*eslint-disable*/
// import router from '@/router'

export default createStore({
  state: {
    order:null,
    product: null
  },
  getters: {
  },
  mutations: {
    setOrders(state,payload){
      state.order=payload
    },
    deleteOrder(state, payload) {
      state.order = state.order.filter(order => order.id !== payload);
    },
    updateOrder(state,payload){
      state.order = payload
    },
    setProducts(state,payload){
      state.product=payload
    },
    setProduct(state,payload){
      state.product=payload
    }
    
    
  },
  actions: {
    async getOrders({commit}){
      try {
        let {data} =await axios.get('https://capstone-7oya.onrender.com/order')
        commit('setOrders',data)
        
      } catch (err) {
        console.log(err);
        
      }
    },
    async getProducts({commit}){
      try {
        let {data} = await axios.get('https://capstone-7oya.onrender.com/product')
        commit('setProducts',data)
      } catch (err) {
        console.log(err);
        
      }
    },
    async getProduct({commit},prod_id){
      try {
        let {data} = await axios.get(`https://capstone-7oya.onrender.com/product/${prod_id}`)
        commit('setProduct',data)
      } catch (err) {
        console.log(err);
        
      }
    },
    async deleteOrder({commit},tra_id){
      try {
        let {data} = await axios.delete(`https://capstone-7oya.onrender.com/order/${tra_id}`)
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },
    async updateOrder({commit},tra_id){
      try{
        let {data} = await axios.patch(`https://capstone-7oya.onrender.com/order/${tra_id}`)
        console.log(data);
        
      }catch (err){
        console.log(err);
        
      }
    }
  },
  modules: {
  }
})
