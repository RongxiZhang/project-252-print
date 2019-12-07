<template>
    <div class="body">
        <div class="header">
            <div class="in-width">
                <van-row class="pd-t-55">
                    <van-col span="4" style="text-align: left;"><a href=""><img src="/static/app_interface/images/user/scan_icon.png" alt="scan" /></a></van-col>
                    <van-col span="16">我的</van-col>
                    <van-col span="4" style="text-align: right;"><a href=""><img src="/static/app_interface/images/user/setting_icon.png" alt="setting" /></a></van-col>
                </van-row>
                <van-row class="mg-t-45">
                    <van-col span="18">
                        <div class="user-name">Holy Oracle</div>
                        <div class="create-time mg-t-7">2019年加入</div>
                    </van-col>
                    <van-col span="6" class="head-img"><a href=""><img src="/static/app_interface/images/user/headimg.png" alt="headimg" width="161" height="161" /></a></van-col>
                </van-row>
                <van-row>
                    <van-col span="4" class="text-left">
                        <div class="font32"><a href="">224</a></div>
                        <div class="font26">关注</div>
                    </van-col>
                    <van-col span="4" class="text-left">
                        <div class="font32"><a href="">346</a></div>
                        <div class="font26">粉丝</div>
                    </van-col>
                    <van-col span="16" class="text-right font26" style="padding-right:10px;">
                        <div>&nbsp;</div>
                        <div><router-link to="/user/personal">编辑个人资料</router-link></div>
                    </van-col>
                </van-row>
            </div>
        </div>
        <div class="main">
            <div class="in-width">
                <div class="user-box">
                    <div class="in-title font32 text-left">
                        <van-row>
                            <van-col span="4" class="tag"></van-col>
                            <van-col span="20" class="title">我的帐号</van-col>
                        </van-row>
                    </div>
                    <div class="box font24">
                        <van-col span="6">
                            <a href=""><dl class=" text-center">
                                <dt><img src="/static/app_interface/images/user/qianbao_icon.png" width="44" height="39" alt="钱包" /></dt>
                                <dd>我的钱包</dd>
                            </dl></a>
                        </van-col>
                        <van-col span="6">
                            <a href=""><dl>
                                <dt><img src="/static/app_interface/images/user/youhuiquan_icon.png" width="44" height="44" alt="优惠券" /></dt>
                                <dd>优惠券</dd>
                            </dl></a>
                        </van-col>
                        <van-col span="6">
                            <a href=""><dl>
                                <dt><img src="/static/app_interface/images/user/order_icon.png" width="46" height="44" alt="打印订单" /></dt>
                                <dd>打印订单</dd>
                            </dl></a>
                        </van-col>
                        <van-col span="6">
                            <a href=""><dl>
                                <dt><img src="/static/app_interface/images/user/itembank_icon.png" width="40" height="44" alt="图库详单" /></dt>
                                <dd>图库详单</dd>
                            </dl></a>
                        </van-col>
                    </div>
                </div>
            </div>
            <div class="in-title font32 text-left mg-t-7 mg-l-10">
                <van-row>
                    <van-col span="4" class="tag"></van-col>
                    <van-col span="20" class="title">我的内容</van-col>
                </van-row>
            </div>
            <div class="action-box font24 mg-t-7" style="height:140px;">
                <van-col span="6">
                    <a href=""><dl>
                        <dt><img src="/static/app_interface/images/user/ziliao_icon.png" width="44" height="44" alt="已购资料" /></dt>
                        <dd>已购资料</dd>
                    </dl></a>
                </van-col>
                <van-col span="6">
                    <a href=""><dl>
                        <dt><img src="/static/app_interface/images/user/lishi_icon.png" width="44" height="44" alt="我的历史" /></dt>
                        <dd>我的历史</dd>
                    </dl></a>
                </van-col>
                <van-col span="6">
                    <a href=""><dl>
                        <dt><img src="/static/app_interface/images/user/xiazai_icon.png" width="44" height="44" alt="我的下载" /></dt>
                        <dd>我的下载</dd>
                    </dl></a>
                </van-col>
                <van-col span="6">
                    <a href=""><dl>
                        <dt><img src="/static/app_interface/images/user/shoucang_icon.png" width="46" height="44" alt="我的收藏" /></dt>
                        <dd>我的收藏</dd>
                    </dl></a>
                </van-col>
            </div>
            <div class="division"></div>
            <div class="cell" style="padding:0 30px;">
                <van-cell title="店铺管理" is-link url="#" class="text-left cell-row">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <van-icon
                            name="/static/app_interface/user/dianpu_icon.png"
                            slot="icon"
                            style="line-height: 90px; width:38px; height:38px;"
                    />
                    <van-icon
                            name="arrow"
                            slot="right-icon"
                            style="line-height: 90px;"
                            color="#cecece"
                    />
                </van-cell>
                <van-cell title="我要成为打印主" is-link url="#" class="text-left cell-row">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <van-icon
                            name="/static/app_interface/user/xinjianzhujizhujipeizhi_icon.png"
                            slot="icon"
                            style="line-height: 90px; width:38px; height:38px;"
                    />
                    <van-icon
                            name="arrow"
                            slot="right-icon"
                            style="line-height: 90px;"
                            color="#cecece"
                    />
                </van-cell>
                <van-cell title="我要当学霸" is-link url="#" class="text-left cell-row">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <van-icon
                            name="/static/app_interface/user/xueba_icon.png"
                            slot="icon"
                            style="line-height: 90px; width:38px; height:38px;"
                    />
                    <van-icon
                            name="arrow"
                            slot="right-icon"
                            style="line-height: 90px;"
                            color="#cecece"
                    />
                </van-cell>
                <van-cell title="联系我们" is-link url="#" class="text-left cell-row">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <van-icon
                            name="/static/app_interface/user/lianxidianhua_icon.png"
                            slot="icon"
                            style="line-height: 90px; width:38px; height:38px;"
                    />
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    .header {
        width:750px;
        height:436px;
        background: url("/static/app_interface/images/user/header_bg.png");
        font-size:36px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:50px;
        margin: 0 auto;
    }

    .header .in-width .user-name {
        color:#333333;
        font-size:42px;
        font-weight:500;
        text-align: left;
    }

    .header .in-width .create-time {
        color:#999999;
        font-size:28px;
        font-weight:400;
        text-align: left;
        margin-left:2px;
    }

    .header .in-width .head-img img {
        width:161px;
        height:161px;
        border-radius: 100px;
    }

    .in-width .user-box {
        background: url("/static/app_interface/images/user/user_box.png");
        width:710px;
        height:228px;
    }

    .box a, .action-box a {
        color:#333333;
    }

    .in-width .user-box .box dl {
        margin-top:20px;
    }

    .in-width .user-box .box dl dt {
        height:60px;
    }

    .main .action-box dl {
        margin-top:10px;
    }

    .main .action-box dl dt {
        height: 60px;
    }
</style>
