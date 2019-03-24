<template>
  <div>
    <!--{{ msg }}-->
    <br/><br/><br/>
    <button v-if="!isShow"
            open-type="getUserInfo"
            lang="zh_CN"
            @getuserinfo="onGotUserInfo">获取用户信息
    </button>
    <div v-else>
      <img style="width: 100px;height: 100px;"
           :src="userinfo.avatarUrl"
           alt=""/>
      <div style="text-align: center;">{{ userinfo.nickName }}</div>
      <br/><br/>
      <button @click="dj">go to硅谷周刊</button>
    </div>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        msg : "ss" ,
        userinfo : {} ,
        isShow : false

      };
    } ,

    methods : {

      onGotUserInfo ( data ) {
        //console.log( data )

        //判断用户是否点击了 允许
        if ( data.mp.detail.rawData ) {
          console.log( "同意了" );

          this.getwxUserInfo();
        }
        else {
          console.log( "拒绝" );
        }
      } ,
      getwxUserInfo () {
        wx.getUserInfo( {
          success : ( data ) => {
            console.log( data );

            this.userinfo = data.userInfo;

            this.isShow = true;
          } ,
          fail : ( err ) => {
            console.log( "获取失败" );
            console.log( err );
          }
        } );
      } ,
      dj () {
        const url = "../list/main"
        wx.navigateTo({ url: url })
      } ,
    } ,

    created () {
      // let app = getApp()
    } ,
    //生命周期(mounted)
    mounted () {
      //console.log( 'mounted' )

      this.getwxUserInfo();
    }
  };
</script>

<style scoped>


</style>
