<!--
作者:chenghao
功能:vue页
-->

<!-- html代码片段 -->
<template>

  <div>
    <div @tap="toMovieDetal(index)"
         v-for="(item,index) in moviesArr"
         class="moviesContainer">
      <img class="movies_img"
           :src="item.images.large"
           alt="">
      <div class="movies_info">
        <p class="movies_name">{{item.original_title}}</p>
        <p class="movies_year">年份:{{item.year}}</p>
        <p class="movies_dir">导演:{{item.directors[0].name}}</p>
      </div>
      <p class="movies_rating">{{item.rating.average}}</p>
    </div>
  </div>

</template>

<!-- js脚本代码片段 -->
<script>
  const MOVIE_URL = "http://t.yushu.im/v2/movie/top250"

  export default {
    name : "movies" ,
    //数据模型
    data () {
      return {
        moviesArr : []
      }
    } ,
    //方法
    methods : {
      //methodsname() {
      //代码搞这里
      //},

    } ,
    //计算属性
    computed : {
      //name() {
      //代码搞这里
      //return this.data;
      //}
    } ,
    //生命周期(mounted)
    mounted () {

    } ,
    beforeMount () {
      //fly
      this.$fly.get( MOVIE_URL )
      .then( ( resp ) => {
        // console.log(movies)
        this.moviesArr = resp.data.subjects
        this.$store.dispatch( 'getMoviesArr' , this.moviesArr )
      } )
      .catch( ( error ) => {
        console.log( error )
      } )
    } ,
  }
</script>

<!-- 样式代码片段  scoped -->
<style scoped
       src="./movies.css">

</style>
