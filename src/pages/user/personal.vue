<template>
    <div class="body">
        <div class="header">
            <van-nav-bar
                    :title=title
                    left-arrow
                    @click-left="onClickLeft">
                <van-icon name="arrow-left" slot="left" color="#19a787" />
            </van-nav-bar>
        </div>
        <div class="main">
            <div class="cell mg-t-19">
                <div class="in-width">
                    <van-row class="headimg">
                        <van-col span="12" style="margin-top:54px;" class="text-left">头像</van-col>
                        <van-col span="12" class="text-right"><img src="/static/app_interface/images/user/headimg.png" alt="headimg" width="107" height="107" style="margin-top:19px;" /></van-col>
                    </van-row>
                </div>
                <van-cell title="昵称" is-link url="#/user/nickname" class="text-left cell-row mg-t-19" style="height:109px; line-height:109px;">
                    <van-icon
                            name="arrow"
                            slot="right-icon"
                            style="line-height: 90px;"
                            color="#cecece"
                    />
                </van-cell>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        title: '编辑个人资料'
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push('/user/');
      }
    }
  }
</script>

<style scoped>
.in-width {
    background: #FFFFFF;
    padding:0 20px;
    margin: 0;
}

.cell .headimg {
    font-size:28px;
}

.cell .headimg img {
    border-radius: 100px;
}
</style>
