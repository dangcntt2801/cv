<template>
    <div class="main">
        <div class="circlebg1">
            <img src="/img/circlebg19.svg" alt="">
        </div>
        <div class="circlebg2">
            <img src="/img/circlebg20.svg" alt="">
        </div>
        <div class="circlebg3">
            <img src="/img/circlebg21.svg" alt="">
        </div>
        <div class="wrap">
            <header_component />
            <banner />
            <h3>Top Game</h3>
            <listgame />
            <h3>Top Player</h3>
            <player />
            <div class="footer"></div>
            <h4><a href="https://t.me/+--gv0X5CDWI0MDA9"  target="_blank">Telegram: HDNFT_suport</a></h4>
        </div>
       
    </div>
</template>

<script>
import header_component from './header.vue'
import banner from './banner.vue'
import listgame from './game.vue'
import player from './player.vue'
export default {
  name: 'home_page',
  components: {
    header_component,
    banner,
    listgame,
    player
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
    .main {
        background: #050D1D;
        width: 100%;
        color: #fff;
        position: relative;
        padding-bottom: 100px;
    }
    .wrap {
        max-width: 1100px;
        width:100%;
        margin: 0 auto;
        height: 100%;
    }
    .circlebg1{
        position: absolute;
        left: 0;
        top: 0;
        /* z-index: -1; */
    }
    .circlebg2{
       position: absolute;
        left: 0;
        right: 0;
        top: 30px;
        /* z-index: -1; */
        margin: auto;
        text-align: center;
    }
    .circlebg3{
        position: absolute;
    right: 0;
    top: 0;
    /* z-index: -1; */
    }
    .circlebg1 img ,.circlebg2 img,.circlebg3img{
        max-width: 100%;
        height: auto;
    }
    h3 {
        font-weight: 700;
        margin-bottom: 24px;
        margin: 50px 0 20px 0;
    }
</style>