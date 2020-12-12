export default {
    data() {
        return {
            tron: {
                tronWeb: false,
                auth: false,
                account: ''
            },
            contract_address: 'TVXFdXqbGD3jsisGm5nhcSaYy2yv7MtZYu',
            contract: undefined,
            ref: undefined,
            defRef: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
            host: "https://www.troncontract.vip",
            ABI: [{"payable":true,"inputs":[{"name":"_leaderPoolAddress","type":"address"},{"name":"_tron1PoolAddress","type":"address"},{"name":"_prizePoolAdress","type":"address"},{"name":"_recommendPoolAddress","type":"address"}],"stateMutability":"Payable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"CREATE_TIME","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"constant":true,"name":"DEPOSITS_TYPES_COUNT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"name":"FORCE_WITHDRAW","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"LEADER_PERCENT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"LUCKY_PERCENT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"MAXIMAL_DEPOSIT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"MINIMAL_DEPOSIT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"MODEL_REWARDS_PERCENTS","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"ONE_DAY","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"name":"RECOMMEND_AUTO","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"RECOMMEND_PERCENT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"START_TIME","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"TRON1_PERCENT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"WITHDRAW_DURATION","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint8"}],"constant":true,"name":"WITHDRAW_MUL","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256[3]"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"accumulatives","stateMutability":"View","type":"Function"},{"outputs":[{"name":"luckyPrize","type":"uint256"},{"name":"recommendAward","type":"uint256"},{"name":"referReward","type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"awardDetails","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"duration","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"startTime","type":"uint256"}],"name":"duration","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"earn_percent","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"extractable","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"freeze_cycle","stateMutability":"View","type":"Function"},{"outputs":[{"name":"deposits","type":"uint256[100]"}],"constant":true,"inputs":[{"name":"_player","type":"address"},{"name":"page","type":"uint256"}],"name":"getDeposits","stateMutability":"View","type":"Function"},{"outputs":[{"name":"stats","type":"uint256[6]"}],"constant":true,"name":"getGlobalStats","stateMutability":"View","type":"Function"},{"outputs":[{"name":"stats","type":"uint256[14]"}],"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getPersonalStats","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"depositId","type":"uint256"}],"name":"income","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"name":"isOwner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"luckyPercentLimit","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"luckyPrizeLimit","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"payable":true,"inputs":[{"name":"ref","type":"address"},{"name":"modelType","type":"uint8"}],"name":"makeDeposit","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"depositId","type":"uint256"}],"name":"nextGrant","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"overLimit","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"type":"uint256"},{"type":"uint256"}],"name":"performanceRank","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"},{"type":"address"}],"name":"performances","stateMutability":"View","type":"Function"},{"outputs":[{"name":"referrer","type":"address"},{"name":"linkEnable","type":"bool"},{"name":"referralReward","type":"uint256"},{"name":"active","type":"bool"},{"name":"again","type":"bool"},{"name":"refsCount","type":"uint256"},{"name":"teamCount","type":"uint256"},{"name":"playerDepositAmount","type":"uint256"},{"name":"playerWithdrawAmount","type":"uint256"},{"name":"teamPerformance","type":"uint256"},{"name":"withdrawTime","type":"uint256"},{"name":"withdrawal","type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"players","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"playersCount","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"prizePool","stateMutability":"View","type":"Function"},{"outputs":[{"name":"available","type":"uint256"},{"name":"undeliverable","type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"input","type":"uint256"}],"name":"quota","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"rankPercent","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"recommendPool","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"referRewards","stateMutability":"View","type":"Function"},{"inputs":[{"name":"id","type":"uint256"}],"name":"refund","stateMutability":"Nonpayable","type":"Function"},{"name":"renounceOwnership","stateMutability":"Nonpayable","type":"Function"},{"name":"settlePerformance","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"name":"sn","type":"uint256"},{"name":"minPerformance","type":"uint256"}],"constant":true,"inputs":[{"name":"rankingList","type":"address[5]"},{"name":"userAddress","type":"address"}],"name":"shootOut","stateMutability":"View","type":"Function"},{"outputs":[{"name":"ranking","type":"address[5]"}],"constant":true,"inputs":[{"name":"_duration","type":"uint256"}],"name":"sortRanking","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"timePointer","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_to","type":"address"}],"name":"transferAll","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"tron1PoolAddress","stateMutability":"View","type":"Function"},{"outputs":[{"name":"addressList","type":"address[5]"},{"name":"performanceList","type":"uint256[5]"},{"name":"refsCounts","type":"uint256[5]"},{"name":"preEarn","type":"uint256[5]"}],"constant":true,"inputs":[{"name":"_duration","type":"uint256"}],"name":"userRanking","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"withdrawLimit","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"withdrawLuckyPrize","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"withdrawRecommend","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"withdrawReferReward","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"id","type":"uint256"}],"name":"withdrawYield","stateMutability":"Nonpayable","type":"Function"}]
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
