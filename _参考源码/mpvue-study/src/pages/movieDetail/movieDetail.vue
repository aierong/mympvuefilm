<template>
    <div class="movieDetailContainer" v-if="movieDetail.images">
        <img :src="movieDetail.images.large" alt="">
        <p class="movie_name">{{movieDetail.original_title}}</p>
        <div class="detail_content">
            <span>评分:{{movieDetail.rating.average}}</span>
            <span>导演:{{movieDetail.directors[0].name}}</span>
            <span>主演:{{movieDetail.casts[0].name}} {{movieDetail.casts[1].name}} {{movieDetail.casts[2].name}}</span>
        </div>
        <button>我要观影</button>
    </div>
</template>

<script>

import {mapState} from 'vuex'


export default {
    data(){
        return {
            movieDetail:{}
        }
    },
    beforeMount(){
        this.movieDetail = this.moviesArr[this.$mp.query.index]
    },
    computed:{
        ...mapState(['moviesArr'])
    }   
}
</script>

<style>

.movieDetailContainer{
    display: flex;
    flex-direction: column;
}

.movieDetailContainer img{
     width: 70%; 
    height: 700rpx;
    margin: 50rpx auto;
}

.movie_name {
    font-size: 40rpx;
    text-align: center;
    font-weight: bold;
}

.detail_content{
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-top: 30rpx;
    line-height: 50rpx;
    font-size: 26rpx;
}

button{
    width: 70%;
    height: 80rpx;
    background: green;
    line-height: 80rpx;
    color:#fff;
    font-size: 28rpx;
    margin-top: 20rpx;
}


</style>


