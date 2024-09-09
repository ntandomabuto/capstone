import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


/*eslint-disable*/
import router from '@/router'

export default createStore({
  state: {
    order:null,
    product: null,
    stocka:null,
    stock:null,
    recent_invoice:null,
    recent_sales:null,
    users:null
  },
  getters: {
  },
  mutations: {
    setOrders(state,payload){
      state.order=payload
    },
    setUsers(state,payload){
      state.users=payload
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
    async loginUser({commit},info){
        let {data} =await axios.post('https://capstone-7oya.onrender.com/user/login',info)
        $cookies.set('token',data.token)
      if (!data.err){
        toast("login is successful",{
          "theme": "auto",
          "type": "default",
          "autoClose":10000,
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/')
      // location.reload()
        console.log(data);
        
        
    },
    async registerUser({commit},info){
        let {data} =await axios.post('https://capstone-7oya.onrender.com/user/register',info)
        console.log(data);
        // alert('Siigned up now login on the profile page')
        toast("Signed up! Now Login on the profile page", {
          "theme": "auto",
          "type": "default",
          "dangerouslyHTMLString": true
        })
        // await router.push('/')
        // location.reload()
  
        
        
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
    // async getUser({commit},user_id){
    //   try {
    //     let {data} =await axios.get(`https://capstone-7oya.onrender.com/user/${user_id}`)
    //     commit('setUsers',data)
        
    //   } catch (err) {
    //     console.log(err);
        
    //   }
    // },
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
    async getProduct({commit},id){
      try {
        let {data} = await axios.get(`https://capstone-7oya.onrender.com/product/${id}`)
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
