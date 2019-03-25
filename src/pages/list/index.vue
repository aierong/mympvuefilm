<!--
作者:chenghao
功能:vue页
-->

<!-- html代码片段 -->
<template>

  <div>

    <div class="listContainer">
      <!--

    swiper api:  https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html

      indicator-dots		        是否显示面板指示点
      indicator-color		        指示点颜色
      indicator-active-color		当前选中的指示点颜色
      autoplay	       Boolean		是否自动切换(默认:false)
      -->
      <swiper indicator-dots
              autoplay="true"
              indicator-color="pink"
              indicator-active-color="green">
        <swiper-item>

          <img src="/static/list/p1.jpg"
               alt=""/>
        </swiper-item>
        <swiper-item>

          <img src="/static/list/p2.jpg"
               alt=""/>
        </swiper-item>
        <swiper-item>

          <img src="/static/list/p3.jpg"
               alt=""/>
        </swiper-item>
        <swiper-item>

          <img src="/static/list/p4.jpg"
               alt=""/>
        </swiper-item>
      </swiper>
    </div>

    <div class="listContainerdemo1">

      <swiper indicator-dots
              autoplay="true"
              indicator-color="pink"
              indicator-active-color="green">
        <swiper-item>
          <!--这里用的是微信小程序自带的图片组件 image-->
          <image src="/static/images/detail/carousel/01.jpg"/>
        </swiper-item>
        <swiper-item>
          <image src="/static/images/detail/carousel/02.jpg"/>
        </swiper-item>
        <swiper-item>
          <image src="/static/images/detail/carousel/03.jpg"/>
        </swiper-item>
        <swiper-item>
          <image src="/static/images/detail/carousel/04.jpg"/>
        </swiper-item>
      </swiper>

    </div>
  </div>

</template>

<!-- js脚本代码片段 -->
<script>
  export default {
    name : "index" ,
    //数据模型
    data () {
      return {
        msg : ''
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
  }
</script>

<!-- 样式代码片段  scoped -->
<style scoped>
  .listContainer swiper img {
    width: 100%;
    height: 100%;
  }

  .listContainerdemo1 swiper image {
    width: 100%;
    height: 100%;
  }
</style>
