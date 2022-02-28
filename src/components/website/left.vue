<template>
  <div id="left" :class="isExpand == true ? 'zoom-out' : ''">
      <div class="avatar">
          <img src="/img/avatar.jpeg" alt="">
          <div class="name">{{myAccount.msisdn}}</div>
          <div class="email">{{myAccount.phone}}</div>
      </div>
      <div class="menu">
          <div class="navigation dashboard">
              <div class="navigation-title">
                  <div> {{ $t('game.setting') }} </div>
              </div>
              <div class="navigation-box">
                  <router-link :to="{ name: 'about'}">
                    <div class="navigation-item"
                    :class="currentRouteName == 'about' ? 'active' :''"
                    >
                        <i class="fas fa-user"></i>
                        <span>{{ $t('game.infor') }}</span>
                    </div>
                  </router-link>
                  <router-link :to="{ name: 'recharge'}">
                    <div class="navigation-item"
                    :class="currentRouteName == 'recharge' ? 'active' :''">
                        <i class="fas fa-user"></i>
                        <span>{{ $t('game.recharge') }}</span>
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
              </div>
              <div class="navigation-box">
                  <router-link :to="{ name: 'happyland'}">
                    <div class="navigation-item"
                    :class="currentRouteName == 'happyland' ? 'active' :''">
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
          <div class="navigation game">
              <div class="navigation-box">
                    <div class="navigation-item" @click="logoutThen">
                       <i class="fas fa-user"></i>
                       <span style="color:#fff" >{{ $t('game.logout') }}</span>
                    </div>
              </div>
          </div>
      
      </div>

  </div>
</template>

<script>
import { mapState} from 'vuex'
import {useRouter} from 'vue-router';
import { useAuth } from '../../v3';
export default {
  name: 'left',
  setup() {
        const auth     = useAuth();
        const router   = useRouter();
        function logoutThen() {
            auth
                .logout({
                    redirect: null
                })
                .then(() => {
                    router.push({name: 'Home'});
                });
        }
        return {
                logoutThen,
            }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState("common", ["isExpand"]),
    ...mapState("accountHappyland", ["myAccount"]),
    currentRouteName() {
        return this.$route.name;
    }
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
