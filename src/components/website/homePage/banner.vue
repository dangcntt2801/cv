<template>
   <div class="banner">
       <div class="left">
           <div class="banner-img1"><img src="/img/bannerimg01.png" alt=""></div>
           <div class="banner-img2"><img src="/img/bannerimg02.png" alt=""></div>
           <div class="banner-img3"><img src="/img/bannerimg03.png" alt=""></div>
       </div>
       <div class="right">
           <h2>Discover, collect, and sell <span style="color:#019DEA">extraordinary NFTs</span></h2>
           <h4 style="color: #B1BBD4;">on the world's first & largest NFT marketplace</h4>
       </div>
   </div>
</template>

<script>
export default {
  name: 'banner',
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
    .banner {
        margin-top: 50px;
        display: flex;
    }
    .left {
        display: flex;
        width: 60%;
    }
    .right {
        padding-top: 20px;
        width: 40%;
    }
    .img {
        max-width: 100%;
        height: auto;
    }
    .banner-img1 {
        margin: 0 -85px 0 0;
    }
    .banner-img2 {
        margin: 25px -55px 0 0;
    }
    .banner-img3 {
        margin: 55px 0 0 -30px;
    }
    h2 {
        font-weight: 700;
        line-height: 1.5;
    }
</style>