<template>
    <div class="alert alert-success alert-dismissible fade show" role="alert" v-show="typeAlert.type == 'success' && typeAlert.control == true">
      {{typeAlert.msg}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="typeAlert.type == 'error' && typeAlert.control == true">
      {{typeAlert.msg}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
   name: "alert",
   data() {
    return {
    }
   },
   computed: {
     ...mapState("alert", ["typeAlert"])  
   },
   methods: {
   },
   created () {
   }
   
}

</script>
<style scoped lang="scss">

</style>
