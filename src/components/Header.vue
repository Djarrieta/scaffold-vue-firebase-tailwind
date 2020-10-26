<template>
    <div class=" bg-gray-400">
        <div class="container m-auto p-2 flex justify-between">
            <div>
                <router-link to="/">
                    <button>🏠</button>
                </router-link>
                <router-link to="/about">
                    <button>About</button>
                </router-link>
            </div>
            <span>{{userEmail}}</span>
            <div>
                <button 
                    @click="signOut" 
                    v-if="user">
                        Salir</button>
                <router-link 
                    to="/signin"
                    v-if="!user">Sign In</router-link>
                <router-link 
                    to="/signup"
                    v-if="!user"><button>Sign Up</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
export default {
    name:"Header",
    data(){
        return{
            user:"",
            userEmail:""
        }
    },
    created(){
        const self=this
        //user
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                self.userEmail=user.email
            }
            self.user=user
        })
    },
    methods:{
        signOut(){
            firebase.auth().signOut()
            .then(()=>this.userEmail="")
            .catch(e=>console.error(e))
        },

    }
}
</script>