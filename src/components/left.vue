<template>
  <div class="box-infor" :class="toggleMenu == true ? 'active' : ''">
    <img src="../img/profile.jpg" alt="" class="box-infor-avatar" />
    <div class="box-infor-name">HUỲNH TRUNG ĐĂNG</div>
    <div class="box-infor-position">Web Designer</div>
    <menu_right />
    <div class="box-infor-list-icon">
      <a href=""><i class="fab fa-facebook-f"></i></a>
      <a href=""><i class="fab fa-google"></i></a>
    </div>
    <a href="" class="btn">{{ $t('left.download_cv') }}</a>
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang,index) in optionLangs" :key="index" :value="lang.value">{{ lang.text }}</option>
    </select> -->
    <div class="copyrights">© 2021 All rights reserved.</div>
  </div>
</template>

<script>
import menu_right from './menu-right'
export default {
  name: 'left',
  components: {
    menu_right,
  },
  props: ["toggleMenu"],
  data () {
    return {
        optionLangs: [
            {
              text: 'Vietnamese',
              value: 'vn'
            },
            {
              text: 'English',
              value: 'en'
            }
        ]
    }
  },
  methods: {

  }
}
</script>
<style scoped>
    @media only screen and (max-width: 1024px) {
        .box-infor {
            max-width: 330px;
            padding: 30px 30px 10px;
            right: -330px;
            position: absolute;
            background: #444;
            transition: all 0.25s linear;
        }
        .box-infor.active {
            right: 0;
            z-index: 9998;
        }
        .box-infor-avatar {
            height: 130px;
            width: 130px;
        }
        
    }
</style>