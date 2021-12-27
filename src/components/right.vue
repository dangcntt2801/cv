<template>
  <div class="box-content">
    <about />
    <home />
    <resume />
  </div>
</template>

<script>
import about from './right/about'
import home from './right/home'
import resume from './right/resume'
export default {
  name: 'right',
  components: {
    about,
    home,
    resume
  },
  data () {
    return {

    }
  }
}
</script>
