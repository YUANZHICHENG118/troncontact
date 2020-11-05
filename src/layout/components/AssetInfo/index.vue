<template>
    <div class="assetInfo">
        <asset-item>
            <h2><img src="@/assets/assetImgs/user.png" alt="">个人信息</h2>
            <ul>
                <li><span class="label">钱包余额</span> <span>{{balance}} TRX</span></li>
                <li><span class="label">合同数量</span> <span>{{depositsCount}}</span></li>
                <li><span class="label">冻结金额</span> <span>{{freeze}} TRX</span></li>
                <li><span class="label">总收益</span> <span>20.23TRX</span></li>
                <li><span class="label">推荐奖励</span> <span>{{withdrawnReferalFunds}} TRX</span></li>
                <li><span class="label">推荐数量</span> <span>{{referralsCount}}</span></li>
            </ul>
        </asset-item>
        <asset-item>
            <h2><img src="@/assets/assetImgs/network.png" alt="">全网信息</h2>
            <ul>
                <li><span class="label">全球充值次数</span> <span>{{depositsCounter}}</span></li>
                <li><span class="label">用户数量</span> <span>{{playersCount}}</span></li>
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
                playersCount:0
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
        methods: {
            loadData(){
                this.address=this.host+"/?ref="+this.tron.account

                this.getTronWeb().then(tronWeb => {

                    tronWeb.trx.getBalance(this.tron.account).then(balance => {
                        this.balance = tronWeb.fromSun(balance);
                    });

                    // 用户合同数量
                    this.contract.getDepositsCount(this.tron.account).call().then(res => {
                       this.depositsCount = parseInt(res);

                    });
                    // 冻结数量
                    this.contract.getInvestmentsSum(this.tron.account).call().then(res => {
                        this.freeze = tronWeb.fromSun(res["sum"]);

                    });

                    // 推荐奖励
                    this.contract.getWithdrawnReferalFunds(this.tron.account).call().then(res => {
                        this.withdrawnReferalFunds = tronWeb.fromSun(res);

                    });

                    // 推荐人数
                    this.contract.getReferralsCount(this.tron.account).call().then(res => {
                        this.referralsCount = parseInt(res);

                    });

                    // 全网数量
                    this.contract.depositsCounter().call().then(res => {
                        this.depositsCounter = parseInt(res);

                    });

                    // 玩家数量
                    this.contract.playersCount().call().then(res => {
                        this.playersCount = parseInt(res);

                    });
                })
            },
            changeCurrent(val) {
                this.current = val;
            }


        }

    }
</script>
