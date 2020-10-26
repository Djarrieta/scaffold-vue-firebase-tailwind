<template>
  <div class=" fixed right-0 bottom-0 m-6">
      <img 
        class=" cursor-pointer"
        @click="createCard"
        src="https://firebasestorage.googleapis.com/v0/b/scaffold-vue-firebase-tailwind.appspot.com/o/assets%2Fadd_48px.png?alt=media&token=b9986b4a-1259-4374-9393-753f44de2b79" alt="Add">
  </div>
</template>

<script>
import { firestore } from "firebase"
import {db} from "@/main.js"

export default {
    methods:{
        createCard(){
            const self=this
            db.collection("prueba")
                .orderBy("cod","desc")
                .limit(1)
                .get()
                .then(x=>{
                    if(!x.docs.length){
                        const cod=1
                        self.firebaseCreate(cod)
                        return
                    }
                    x.forEach(x => {
                        const cod=parseInt(x.data().cod)+1
                        self.firebaseCreate(cod)
                    });
                }).catch(e=>console.log(e))
        },
        firebaseCreate(cod){
            const newCard=db.collection("prueba").doc()
            newCard.set({
                cod,
                fecha:firestore.FieldValue.serverTimestamp(),
                id:newCard.id
            }).catch(e=>console.log(e))
        }
    }
}
</script>