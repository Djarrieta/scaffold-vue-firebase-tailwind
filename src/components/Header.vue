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
                <button @click="createCard">+</button>
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
import firebase, { firestore } from "firebase"
import {db} from "@/main.js"

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
        createCard(){
            db.collection("prueba")
                .orderBy("cod","desc")
                .limit(1)
                .get()
                .then(x=>{
                    x.forEach(x => {
                        const cod=x.data().cod+1
                        db.collection("prueba").add({
                            fecha:firestore.FieldValue.serverTimestamp(),
                            cod
                        })
                    });
                })
        }
    }
}
</script>