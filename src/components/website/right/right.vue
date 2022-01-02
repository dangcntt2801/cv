<template>
  <div id="right" :class="isExpand == true ? 'expand' : ''">
      <header_component />
      <div class="contetnt">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import header_component from './header.vue'
import { mapState } from 'vuex'
export default {
  name: 'right',
  components: {
    header_component
  },
  data () {             
    return {
       
    }
  },
  computed: {
    ...mapState("common", ["isExpand"]
    )
  },
  methods: {

  },
}
</script>
<style scoped>
    #right {
        width: calc(100% - 280px);
        height: 100vh;
        float: right;
        transition: width .25s linear;
        position: relative;
    }
    .expand {
        width:100% !important;
    }
    .contetnt {
        width: 100%;
        padding: 32px;
        margin-top:64px;
        height: calc(100vh - 64px);
        overflow-y: auto;
    }
</style>
