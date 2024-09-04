import { createStore } from 'vuex'
import axios from 'axios'

/*eslint-disable*/
// import router from '@/router'

export default createStore({
  state: {
    order:null,
    product: null,
    stocka:null,
    stock:null,
    recent_invoice:null,
    recent_sales:null
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
    deleteProduct(state, payload) {
      state.product = state.product.filter(product => product.id !== payload);
    },
    updateOrder(state,payload){
      state.order = payload
    },
    setProducts(state,payload){
      state.product=payload
    },
    setProduct(state,payload){
      state.product=payload
    },
    setStocka(state,payload){
      state.stocka=payload
    },
    setStock(state,payload){
      state.stock=payload
    },
    setRef(state,payload){
      state.recent_invoice=payload
    },
    setRec(state,payload){
      state.recent_sales=payload
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
    async insertOrder({commit},info){
        let {data} =await axios.post('https://capstone-7oya.onrender.com/order/insert',info)
        // commit('setAddOrder',data)
        console.log(data);
        
        
    },
    async addProduct({commit},info){
        let {data} =await axios.post('https://capstone-7oya.onrender.com/product/insert',info)
        // commit('setAddOrder',data)
        console.log(data);
        
        
    },

    async getRec({commit}){
      try {
        let {data} =await axios.get('https://capstone-7oya.onrender.com/rec')
        commit('setRec',data)
        
      } catch (err) {
        console.log(err);
        
      }
    },
    async getStocka({commit}){
      try {
        let {data} =await axios.get('https://capstone-7oya.onrender.com/stocka')
        commit('setStocka',data)
        
      } catch (err) {
        console.log(err);
        
      }
    },
    async getStock({commit}){
      try {
        let {data} =await axios.get('https://capstone-7oya.onrender.com/stock')
        commit('setStock',data)
        
      } catch (err) {
        console.log(err);
        
      }
    },
    async getRef({commit}){
      try {
        let {data} =await axios.get('https://capstone-7oya.onrender.com/ref')
        commit('setRef',data)
        
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
    async deleteProduct({commit},prod_id){
      try {
        let {data} = await axios.delete(`https://capstone-7oya.onrender.com/product/${prod_id}`)
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
