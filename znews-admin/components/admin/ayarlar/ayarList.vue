<template>
     <div class="container">
      <h5 class="mt-4">Ayarlar : Liste</h5>
<table class="table table-hover" style="width: 1000px; ">
  <thead class="thead-dark">
    <tr >
      <th scope="col">Site Başlık</th>
      <th scope="col">Site Açıklama</th>
      <th scope="col">E-Mail Adresi </th>
    </tr>
  </thead>
  <tbody>
    <tr   
    v-for="post in posts" 
    :key="post.id"  
    :post="post">
      <td>{{post.title }}</td>
      <td>{{post.descriptions}} </td>
      <td>{{post.email}} </td>
      <td>
          <button class="btn btn-success" @click.prevent="$router.push('/ayarlar/' + post.id)">Düzenle</button>
      </td>
   
     
    </tr>
    
   
  </tbody>
</table>
    </div>
</template>
<script>
export default {
  // pages den gönderilen veri alındı
  props : {
        posts : {
            required : true,
        }
    }
   
}
</script>