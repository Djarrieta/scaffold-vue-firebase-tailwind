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
        @click="prevPage">Prev</button>
      <button 
        v-for="(p,i) in pages" 
        :key="i"
        @click="selectPage(i+1)"
        class="text-xs"
        :class="i+1==selectedPage ? 'bg-gray-500' : 'bg-blue-800'"
        > 
          {{i+1}} </button>
      <button 
        class=" text-xs"
        @click="nextPage">Next</button>
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
      maxPerPage:5,
      pages:[],
      selectedPage:1
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
        .onSnapshot(x=>{
          this.updateDataBase(x.size)
        })
  },
  methods:{
    updateDataBase(totalElements){
      
      if(!totalElements){return}

      let startAt=1
      this.pages=[]
      while(startAt<=totalElements){
        this.pages.push(startAt)
        startAt+=this.maxPerPage
      }
      this.updateShownData()
    },
    updateShownData(){
      
      
      const query=db.collection("prueba")
        .orderBy("cod","asc")
        .startAt(this.pages[this.selectedPage-1])
        .limit(this.maxPerPage)

      query.get().then(info=>{
        this.datos=[]
        info.forEach(d => {
          this.datos.push(d.data())
      })})
    },
    selectPage(pageNumber){
      this.selectedPage=pageNumber
      this.updateShownData()
    },
    prevPage(){
      if(this.selectedPage>1){
        this.selectedPage--
        this.updateShownData()
      }
    },
    nextPage(){
      if(this.selectedPage<this.pages.length){
        this.selectedPage++
        this.updateHomeView()
      }
    }
  }
}
</script>
