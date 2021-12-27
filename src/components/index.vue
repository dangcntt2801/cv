<template>
    <div class="wrapper">
      <div class="container">
        <!-- <div class="box"> -->
          <!-- <left />
          <right /> -->
        <!-- </div> -->
        <!-- <test /> -->
        <div class="content-accoutn">
            <a class="btn" @click="isActive(1)">tab1</a>
            <a class="btn" @click="isActive(2)">tab2</a>
            <account :activeTab="activeTab"/>
            <account_2 :activeTab="activeTab"/>
        </div>
      </div>
    </div>s
</template>

<script>
// import left from './left'
// import right from './right'
// import test from './menu-right'
import account from './account'
import account_2 from './account_2'
export default {
  name: 'HelloWorld',
  components: {
    // left,
    // right,
    // test
    account,
    account_2
  },
  data () {
    return {
        activeTab:2
    }
  },
  methods: {
    isActive (menuItem) {
        this.activeTab = menuItem
    }
  }
}
</script>
<style scoped>
.content-accoutn {
    overflow: auto;
}
.container {
    max-width: 100%;
}
</style>