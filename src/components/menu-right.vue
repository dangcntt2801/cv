<template>
<div class="right">
    <div class="menu">
      <a @click="changeTab(1)" class="menu-home">
          <span>Home</span>
        <i class="fas fa-home">
          <span>Home</span>
        </i>
      </a>
      <a @click="changeTab(2)" class="menu-about">
        <span>About</span>
        <i class="fas fa-user">
          <span>About</span>
        </i>
      </a>
      <a @click="changeTab(3)" class="menu-resume"
        >
         <span>Resume</span>
        <i class="fas fa-graduation-cap">
            <span>Resume</span>
        </i>
        </a
      >
      <a @click="changeTab(4)" class="menu-resume"
        >
         <span>Skill</span>
        <i class="fas fa-graduation-cap">
            <span>Skill</span>
        </i>
        </a
      >
      <!-- <a @click="changeTab(4)" class="menu-portfolio"
        ><i class="fas fa-briefcase"><span>Portfolio</span></i></a
      >
      <a @click="changeTab(5)" class="menu-blog"
        ><i class="fas fa-book"><span>Blog</span></i></a
      >
      <a @click="changeTab(6)" class="menu-contact"
        ><i class="fas fa-address-book"><span>Contact</span></i></a
      > -->
    </div>
    <div class="arrow-nav">
      <a @click="nextTab('next')" class="arrow-nav-right"
        ><i class="fas fa-angle-right"></i
      ></a>
      <a @click="nextTab('prev')" class="arrow-nav-left"
        ><i class="fas fa-angle-left"></i
      ></a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'menu-right',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getActived: 'common_cv/tab'
    })
  },
  methods: {
    ...mapMutations({
      mutiationSetTab: 'common_cv/SETTAB'
    }),
    nextTab (option) {
      if (option === 'next') {
        if (this.getActived === 6) {
          this.mutiationSetTab(1)
        } else {
          let activedId = this.getActived + 1
          this.mutiationSetTab(activedId)
        }
      } else {
        if (this.getActived === 1) {
          this.mutiationSetTab(6)
        } else {
          let activedId = this.getActived - 1
          this.mutiationSetTab(activedId)
        }
      }
    },
    changeTab (tabId) {
      this.mutiationSetTab(tabId)
    }
  }
}
</script>
<style scoped>
    .menu > a >span {
        display: none;
    }
    @media only screen and (max-width: 1024px) {
        .menu {
            position: relative;
            right: 0;
        }
        .menu a i {
            display: none;
        }
        .arrow-nav {
            display: none;
        }
        .menu > a >span {
            display: block;
        }
    }
</style>
