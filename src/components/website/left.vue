<template>
  <div id="left" :class="isExpand == true ? 'zoom-out' : ''">
      <div class="avatar">
          <img src="/img/avatar.jpeg" alt="">
          <div class="name">Brian Hughes</div>
          <div class="email">hughes.brian@company.com</div>
      </div>
      <div class="menu">
          <div class="navigation dashboard">
              <div class="navigation-title">
                  <div> Setting </div>
                  <div> Unique dashboard designs </div>
              </div>
              <div class="navigation-box">
                  <router-link :to="{ name: 'about'}">
                    <div class="navigation-item active">
                        <i class="fas fa-user"></i>
                        <span>Thông tin cá nhân</span>
                    </div>
                  </router-link>
                  <router-link :to="{ name: 'recharge'}">
                    <div class="navigation-item">
                        <i class="fas fa-user"></i>
                        <span>Nạp tiền</span>
                    </div>
                  </router-link>
                  <!-- <div class="navigation-item">
                      <i class="fas fa-user"></i>
                      <span>Profile</span>
                  </div> -->
              </div>
          </div>
          <div class="navigation game">
              <div class="navigation-title">
                  <div> Game </div>
                  <div> Unique dashboard designs </div>
              </div>
              <div class="navigation-box">
                  <router-link :to="{ name: 'happyland'}">
                    <div class="navigation-item">
                       <i class="fas fa-user"></i>
                       <span>Happy Lands</span>
                    </div>
                  </router-link>
   
                    <!-- <div class="navigation-item">
                        <i class="fas fa-user"></i>
                        <span>Spinter lands</span>
                    </div>
                    <div class="navigation-item">
                        <i class="fas fa-user"></i>
                        <span>Profile</span>
                    </div> -->
              </div>
          </div>
          <div class="navigation gameapplication"></div>
      </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: 'left',
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
    #left {
        background-color: #10172a;
        width: 280px;
        height: 100vh;
        float:left;
        transition: width .25s linear;
        overflow: hidden;
        color:#fff
    }
    .zoom-out {
        width: 0 !important;
    }
    /* avatar */
    .avatar {
        margin-top: 100px;
        padding: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .avatar img{
        width: 100px;
        height: 100px;
        border-radius: 9999px;
    }
    .avatar .name {
        margin-top: 30px;
        font-size: 15px;
    }
    .avatar .email {
        font-size: 14px;
        opacity: .6;
    }
    .menu {
        margin-top: 40px;
        padding: 0px 16px;
        
    }
    /* avatar end*/


    /* navigation */
    .navigation {
        margin-bottom: 30px;
    }
    .navigation-title {
        padding: 0 15px;
    }
    .navigation-title div:first-child {
        font-weight: 700;
        font-size: 12px;
        color: rgb(129, 140, 248);
    }
    .navigation-title div:last-child {
        font-size: 11px;
        opacity: .8;
    }
    .navigation-box {
        margin-top: 15px;
    }
    .navigation-item {
        padding: 10px 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 5px;
    }
    .navigation-item:hover {
        background-color:#2d3344;
        border-radius: 5px;
    }   
    .navigation-item.active {
        background-color:#2d3344;
        border-radius: 5px;
    }
    .navigation-item i {
        margin-right: 10px;
    }
    /* navigation-end */
</style>
