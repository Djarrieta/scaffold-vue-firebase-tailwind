<template>
  <Header></Header>
  <div class="max-w-sm flex flex-col mx-auto my-4 px-4 py-10 bg-gray-200 rounded-lg">
    <input 
        class="inputText"
        type="text" 
        placeholder="Email" 
        v-model="email">
    <input 
      class="inputText"
      type="password" 
      placeholder="pass"
      v-model="password">
    <div 
      v-if="problems"
      class="w-full text-red-600 text-xs my-4 p-1 rounded">
        {{problems}}
    </div>
    <button 
      @click="signIn"
      class="mt-2">Sign In
    </button>
    <router-link 
      to="/signup"
      class=" text-center text-xs mt-3 hover:text-blue-400">
        sign Up</router-link>
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
        user:"",
        email:"",
        password:"",
        problems:""
      }
    },
    created(){
        const self=this
        //user
        firebase.auth().onAuthStateChanged(function(user) {
          self.user=user
          if(self.user){self.$router.replace("/")}
        })
        
    },
    methods:{
      signIn(){
        firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(()=>this.problems="")
        .catch(e=>{
          console.log(e.code)
          switch(e.code){
            case "auth/invalid-email":
              this.problems="Correo inválido."
              break;
            case "auth/user-not-found":
              this.problems="El correo ingresado no existe."
              break;
            case "auth/wrong-password":
              this.problems="Contraseña incorrecta."
              break;
            default:
              this.problems="Hubo un problema, vuelve a intentarlo."
          }
        })
      },
    },
}
</script>
