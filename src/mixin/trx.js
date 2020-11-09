export default {
    data() {
        return {
            tron: {
                tronWeb: false,
                auth: false,
                account: ''
            },
            contract_address: 'TX6ihwKP6xkyQeY8zWaAnMPsNfdN1Qyr1W',
            contract: undefined,
            ref: undefined,
            defRef: 'TPqSSgtnAQ8uSyaQoDa4er8en4fqiqqktm',
            host: "https://www.troncontract.cc",
            ABI: [{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"referRewardMaps","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"getBalance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"MINIMAL_DEPOSIT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"_player","type":"address"},{"name":"depositId","type":"uint256"}],"name":"outputReward","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"MAINTAINER","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"depositId","type":"uint256"}],"name":"takeAwayDeposit","stateMutability":"Nonpayable","type":"Function"},{"payable":true,"inputs":[{"name":"ref","type":"address"},{"name":"modelType","type":"uint8"},{"name":"payType","type":"uint8"}],"name":"makeDeposit","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"withdrawReferReward","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"depositId","type":"uint256"}],"name":"withdrawReward","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"name":"previousTotalSupply","type":"uint256"},{"name":"opening","type":"bool"},{"name":"previousRecordTime","type":"uint256"}],"constant":true,"name":"a3Valve","stateMutability":"View","type":"Function"},{"outputs":[{"name":"stats","type":"uint256[5]"}],"constant":true,"name":"getGlobalStats","stateMutability":"View","type":"Function"},{"name":"renounceOwnership","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"name":"stats","type":"uint256[13]"}],"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getPersonalStats","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"name":"isOwner","stateMutability":"View","type":"Function"},{"outputs":[{"name":"deposits","type":"uint256[180]"}],"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getDeposits","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"versionMaps","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"playersCount","stateMutability":"View","type":"Function"},{"outputs":[{"name":"withdrawStats","type":"uint256[2]"}],"constant":true,"inputs":[{"name":"_player","type":"address"},{"name":"depositId","type":"uint256"}],"name":"getLastWithdrawTime","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"depositsCounter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"getDuration","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"clearStartTime","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"DESTORY_LIMIT","stateMutability":"View","type":"Function"},{"outputs":[{"name":"teamTotalLimit","type":"uint256"}],"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"_getTeamTotalLimit","stateMutability":"View","type":"Function"},{"outputs":[{"name":"referrer","type":"address"},{"name":"linkEnable","type":"bool"},{"name":"referralReward","type":"uint256"},{"name":"active","type":"bool"},{"name":"refsCount","type":"uint256"},{"name":"vip","type":"uint8"},{"name":"vipReward","type":"uint256"},{"name":"expirationTime","type":"uint256"},{"name":"teamCount","type":"uint256"},{"name":"playerDepositAmount","type":"uint256"},{"name":"playerWithdrawAmount","type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"players","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"PROJECT_LEADER","stateMutability":"View","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"name":"deposits","type":"uint256[90]"}],"constant":true,"inputs":[{"name":"_player","type":"address"},{"name":"page","type":"uint256"}],"name":"getDeposits","stateMutability":"View","type":"Function"},{"payable":true,"stateMutability":"Payable","type":"Constructor"},{"inputs":[{"name":"depositId","type":"uint256"},{"name":"account","type":"address"},{"name":"referrer","type":"address"},{"name":"modelType","type":"uint8"},{"name":"amount","type":"uint256"}],"name":"NewDeposit","type":"Event"},{"inputs":[{"name":"account","type":"address"},{"name":"originalAmount","type":"uint256"},{"name":"level_percent","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"Withdraw","type":"Event"},{"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"}],"name":"TransferReferralReward","type":"Event"},{"inputs":[{"name":"ref","type":"address"},{"name":"player","type":"address"},{"name":"_amount","type":"uint256"},{"name":"percent","type":"uint256"},{"name":"modelType","type":"uint8"},{"name":"refReward","type":"uint256"}],"name":"AllocateReferralReward","type":"Event"},{"inputs":[{"name":"account","type":"address"},{"name":"depositType","type":"uint8"},{"name":"amount","type":"uint256"}],"name":"TakeAwayDeposit","type":"Event"},{"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"}]
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
