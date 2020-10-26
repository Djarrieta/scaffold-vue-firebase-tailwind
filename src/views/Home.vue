<template>
  <div class="bg-gray-100 min-h-screen flex flex-col justify-between">
    <Header></Header>
    <div class="container m-auto pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card 
        v-for="(dato,i) in datos" 
        :key="i"
        :dato="dato" ></Card>
    </div>
    <div class="w-full bg-gray-600 p-2 text-center">
      <button 
        class=" text-xs"
        @click="seeMore">Ver Más</button>
    </div>
  </div>
</template>

<script>
import {db} from "@/main.js"
import firebase from "firebase"
import Header from "@/components/Header"
import Card from "@/components/Card"

export default {
  name: 'Home',
  components: {
    Header,Card
  },
  props:["dato"],
  data(){
    return{
      userId:"",
      userEmail:"",
      datos:[],
      inicialLoad:5,
      loadMore:2
    }
  },
  created(){
    const self=this
    //user
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        self.userId=user.id
        self.userEmail=user.email
      }
    })

    //database
    db.collection("prueba")
      .orderBy("cod","desc")
      .limit(3)
      .get()
      .then(x=>{
        this.datos=[]
        x.forEach(x=> {
          this.datos.push(x.data())
        });
      })
  },
  methods:{
    seeMore(){
      const lastCod= this.datos[this.datos.length-1].cod
      db.collection("prueba")
      .orderBy("cod","desc")
      .startAfter(lastCod)
      .limit(2)
      .get()
      .then(x=>{x.forEach(x=>{
        this.datos.push(x.data())
      })})
    }
  }
}
</script>
