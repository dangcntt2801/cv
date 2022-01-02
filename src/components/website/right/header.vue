<template>
  <div id="header">
      <span class="header-bar" @click="expand">
          <i class="fas fa-bars"></i>
      </span>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'
export default {
  name: 'header',
  data () {
    return {
       
    }
  },
  methods: {
      ...mapMutations({
          fetchIsExpand: 'common/CHANGEISEXPAND',
      }),
      expand() {
          this.fetchIsExpand()
      }

  },
  created () {
  }
}
</script>
<style scoped>
    #header {
        display: flex;
        align-items: center;
        height: 64px;
        border: 1px solid #e7e7e7;
        padding: 12px 25px;
        position: fixed;
        width:100%;
    }
    .header-bar {
        cursor: pointer;
        color: #000;
    }
</style>
