<template>
   <div>
        <AyarList :posts="fetchedPosts"/>
</div>   
    
</template>
 <script>
import AyarList from '@/components/admin/ayarlar/ayarList';
export default {
    components : {
        AyarList
    },
    // liste güncellensin
    computed :{
        fetchedPosts(){
            return this.$store.getters.getPosts
        }
    },
}
</script>