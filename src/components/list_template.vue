<!--
作者:chenghao
功能:vue页
-->

<!-- html代码片段 -->
<template>

  <div @tap="toDetail"
       class="tmpContainer">
    <div class="avatar_data">
      <img :src="item.avatar"
           alt="">
      <span>{{item.date}}</span>
    </div>
    <p class="company">{{item.title}}</p>
    <img class="detail_img"
         :src="item.detail_img"
         alt=""/>
    <p class="content">{{item.detail_content}}</p>
    <div class="view_star_container">
      <img src="/static/images/icon/star.png"
           alt=""/>
      <span>{{item.love_count}}</span>
      <img src="/static/images/icon/view.png"
           alt=""/>
      <span>{{item.attention_count}}</span>
    </div>
  </div>

</template>

<!-- js脚本代码片段 -->
<script>
  export default {
    name : "list_template" ,
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
<style>

</style>
