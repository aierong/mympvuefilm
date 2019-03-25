<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  // Use Vuex
  //这里我暂时关闭了，我是通过this.$store原型链访问的，所以这里关闭引入了
  //import store from '@/store/store.js'

  export default {
    computed : {
      count () {
        //return store.state.count

        return this.$store.state.count
      }
    } ,
    methods : {
      increment () {
        //store.commit( 'increment' )

        this.$store.commit( 'increment' )
      } ,
      decrement () {
        //store.commit( 'decrement' )

        this.$store.commit( 'decrement' )
      }
    }
  }
</script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
