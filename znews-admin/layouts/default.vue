<template>
  <div>
    <Header />
    <div id="content">
      <div class="container-fluid">
      <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/admin/header';
export default {
  components : {
    Header
  }
}
</script>

