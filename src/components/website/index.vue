<template>
    <div>
        <left />
        <right />
    </div>
</template>

<script>
import left from './left'
import right from './right/right'
export default {
  name: 'HelloWorld',
  components: {
    left,
    right,
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

</style>