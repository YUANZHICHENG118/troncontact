export default {
    data() {
        return {
            tron: {
                tronWeb: false,
                auth: false,
                account: ''
            },
            contract_address: 'TCEkD8mxwCxNpTTu3BiGJ72vqzTpNs8XQY',
            contract: undefined,
            ref: undefined,
            defRef: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
            host: "https://www.troncontract.cc",
            ABI: [{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"referRewardMaps","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMAL_DEPOSIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"},{"name":"depositId","type":"uint256"}],"name":"outputReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAXIMAL_DEPOSIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAINTAINER","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"depositId","type":"uint256"}],"name":"takeAwayDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"},{"name":"modelType","type":"uint8"},{"name":"payType","type":"uint8"}],"name":"makeDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawReferReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"depositId","type":"uint256"}],"name":"withdrawReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"a3Valve","outputs":[{"name":"previousTotalSupply","type":"uint256"},{"name":"opening","type":"bool"},{"name":"previousRecordTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getGlobalStats","outputs":[{"name":"stats","type":"uint256[5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getPersonalStats","outputs":[{"name":"stats","type":"uint256[14]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getA3Status","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getDeposits","outputs":[{"name":"deposits","type":"uint256[200]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"versionMaps","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"playersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"depositsCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getLastWithdrawTime","outputs":[{"name":"withdrawTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"clearStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DESTORY_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"_getTeamTotalLimit","outputs":[{"name":"teamTotalLimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"depositId","type":"uint256"}],"name":"makeDepositAgain","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"players","outputs":[{"name":"referrer","type":"address"},{"name":"linkEnable","type":"bool"},{"name":"referralReward","type":"uint256"},{"name":"active","type":"bool"},{"name":"refsCount","type":"uint256"},{"name":"vip","type":"uint8"},{"name":"expirationTime","type":"uint256"},{"name":"teamCount","type":"uint256"},{"name":"playerDepositAmount","type":"uint256"},{"name":"playerWithdrawAmount","type":"uint256"},{"name":"teamPerformance","type":"uint256"},{"name":"lastWithdrawTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROJECT_LEADER","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"},{"name":"page","type":"uint256"}],"name":"getDeposits","outputs":[{"name":"deposits","type":"uint256[100]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"depositId","type":"uint256"},{"indexed":false,"name":"account","type":"address"},{"indexed":false,"name":"referrer","type":"address"},{"indexed":false,"name":"modelType","type":"uint8"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"},{"indexed":false,"name":"originalAmount","type":"uint256"},{"indexed":false,"name":"level_percent","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TransferReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ref","type":"address"},{"indexed":false,"name":"player","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"percent","type":"uint256"},{"indexed":false,"name":"modelType","type":"uint8"},{"indexed":false,"name":"refReward","type":"uint256"}],"name":"AllocateReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"},{"indexed":false,"name":"depositType","type":"uint8"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TakeAwayDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
        }
    },
    watch: {},
    beforeMount() {
        //window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy() {
        // window.removeEventListener('resize', this.$_resizeHandler)
    },
    created() {
        let self = this,
            tries = 0;

        setTimeout(function initTimer() {
            if (!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

            self.tron.tronWeb = !!window.tronWeb;

            window.tronWeb.on('addressChanged', function () {
                self.tron.account = window.tronWeb.defaultAddress.base58;
            });

            setTimeout(function chechAuth() {
                self.tron.auth = window.tronWeb && window.tronWeb.ready;
                if (!self.tron.auth) setTimeout(chechAuth, 200);
                else self.tron.account = window.tronWeb.defaultAddress.base58;
            }, 200);
        }, 100);
    },
    mounted() {
        var m = (location.hash + '; ' + document.cookie).match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
        if (m) {
            document.cookie = "ref=" + m[1] + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
            this.ref = m[1];
        }
    },

    methods: {
        getTronWeb() {
            return new Promise((resolve, reject) => {
                window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
            });
        },
        awaitTx(tx) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 8000);
            });
        },
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
