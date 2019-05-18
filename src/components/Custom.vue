<template>
  <div class="custom">
    <p>{{customMassage}}</p>
    <p>{{customMassageOuter}}</p>
  </div>
</template>

<script>
export default {
  name: 'Custom',
  props: {
    customMassageOuter: String
  },
  data: () => ( 
    {
      customMassage: '111'
    }
  )
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  p {
    color: green;
  }
</style>
