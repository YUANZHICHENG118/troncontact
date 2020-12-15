<template>
    <div class="rankList">
        <div class="performance-day">
            {{$t("rankList.a1")}}
            <span class="primary">{{total}}</span>
            <span class="unit">&nbsp;TRX</span>
            <Countdown :time="time" format="hh:mm:ss" @on-end="onCountdownEnd">
                <template slot-scope="{ time }">{{ time }}</template>
            </Countdown>
        </div>

        <div class="rankTable">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="rank"
                        :label="$t('rankList.a2')"
                >
                    <template slot-scope="scope">
                        <b :class="`rank${parseInt(scope.$index)+1}`" class="ranking">{{'0'+(scope.$index*1+1)}}</b>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="address"
                        :label="$t('rankList.a3')"
                >
                    <template slot-scope="scope">
                        <b class="address">{{scope.row.address}}</b>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="number"
                        :label="$t('rankList.a4')"

                >
                    <template slot-scope="scope">
                        <b class="number">{{scope.row.number}}</b>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="income"
                        :label="$t('rankList.a5')"

                >
                    <template slot-scope="scope">
                        <span class="primary income mr-8">{{parseInt(scope.row.income|| 0).toFixed(2)}}</span>
                        <span class="unit">TRX</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'
    import Countdown from '@choujiaojiao/vue2-countdown'

    export default {
        components: {
            Countdown
        },
        data() {
            return {
                tableData: [],
                total:0,
                time:0
            }
        },
        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
                    this.loadData()
                })
            },
        },
        methods: {
            onCountdownEnd() {
                this.time=0
                console.log('countdown end~')
            },
            loadData() {
                this.getTronWeb().then(async (tronWeb) => {




                    // 全网数量
                    this.contract.getGlobalStats().call().then(res => {

                        const g4 = parseInt(res['stats'][5])
                        console.log("g4===",g4)
                        if (g4 > 0 && this.time == 0) {
                            const d = new Date();
                            console.log("d.getTime()", d.getTime())
                            //const t=(g4+4*60*60)-d.getTime()/1000
                            const t=(g4)-d.getTime()/1000
                             console.log("t==",t)
                            this.time = parseInt(t);
                        }


                    })



                    const list=[{},{},{},{},{}];
                    const day=await this.contract.duration().call();
                    const total=await this.contract.performances(day,this.tron.account).call();

                    this.total=total/1000000

                    this.contract.userRanking(day).call().then(res => {
                        const addressList=res['addressList']
                        const refsCounts=res['performanceList']
                        const preEarn=res['preEarn']


                        addressList.map((item,index)=>{
                            list[index]['address']=tronWeb.address.fromHex(item)
                        })
                        refsCounts.map((item,index)=>{
                            list[index]['number']=item/1000000
                        })
                        preEarn.map((item,index)=>{
                            list[index]['income']=(parseFloat(item)/1000000).toFixed(2)
                        })


                       // list.splice(list.findIndex(item => item.address === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"))

                        this.tableData=list
                    })


                })

            },
        }
    }
</script>
<style lang="scss" scoped>
    .mobile {
        .rankList {
            .performance-day {
                position: relative;
                top: -20px;
            }
        }
    }

    .rankList {
        position: relative;
        .performance-day {
            text-align: right;
            position: absolute;
            top: -100px;
            width: 100%;
            right: 3%;
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #4D4D4D;
            .primary {
                font-size: 48px;
                font-family: Bahnschrift_Bold;
                color: #FF4826;
                line-height: 53px;
            }
            .unit {
                color: #666666;
            }
        }
        .rankTable {
            background: #FFFFFF;
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
            border-radius: 14px;
            border: 1px solid #EBEBEB;
            padding: 30px 4%;
            ::v-deep .el-table {
                &:before {
                    content: none;
                }
            }
            ::v-deep .el-table th.is-leaf, ::v-deep .el-table td {
                border-bottom: none;
            }
            .unit {
                font-size: 12px;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: bold;
                color: #808080;
            }
            .income {
                font-size: 19px;
            }
            .address, .number {
                color: #4D4D4D;
            }
            .ranking {
                font-size: 19px;
                font-family: DINAlternate-Bold, DINAlternate;
            }
            .rank1 {
                color: #FF4826;
            }
            .rank2 {
                color: #FA6400;
            }
            .rank3 {
                color: #F7B500;
            }
            .rank4 {
                color: #22A66C;
            }
            .rank5 {
                color: #40BBEC;
            }
        }
    }

</style>
