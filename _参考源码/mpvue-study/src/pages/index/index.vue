<template>
    <div class="indexContainer">
        <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl" alt="">
        <button class="btn" v-else open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">点击获取用户登录的信息</button>
        <p class="username">hello {{userInfo.nickName}}</p>
        <div @tap="toDetail" class="goStudy">
           <!-- 不想上冒泡的写法  <p @tap.stop="handleChild">开启小程序之旅</p>  -->
           <p >开启小程序之旅</p> 
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            userInfo:{},
            isShow:false
        }
    },
    onLoad(){
        console.log('---wx onLoad---')
    },
    beforeMount(){
        console.log('---beforeMount---')
        this.handleGetUserInfo()
    },
    mounted(){
        console.log('---mounted---')
    },
    methods:{
        //获取用户登陆信息
        handleGetUserInfo(){
            //获取用户登陆信息
            wx.getUserInfo({
                success: (data) => {
                    this.userInfo = data.userInfo
                    console.log(this.userInfo)
                    this.isShow = true
                },
                fail:()=>{
                    console.log("获取失败")
                }
            });
        },
        getUserInfo(data){
            //判断用户是否授权
            if (data.mp.detail.rawData){
                this.handleGetUserInfo()
                //用户授权成功
                // handleGetUserInfo(rawData)
            }
        },
        toDetail(){
            // console.log("to detail")
            // wx.navigateTo({ url: '/pages/list/main' });
            wx.switchTab({ url: '/pages/list/main' });
        },
        handleChild(){
            console.log("child")
        }
    }
}

</script>

<style>

page {
    background: #8ed145; 
}

.indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.index_img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx !important;
    margin: 100rpx 0;
}

.username{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
}

.goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
}

.btn{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 100rpx 0;
    line-height: 300rpx;
    text-align: center;
    font-size: 26rpx;
}

</style>

