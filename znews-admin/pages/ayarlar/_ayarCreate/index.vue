<template>
   <div>
        <AyarPostform 
        @submit="updatePost($event)"
        :post="fetchedPosts" 
        />
</div>   
    
</template>
 <script>
import axios from "axios"
import AyarPostform from '@/components/admin/ayarlar/ayarPostform';
export default {
    components : {
        AyarPostform
    },
    // düzenlenecek veri gelsin
     asyncData(context) {
        return axios.get("https://znews-realtime.firebaseio.com/ayarlar/" + context.params.ayarCreate + ".json")
        
        .then(response => {
            // console.log(context.params.ayarCreate)
            return {
                fetchedPosts : response.data        
            }
        })
    },
    // ayarUpdate işlemi
    methods : {
        updatePost(editedPost){
            this.$store.dispatch("updatePost",  {...editedPost, id : this.$route.params.ayarCreate }) 
                .then(response => {
                    // console.log(editedPost)
                    this.$router.push("/ayarlar")
                })
        }
}
  


}
</script>