<template>
    <div class="assetInfo">
        <asset-item>
            <h2><img src="@/assets/assetImgs/user.png" alt="">个人信息</h2>
            <ul>
                <li><span class="label">钱包余额</span> <span>{{balance}} TRX</span></li>
                <li><span class="label">合同数量</span> <span>{{depositsCount}}</span></li>
                <li><span class="label">冻结金额</span> <span>{{freeze}} TRX</span></li>
                <li><span class="label">总收益</span> <span>{{totalReward}} TRX</span></li>
                <li><span class="label">推荐奖励</span> <span>{{withdrawnReferalFunds}} TRX</span></li>
                <li><span class="label">推荐数量</span> <span>{{referralsCount}}</span></li>
            </ul>
        </asset-item>
        <asset-item>
            <h2><img src="@/assets/assetImgs/network.png" alt="">全网信息</h2>
            <ul>
                <li><span class="label">全球充值数量</span> <span>{{depositsCounter}} TRX</span></li>
                <li><span class="label">用户数量</span> <span>{{playersCount}}</span></li>
                <li><span class="label">全球团队奖励</span> <span>{{team}} TRX</span></li>
                <li><span class="label">重启倒计时</span> <span>{{time}}</span></li>

            </ul>
        </asset-item>
        <asset-item>
            <h2><img src="@/assets/assetImgs/star.png" alt="">推荐链接</h2>
            <div class="invite">
                {{host}}/?ref={{tron.account.substring(0,5)+"..."}}
            </div>
            <div class="copy">
                <el-button  type="primary" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</el-button>

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
                time:0
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
                        this.balance =tronWeb.fromSun(res["stats"][0]);
                        // 用户合同数量
                        this.depositsCount = parseInt(res["stats"][1]);
                        // 冻结数量
                        this.freeze = tronWeb.fromSun(res["stats"][2]);
                        // 总收益
                        this.totalReward = tronWeb.fromSun(res["stats"][3]);
                        // 推荐奖励
                        this.withdrawnReferalFunds = tronWeb.fromSun(res["stats"][4]);
                        // 推荐人数

                        this.referralsCount = parseInt(res["stats"][5]);

                    });



                    // 全网数量
                    this.contract.getGlobalStats().call().then(res => {
                        this.depositsCounter = tronWeb.fromSun(res["stats"][0]);
                        this.playersCount = parseInt(res["stats"][1]);
                        this.team = tronWeb.fromSun(res["stats"][2]);
                        this.time = parseInt(res["stats"][3]);


                    });


                })
            },
            changeCurrent(val) {
                this.current = val;
            }


        }

    }
</script>
