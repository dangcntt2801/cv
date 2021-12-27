<template>
  <div class="box-infor">
    <img src="../img/profile.jpg" alt="" class="box-infor-avatar" />
    <div class="box-infor-name">HUỲNH TRUNG ĐĂNG</div>
    <div class="box-infor-position">Web Designer</div>
    <div class="box-infor-list-icon">
      <a href=""><i class="fab fa-facebook-f"></i></a>
      <a href=""><i class="fab fa-google"></i></a>
    </div>
    <a href="" class="btn">{{ $t('left.download_cv') }}</a>
    <select v-model="$i18n.locale">
      <option v-for="(lang,index) in optionLangs" :key="index" :value="lang.value">{{ lang.text }}</option>
    </select>
    <div class="copyrights">© 2021 All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'left',
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
