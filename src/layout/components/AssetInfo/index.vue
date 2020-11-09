<template>
    <div class="assetInfo">
        <asset-item>
            <h2><img src="@/assets/assetImgs/user.png" alt="">{{$t('account.userData.title')}}</h2>
            <ul>
                <li><span class="label">A类合约累计投资</span> <span>{{stats0}}TRX</span></li>
                <li><span class="label">&nbsp;正在投资</span> <span>{{stats1}}TRX</span></li>
                <li><span class="label">B类合约累计投资</span> <span>{{stats2}}TRX</span></li>
                <li><span class="label">&nbsp;正在投资</span> <span>{{stats3}}TRX</span></li>
                <li><span class="label">C类合约累计投资</span> <span>{{stats4}}TRX</span></li>
                <li><span class="label">&nbsp;正在投资</span> <span>{{stats5}}TRX</span></li>

                <li><span class="label">团队奖励额度</span> <span>{{stats6}}TRX</span></li>
                <li><span class="label">团队领取额度</span> <span>{{stats7}}TRX</span></li>

                <li><span class="label">个人级别</span> <span>{{stats8===0?"普通用户":stats8===1?"VIP":"超级VIP"}}</span></li>
                <li><span class="label">直推总人数</span> <span>{{stats9}}</span></li>
                <li><span class="label">团队总人数</span> <span>{{stats10}}</span></li>
                <li><span class="label">总存入</span> <span>{{stats11}}TRX</span></li>
                <li><span class="label">总提取</span> <span>{{stats12}}TRX</span></li>

            </ul>
        </asset-item>
        <asset-item>
            <!--全网信息-->
            <h2><img src="@/assets/assetImgs/network.png" alt="">{{$t('account.networkData.title')}}</h2>
            <ul>
                <!--总投资数量-->
                <li><span class="label">总投资数量</span> <span>{{g0}} TRX</span></li>
                <!--资金池结余-->
                <li><span class="label">资金池结余</span> <span>{{g1}}</span></li>
                <!--会员总提币-->
                <li><span class="label">会员总提币</span> <span>{{g2}} TRX</span></li>
                <!--全球会员数-->
                <li><span class="label">全球会员数</span> <span>{{g3}} </span></li>
                <!--重启倒计时-->
                <li><span class="label">重启倒计时</span> <span>{{g4===0?"00:00:00":"12:13:06"}}</span></li>

            </ul>
        </asset-item>
        <asset-item>
            <!--推荐链接-->
            <h2><img src="@/assets/assetImgs/star.png" alt="">{{$t('account.inviteData.title')}}</h2>
            <div class="invite">
                {{host}}/?ref={{tron.account.substring(0,5)+"..."}}
            </div>
            <div class="copy">
                <!--复制-->
                <el-button  type="primary" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError">{{$t('global.copy')}}</el-button>

            </div>
        </asset-item>

    </div>
</template>
<script>
    import AssetItem from './assetItem'
    import TrxMixin from '../../../mixin/trx'

    let timer=undefined
    export default {
        components: {
            AssetItem
        },
        data() {
            return {
                address:'',
                balance: 0,
                depositsCount:0,
                freeze:0,
                withdrawnReferalFunds:0,
                referralsCount:0,
                depositsCounter:0,
                playersCount:0,
                totalReward:0,
                team:0,
                time:0,
                stats0:0,
                stats1:0,
                stats2:0,
                stats3:0,
                stats4:0,
                stats5:0,
                stats6:0,
                stats7:0,
                stats8:0,
                stats9:0,
                stats10:0,
                stats11:0,
                stats12:0,
                g0:0,
                g1:0,
                g2:0,
                g3:0,
                g4:0

            };
        },
        mixins: [TrxMixin],
        watch:{
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address));
                    this.loadData();
                });
            }
        },
        beforeDestroy() {
            if(timer){
                clearInterval(timer)
            }
        },
        mounted(){
            timer = setInterval(() => {
                this.loadData()
            }, 5000)
        },
        methods: {
            loadData(){
                this.address=this.host+"/?ref="+this.tron.account

                this.getTronWeb().then(tronWeb => {
                    this.contract.getPersonalStats(this.tron.account).call().then(res => {
                        this.stats0 =tronWeb.fromSun(res["stats"][0]);
                        // 用户合同数量
                        this.stats1 = tronWeb.fromSun(res["stats"][1]);
                        // 冻结数量
                        this.stats2 = tronWeb.fromSun(res["stats"][2]);
                        // 总收益
                        this.stats3 = tronWeb.fromSun(res["stats"][3]);
                        // 团队奖励
                        this.stats4 = tronWeb.fromSun(res["stats"][4]);

                        this.stats5 = tronWeb.fromSun(res["stats"][5]);

                        this.stats6 = tronWeb.fromSun(res["stats"][6]);
                        this.stats7 = tronWeb.fromSun(res["stats"][7]);
                        this.stats8 = parseInt(res["stats"][8]);
                        this.stats9 = parseInt(res["stats"][9]);

                        this.stats10 = parseInt(res["stats"][10]);
                        this.stats11 = tronWeb.fromSun(res["stats"][11]);
                        this.stats12 = tronWeb.fromSun(res["stats"][12]);



                    });



                    // 全网数量
                    this.contract.getGlobalStats().call().then(res => {
                        this.g0 = tronWeb.fromSun(res["stats"][0]);
                        this.g1 = tronWeb.fromSun(res["stats"][1]);
                        this.g2 = tronWeb.fromSun(res["stats"][2]);
                        this.g3 = parseInt(res["stats"][3]);
                        this.g4 = parseInt(res["stats"][4]);


                    });


                })
            },
            changeCurrent(val) {
                this.current = val;
            }


        }

    }
</script>
