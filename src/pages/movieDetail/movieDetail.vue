<!--
作者:chenghao
功能:vue页
-->

<!-- html代码片段 -->
<template>

  <div>
    <div class="movieDetailContainer"
         v-if="movieDetail.images">
      <img :src="movieDetail.images.large"
           alt="">
      <p class="movie_name">{{movieDetail.original_title}}</p>
      <div class="detail_content">
        <span>评分:{{movieDetail.rating.average}}</span>
        <span>导演:{{movieDetail.directors[0].name}}</span>
        <span>主演:{{movieDetail.casts[0].name}} {{movieDetail.casts[1].name}} {{movieDetail.casts[2].name}}</span>
      </div>
      <button>我要观影</button>
    </div>
  </div>

</template>

<!-- js脚本代码片段 -->
<script>
  import { mapState } from 'vuex'

  export default {
    name : "movieDetail" ,
    //数据模型
    data () {
      return {
        movieDetail : {}
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
      ...mapState( [ 'moviesArr' ] )
    } ,
    //生命周期(mounted)
    mounted () {

    } ,
    beforeMount () {
      this.movieDetail = this.moviesArr
    } ,
  }
</script>

<!-- 样式代码片段  scoped -->
<style src="./movieDetail.css"
       scoped>
</style>
