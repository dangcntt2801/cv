<template>
  <div class="box-content">
    <about />
    <home />
    <resume />
    <skill />
  </div>
</template>

<script>
import about from './right/about'
import home from './right/home'
import resume from './right/resume'
import skill from './right/skill'
export default {
  name: 'right',
  components: {
    about,
    home,
    resume,
    skill
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
</style>