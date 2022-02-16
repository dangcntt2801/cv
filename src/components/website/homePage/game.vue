
<template>
<swiper :slidesPerView="3" :spaceBetween="30" :slidesPerGroup="1" :loop="true" :loopFillGroupWithBlank="true" 
:navigation="false" class="mySwiper">
  <swiper-slide>  
      <div class="content">
        <img src="/img/happy-land.jpeg" alt="">
        <div class="content-text">
            <h5>Happy Land</h5>
            <p>Game nông trại của người Việt</p>
        </div>
      </div>
  </swiper-slide>
  <!-- <swiper-slide>  
      <div class="content">
        <img src="/img/liveauitemimg.png" alt="">
        <div class="content-text">
            <h5>Happy Land</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
  </swiper-slide>
  <swiper-slide>  
      <div class="content">
        <img src="/img/liveauitemimg.png" alt="">
        <div class="content-text">
            <h5>Happy Land</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
  </swiper-slide>
  <swiper-slide>  
      <div class="content">
        <img src="/img/liveauitemimg.png" alt="">
        <div class="content-text">
            <h5>Happy Land</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
  </swiper-slide>
  <swiper-slide>  
      <div class="content">
        <img src="/img/liveauitemimg.png" alt="">
        <div class="content-text">
            <h5>Happy Land</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
  </swiper-slide> -->
  
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        
        
    };
  },
  methods: {
    
  }
  
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
    color: #000;
    background: #0A1F3A;
    border-radius: 10px !important;
}
.content img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.content-text {
    padding: 20px;
    color: #fff;
}
.content-text h5 {
    color: #B1BBD4;
    margin: 10px 0;
    font-size: 12px;
}
</style>






