<template>
    <div>
        <Postform @submit="savePost($event)"  />
    </div>
</template>
<script>
import axios from "axios"
import Postform from "@/components/admin/ayarlar/ayarPostform"
export default {
    layout: "adminLayout",
    components : {
        Postform
    },
    // forma girilen veriler database e kayıt edilsin 
    methods: {
        // kaydet butonuna basıldığında bu fonksiyon ile potform daki create altındaki verileri kayıt ediyor...
        savePost(post){
            // Geçici kod...vuex e taşınacak
                //    axios.post("https://znews-realtime.firebaseio.com/ayarlar.json", post)
                //    .then(res => {
                //        this.$router.push("/ayarlar")
                //    })

            // vuex store da addPost actions ını tetikler post verisini de gönderir
                this.$store.dispatch("addPost", post)
                .then(response => {
                    this.$router.push("/ayarlar")
                })
            
        }
    },
}
</script> 