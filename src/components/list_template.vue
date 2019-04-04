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
    props : [
      'item' , "index"
    ] ,
    //数据模型
    data () {
      return {
        msg : ''
      }
    } ,
    //方法
    methods : {
      toDetail () {
        //跳转到详情页 + 传参过去
        //wx.navigateTo( { url : '/pages/detail/main?index=' + this.index } );
        wx.navigateTo( { url : '../detail/main?index=' + this.index } );
      }

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
<style  scoped         >
  .tmpContainer {
    display: flex;
    flex-direction: column;
    border-bottom: 1rpx solid #eee;
  }

  .avatar_data {
    padding: 10rpx;
  }

  .avatar_data img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
  }

  .avatar_data span {
    font-size: 28rpx;
    color: #333;
  }

  .compnay {
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
  }

  .detail_img {
    width: 100%;
    height: 460rpx;
  }

  .content {
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
  }

  .view_star_container img {
    width: 32rpx;
    height: 32rpx;
    vertical-align: middle;
    margin-left: 10rpx;
  }

  .view_star_container span {
    font-size: 28rpx;
    color: #333;
    margin-left: 10rpx;
  }

</style>
