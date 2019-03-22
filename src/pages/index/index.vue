<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>

  export default {
    data () {
      return {
        msg : "ss"

      };
    } ,

    components : {} ,

    methods : {

      // clickHandle ( ev ) {
      //   console.log( "clickHandle:" , ev );
      //   // throw {message: 'custom test'}
      // }
    } ,

    created () {
      // let app = getApp()
    }
  };
</script>

<style scoped>


</style>
