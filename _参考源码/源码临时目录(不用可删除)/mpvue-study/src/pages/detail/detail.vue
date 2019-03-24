<template>
    <div  class="detailContainer">
        <img class="detail_img" :src="isMusicPlay?detailObj.music.coverImgUrl:detailObj.detail_img" alt="">
        <img @tap="handleMusicPlay" class="music_img" :src="isMusicPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="">
        <div class="avatar_data">
            <img  :src="detailObj.avatar" alt="">
            <span>{{detailObj.author}}</span>
            <span>发布于</span>
            <span>{{detailObj.date}}</span>
        </div>
        <p class="company">{{detailObj.title}}</p>
        <div class="collection_share_container">
            <div class="collection_share">
                <img @tap="handleCollection" :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="">
                <img @tap="handleShare" src="/static/images/icon/share-anti.png" alt="">
            </div>
            <div class="line"></div>
        </div>
        <button open-type="share">转发此文章</button>
        <p class="content">{{detailObj.detail_content}}</p>
    </div>
</template>

<script>

import {mapState}  from 'vuex'
import isPlayObj from '../../datas/isPlay'

export default {
//    onLoad(options){
//        console.log(options)
//    },
    data(){
        return {
            detailObj:{},
            isCollected:false, //标识该文章是否被收藏
            isMusicPlay:false  //标识音乐是否播放
        }
    },
    beforeMount(){
        // console.log(this)
        // console.log(index)
        this.index = this.$mp.query.index

        //预处理工作: 本地是否收藏的缓存
        let oldStorage = wx.getStorageSync('isCollected');
        if (!oldStorage) {
            wx.setStorage({
              key: 'isCollected',
              data: {}
            });
        } else {
            this.isCollected = (oldStorage[this.index]?true:false);
        }

        //判读当前页面加载的时候 音乐是否在播放
        if (isPlayObj.pageIndex === this.index && isPlayObj.isPlay) {
            this.isMusicPlay = true
        } else {
            this.isMusicPlay = false
        }

        //监听音乐的播放和暂停
        wx.onBackgroundAudioPlay(()=>{
            console.log("music start")
            this.isMusicPlay = true
            isPlayObj.pageIndex = this.index
            isPlayObj.isPlay = this.isMusicPlay
        });

        wx.onBackgroundAudioPause(()=>{
            console.log("music stop")
            this.isMusicPlay = false
            // isPlayObj.pageIndex = this.index
            isPlayObj.isPlay = this.isMusicPlay
        })
    },
    mounted(){
        this.detailObj = this.listTmp[this.index]
        console.log(this.detailObj)
    },
    computed:{
        ...mapState(['listTmp'])
    },
    methods:{
        handleCollection(){
            //修改状态
            this.isCollected = !this.isCollected;
            let title = this.isCollected?'收藏成功':'取消收藏'
            wx.showToast({
              title: title, //提示的内容,
              icon: 'success', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: res => {}
            });

            //读取之前本地缓存的状态 查看是否收藏
            let oldStorage = wx.getStorageSync('isCollected');

            // oldStorage = {};
            oldStorage[this.index] = this.isCollected

            //将本次设置的结果再缓存到本地
            wx.setStorage({
              key: 'isCollected',
              data: oldStorage
            });

        },
        handleMusicPlay(){
            this.isMusicPlay = !this.isMusicPlay;
            let {dataUrl, title} = this.detailObj.music

            if (this.isMusicPlay) {
                wx.playBackgroundAudio({
                    dataUrl,
                    title
                }) 
            } else {
                wx.pauseBackgroundAudio()
            }
        },
        handleShare(){
            wx.showActionSheet({
              itemList: ["分享到朋友圈","分享到微博","分享给微信好友"], //按钮的文字数组，数组长度最大为6个,
              itemColor: '#000000', //按钮的文字颜色,
              success: res => {}
            });
        }
    }
}
</script>

<style>
.detailContainer{
    display: flex;
    flex-direction: column;
}

.detail_img{
    width: 100%;
    height: 460rpx;
}

.avatar_data{
    padding: 10rpx
}

.avatar_data img{
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
}

.avatar_data span{
    font-weight: 24rpx;
    margin-left: 6rpx;
}

.company {
    font-size: 32rpx;
    font-weight: bold;
    padding: 10rpx;
}

.collection_share {
    float: right;
    margin-right: 30rpx;
}

.collection_share img {
    width: 90rpx;
    height: 90rpx;
    margin-right: 20rpx;
}

.collection_share_container{
    position: relative;
}

.line {
    position: absolute;
    top: 45rpx;
    left: 5%;
    width: 90%;
    height: 1rpx;
    background: #eee;
    z-index: -1
}

.content{
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
}

.music_img {
    height: 60rpx;
    width: 60rpx;
    position: absolute;
    top: 200rpx;
    left: 50%;
    margin-top: -30rpx;
}

</style>


