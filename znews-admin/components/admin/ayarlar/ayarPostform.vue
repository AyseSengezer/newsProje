<template>
     <div class="row-fluid">
    <div class="span6">
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <!-- <h5>Site Ayarları</h5> -->
          <h5>Ayarlar : Düzenle</h5>
        </div>
        
        <div class="widget-content nopadding">
          <form  class="form-horizontal" @submit.prevent="onSubmit">
            <div class="control-group">
              <label class="control-label">Site Başlık:</label>
              <div class="controls">
                <input type="text" class="span11" v-model="post.title" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Site Açıklama :</label>
              <div class="controls">
                <input type="text" class="span11" v-model="post.descriptions" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">E-Mail Adresi :</label>
              <div class="controls">
                <input type="text"  class="span11"  v-model="post.email" />
              </div>
            </div>           
            <div class="form-actions">
              <button type="submit" class="btn btn-success">Güncelle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  // pages _ayarCreate den gönderilen veri alındı
  props : {
    post : {
      type: Object,
      required : false,
    }
  },  
  // burada girilen veriler diğer sayfalarda okunmak üzere submit edildi
   methods: {
      onSubmit() {
        this.$emit("submit", this.post)   
      }
    },
    // bu form a id ye göre veri varsa gelsin yoksa boş gelsin...düzenle  butonuna bağlı olarak dolu gelir
  created(){
          this.post = this.post ? this.post : {
          id : null,    
          title : null,
          descriptions : null,
          email : null
        }
          },
  
}
</script>