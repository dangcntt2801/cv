<template>
  <section class="home wrap" v-if="tab == actived">
      <h2>HUỲNH TRUNG ĐĂNG</h2>
      <h4 style="font-weight: lighter;">FRONTEND DEVELOPER</h4>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "home",
  data() {
    return {
        tab: 1
    };
  },
  computed: {
    ...mapGetters({
      actived: 'common_cv/tab'
    })
  },
  methods: {
  },
  created: function () {
  },
};
</script>
<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media only screen and (max-width: 1024px) {
    .home h2 {
        text-align: center;
    }
    .home h4 {
        font-size: 18px;
    }
}
</style>
