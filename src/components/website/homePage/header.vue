<template>
   <div class="header">
       <img src="/img/cryptonlogo.svg" alt="">
       <div class="right">
        <div class="menu">
            <a href="">Home</a>
            <a href="">Infor</a>
            <a href="">Contact</a>
        </div>
        <router-link
          to="/login"
        >
            <i class="fas fa-user"></i>
        </router-link>
       </div>
       
   </div>
</template>

<script>
export default {
  name: 'header',
  components: {

  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
    .header {
      padding-top: 36px;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1;
    }
    .right>a {
        display: inline-flex;
        width: 43px;
        height: 43px;
        background-color: #102944;
        color: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .right>a i {
        font-size: 16px;
    }
    .right {
        display: flex;
        align-items: center;
    }
    .menu {
        margin-right: 20px;
    }
    .menu>a {
        color: #fff;
        margin-left: 20px;
    }
</style>