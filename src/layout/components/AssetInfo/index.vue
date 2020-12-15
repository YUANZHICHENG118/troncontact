<template>
    <div class="assetInfo">
        <asset-item>
            <!--个人信息-->
            <h2><img src="@/assets/assetImgs/user.png" alt="">{{$t('account.userData.title')}}</h2>
            <ul>
                <!--A类合约累计投资-->
                <li><span class="label">{{$t('account.userData.AInvest')}}</span> <span>{{stats0}}TRX</span></li>
                <li><span class="label">{{$t('account.userData.AInvest1')}}</span> <span>{{stats12}}TRX</span></li>

                <!--B类合约累计投资-->
                <li><span class="label">{{$t('account.userData.BInvest')}}</span> <span>{{stats1}}TRX</span></li>
                <li><span class="label">{{$t('account.userData.a1')}}</span> <span>{{parseFloat(stats2)-parseFloat(stats1)}}TRX</span></li>
                <!--C类合约累计投资-->
                <li><span class="label">{{$t('account.userData.CInvest')}}</span> <span>{{stats3}}TRX</span></li>
                <li><span class="label">{{$t('account.userData.a2')}}</span> <span>{{parseFloat(stats4)-parseFloat(stats3)}}TRX</span></li>
                <!--出局额度-->
                <li><span class="label">{{$t('account.userData.a3')}}</span> <span>{{stats5}}TRX</span></li>

                <!--直推总人数-->
                <li><span class="label">{{$t('account.userData.promotionNum')}}</span> <span>{{stats6}}</span></li>
                <!--团队总人数-->
                <li><span class="label">{{$t('account.userData.teamSize')}}</span> <span>{{stats7}}</span></li>
                <!--团队业绩-->
                <li><span class="label">{{$t('account.userData.performance')}}</span> <span>{{stats8}}TRX</span></li>
                <!--总存入-->
                <li><span class="label">{{$t('account.userData.deposit')}}</span> <span>{{stats9}}TRX</span></li>
                <!--总提取-->
                <li><span class="label">{{$t('account.userData.extraction')}}</span> <span>{{stats10}}TRX</span></li>
                <!--可用提现额度-->
                <li><span class="label">{{$t('account.userData.a4')}}</span> <span>{{stats11}}TRX</span></li>

            </ul>
        </asset-item>
        <asset-item>
            <!--全网信息-->
            <h2><img src="@/assets/assetImgs/network.png" alt="">{{$t('account.networkData.title')}}</h2>
            <ul>
                <!--总投资数量-->
                <!--<li><span class="label">{{$t('account.networkData.investTotal')}}</span> <span>{{g0}} TRX</span></li>-->
                <!--资金池结余-->
                <li><span class="label">{{$t('account.networkData.poolBalance')}}</span> <span>{{g1}} TRX</span></li>

                <!--推荐奖池-->
                <li><span class="label">{{$t('account.networkData.a2')}}</span> <span>{{g3}} TRX</span>
                </li>

                <!--幸运奖池-->
                <li><span class="label">{{$t('account.networkData.a1')}}</span> <span>{{g2}} TRX</span>
                </li>


                <!--会员数量-->
                <li><span class="label">{{$t('account.networkData.membership')}}</span> <span>{{g4}} </span></li>

                <li><span class="label">{{$t('account.networkData.contract')}}</span> <span><a style="color: blueviolet" href="https://tronscan.io/#/contract/TQGPhUgRQPouZ2MLwFiLzskvxiWy7AFAhF/code" target="_blank">TronContract</a> </span></li>

                <!--审计报告-->
                <li><span class="label"></span> <span><a style="color: blueviolet" href="TronContract.pdf" target="_blank">{{$t('global.report')}}</a> </span></li>

                <!--&lt;!&ndash;重启倒计时&ndash;&gt;-->
                <!--<li v-if="g4>0"><span class="label">{{$t('account.networkData.Restart')}}</span> <span> <Countdown-->
                        <!--:time="time" format="hh:mm:ss" @on-end="onCountdownEnd">-->
    <!--<template slot-scope="{ time }">{{ time }}</template>-->
  <!--</Countdown></span></li>-->

            </ul>
        </asset-item>
        <asset-item v-if="showRefer">
            <!--推荐链接-->
            <h2><img src="@/assets/assetImgs/star.png" alt="">{{$t('account.inviteData.title')}}</h2>
            <div class="invite">
               <input type="text" :value="`${host}/#/contact?ref=${tron.account.substring(0,5)+'...'}`">
            </div>
            <div class="copy">
                <el-button type="primary" v-clipboard:copy="address" v-clipboard:success="onCopy"
                           v-clipboard:error="onError">
                    {{$t('global.copy')}}
                </el-button>
            </div>
        </asset-item>

    </div>
</template>
<script>
    import AssetItem from './assetItem'
    import TrxMixin from '../../../mixin/trx'
    import Countdown from '@choujiaojiao/vue2-countdown'

    let timer = undefined
    export default {
        components: {
            AssetItem,
            Countdown
        },
        data() {
            return {
                showRefer:false,
                address: '',
                balance: 0,
                depositsCount: 0,
                freeze: 0,
                withdrawnReferalFunds: 0,
                referralsCount: 0,
                depositsCounter: 0,
                playersCount: 0,
                totalReward: 0,
                team: 0,
                time: 0,
                stats0: 0,
                stats1: 0,
                stats2: 0,
                stats3: 0,
                stats4: 0,
                stats5: 0,
                stats6: 0,
                stats7: 0,
                stats8: 0,
                stats9: 0,
                stats10: 0,
                stats11: 0,
                stats12: 0,

                g0: 0,
                g1: 0,
                g2: 0,
                g3: 0,
                g4: 0

            }
        },
        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
                    this.loadData()
                })
            }
        },
        beforeDestroy() {
            if (timer) {
                clearInterval(timer)
            }
        },
        mounted() {
            timer = setInterval(() => {
                this.loadData()
            }, 5000)
        },
        methods: {
            onCountdownEnd() {
                console.log('countdown end~')
            },
            loadData() {
                this.address = this.host + '/#/contact?ref=' + this.tron.account
                this.getTronWeb().then(tronWeb => {
                    this.contract.players(this.tron.account).call().then(res => {
                        this.showRefer = res["linkEnable"]
                    })
                })
                this.getTronWeb().then(tronWeb => {
                    this.contract.getPersonalStats(this.tron.account).call().then(res => {
                        this.stats0 = tronWeb.fromSun(res['stats'][0])
                        this.stats1 = tronWeb.fromSun(res['stats'][1])
                        this.stats2 = tronWeb.fromSun(res['stats'][2])
                        this.stats3 = tronWeb.fromSun(res['stats'][3])
                        this.stats4 = tronWeb.fromSun(res['stats'][4])

                        this.stats5 = tronWeb.fromSun(res['stats'][5])

                        this.stats6 = parseInt(res['stats'][6])
                        this.stats7 = parseInt(res['stats'][7])
                        this.stats8 = tronWeb.fromSun(res['stats'][8])
                        this.stats9 = tronWeb.fromSun(res['stats'][9])

                        this.stats10 = tronWeb.fromSun(res['stats'][10])
                        this.stats11 = tronWeb.fromSun(res['stats'][11])
                        this.stats12 = tronWeb.fromSun(res['stats'][12])

                    })


                    // 全网数量
                    this.contract.getGlobalStats().call().then(res => {
                        this.g0 = tronWeb.fromSun(res['stats'][0])
                        this.g1 = tronWeb.fromSun(res['stats'][1])
                        this.g2 = tronWeb.fromSun(res['stats'][2])
                        this.g3 = tronWeb.fromSun(res['stats'][3])
                        this.g4 = parseInt(res['stats'][4])

                        // console.log("g4===",this.g4)
                        // if (this.g4 > 0 && this.time == 0) {
                        //     const d = new Date();
                        //     console.log("d.getTime()", d.getTime())
                        //     const t=(this.g4+24*60*60)-d.getTime()/1000
                        //     //const t = (this.g4 + 60) - d.getTime() / 1000
                        //
                        //     // console.log("t",t)
                        //
                        //     this.time = parseInt(t);
                        // }


                    })


                })
            },
            changeCurrent(val) {
                this.current = val
            }


        }

    }
</script>
