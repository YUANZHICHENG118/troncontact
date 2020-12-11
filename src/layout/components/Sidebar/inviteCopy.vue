<template>
    <div class="invite-input">
        <input type="text" :value="`${host}/#/contact?ref=${tron.account.substring(0,5)+'...'}`">
        <span class="el-icon-copy-document primary copy" v-clipboard:copy="address" v-clipboard:success="onCopy"
              v-clipboard:error="onError"></span>
    </div>
</template>
<script>
    import TrxMixin from '../../../mixin/trx'

    export default {
        mixins: [TrxMixin],
        data() {
            return {

                address: '',
            }
        },
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
                    this.address = this.host + '/#/contact?ref=' + this.tron.account

                })
            }
        },
        methods: {
            onCopy(e) { 　　 // 复制成功
                this.$message({
                    message: '复制成功！',
                    type: 'success'
                })
            },
            onError(e) {　　 // 复制失败
                this.$message({
                    message: '复制失败！',
                    type: 'error'
                })
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";

    .invite-input {
        background: $menuHover;
        height: 44px;
        border-radius: 6px;
        padding: 0 3%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        input {
            background: none;
            border: 0;
            width: 100%;
            color: $menuActiveText;
            outline: none;
        }
    }
</style>
