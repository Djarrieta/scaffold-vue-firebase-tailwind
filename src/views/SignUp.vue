<template>
  <Header></Header>
  <div class="max-w-sm flex flex-col mx-auto my-4 px-4 py-10 bg-gray-200 rounded-lg">
    <input 
        class="inputText"
        type="text" 
        placeholder="Nombre" 
        v-model="nombre">
    <input 
        class="inputText"
        type="text" 
        placeholder="Email" 
        v-model="email">
    <input 
      class="inputText"
      type="password" 
      placeholder="password"
      v-model="password">
    <input 
      class="inputText"
      type="password" 
      placeholder="Confirm password"
      v-model="password2">
    <div 
      v-if="problems"
      class="w-full text-red-600 text-xs my-4 p-1 rounded">
        {{problems}}
    </div>
    <button 
      @click="signUp"
      class="mt-2">Sign Up
    </button>
    <router-link 
        class=" text-center text-xs mt-3 hover:text-blue-400"
        to="/signin">
            sign In</router-link>
  </div>
</template>

<script>
import Header from "@/components/Header"
import firebase from "firebase"
export default {
    name:"SignIn",
    components:{Header},
    data(){
      return{
        nombre:"",
        email:"",
        password:"",
        password2:"",
        problems:""
      }
    },
    created(){
        const self=this
        //user
        firebase.auth().onAuthStateChanged((user)=> {
          if(user){self.$router.replace("/")}
        })
    },
    methods:{
      signUp(){
        if(!this.nombre){
            this.problems="Nombre no válido."
            return
        }
        if(this.password!=this.password2){
            this.problems="Las contraseñas no coinciden."
            return
        }
        firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(()=>{
            this.$router.replace("/")
            this.problems=""
        })
        .catch(e=>{
          console.log(e.code)
          switch(e.code){
            case "auth/invalid-email":
              this.problems="Correo inválido."
              break;
            case "auth/email-already-in-use":
              this.problems="Ya hay una cuenta vinculada a este correo."
              break;
            case "auth/weak-password":
              this.problems="Coloca una contraseña más dificil de adivinar."
              break;
            default:
              this.problems="Hubo un problema, vuelve a intentarlo."
          }
        })
      },
    },
}
</script>