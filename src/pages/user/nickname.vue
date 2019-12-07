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
                <van-cell-group>
                    <van-field type="text" placeholder="请输入用户名" size="18px" value="Holy Oracle" right-icon="close" />
                </van-cell-group>
            </div>
        </div>
        <div class="footer">
            <van-button type="primary" size="large" style="font-size:32px; height:94px;" color="#19A787">保存</van-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        title: '修改昵称'
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push('/user/personal');
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

    .cell {
        border-bottom: 1px solid #F0F0F0;
    }

    .cell .headimg {
        font-size:28px;
    }

    .cell .headimg img {
        border-radius: 100px;
    }

    .van-cell {
        height:110px;
        line-height:110px;
        font-size:28px;
    }
</style>
