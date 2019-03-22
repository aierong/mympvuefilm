<template>
  <div>
    {{ msg }}
    <br>
    <button open-type="getUserInfo"
            lang="zh_CN"
            @getuserinfo="onGotUserInfo">获取用户信息</button>

  </div>







</template>

<script>

  export default {
    data () {
      return {
        msg : "ss" ,
        userinfo : {}

      };
    } ,

    methods : {

      onGotUserInfo ( data ) {
        //console.log( data )

        if ( data.mp.detail.rawData ) {
          console.log( '同意了' )
        }
        else {
          console.log( '拒绝' )
        }
      } ,
    } ,

    created () {
      // let app = getApp()
    } ,
    //生命周期(mounted)
    mounted () {
      //console.log( 'mounted' )

      wx.getUserInfo( {
        success : ( data ) => {
          console.log( data )
        } ,
        fail : ( err ) => {
          console.log( '获取失败' )
          console.log( err )
        }
      } )

    } ,
  };
</script>

<style scoped>


</style>
