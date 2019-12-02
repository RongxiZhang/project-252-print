<template>
    <div>
        Home
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [],
      navList: [
        {
          name: 'user',
          navItem: '个人中心'
        }
      ],
      loading: false,
      finished: false
    }
  }
}
</script>

<style scoped>

</style>
