export default {
    data() {
        return {
            tron: {
                tronWeb: false,
                auth: false,
                account: ''
            },
            token: {
                symbol: 'AIS',
                decimals: 18
            },
            token_address: 'TRZPqchWTRUzXNGNWPoAqLB7H8J2j3saf8',
            contract_address: 'TXuEv1rDq92sRW3fcV2GAKEc5T2hmDx1TD',
            contract: undefined,
            tokenContract: undefined,
            ref: undefined,
            defRef: 'TJgT5hFVFyeTNmRV4eK4y4DPDNf4cjmG5B',
            host: "https://www.aiswap.org",
            TABI: [{
                "outputs": [{"type": "string"}],
                "constant": true,
                "name": "name",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "address"}],
                "constant": true,
                "name": "minter",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "inputs": [{"name": "spender", "type": "address"}, {"name": "amount", "type": "uint256"}],
                "name": "approve",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "totalSupply",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "inputs": [{"name": "sender", "type": "address"}, {
                    "name": "recipient",
                    "type": "address"
                }, {"name": "amount", "type": "uint256"}],
                "name": "transferFrom",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint8"}],
                "constant": true,
                "name": "decimals",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "inputs": [{"name": "spender", "type": "address"}, {"name": "addedValue", "type": "uint256"}],
                "name": "increaseAllowance",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "inputs": [{"name": "account", "type": "address"}, {"name": "amount", "type": "uint256"}],
                "name": "mint",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "inputs": [{"name": "account", "type": "address"}],
                "name": "balanceOf",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "string"}],
                "constant": true,
                "name": "symbol",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "inputs": [{"name": "spender", "type": "address"}, {"name": "subtractedValue", "type": "uint256"}],
                "name": "decreaseAllowance",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "inputs": [{"name": "recipient", "type": "address"}, {"name": "amount", "type": "uint256"}],
                "name": "transfer",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "inputs": [{"name": "owner", "type": "address"}, {"name": "spender", "type": "address"}],
                "name": "allowance",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "inputs": [{"name": "name", "type": "string"}, {"name": "symbol", "type": "string"}, {
                    "name": "minter_",
                    "type": "address"
                }], "stateMutability": "Nonpayable", "type": "Constructor"
            }, {
                "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                }, {"name": "value", "type": "uint256"}], "name": "Transfer", "type": "Event"
            }, {
                "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                }, {"name": "value", "type": "uint256"}], "name": "Approval", "type": "Event"
            }],
            ABI: [{
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "inputs": [{"name": "player", "type": "address"}],
                "name": "referRewardMaps",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "MINIMAL_DEPOSIT",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "inputs": [{"name": "_player", "type": "address"}, {"name": "depositId", "type": "uint256"}],
                "name": "outputReward",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "MAXIMAL_DEPOSIT",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "constant": true,
                "name": "checktest",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "decimals",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "inputs": [{"name": "depositId", "type": "uint256"}],
                "name": "takeAwayDeposit",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "inputs": [{"name": "ref", "type": "address"}, {
                    "name": "modelType",
                    "type": "uint8"
                }, {"name": "payType", "type": "uint8"}, {"name": "depositAmount", "type": "uint256"}],
                "name": "makeDeposit",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "name": "withdrawReferReward",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "inputs": [{"name": "depositId", "type": "uint256"}],
                "name": "withdrawReward",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"name": "previousTotalSupply", "type": "uint256"}, {
                    "name": "opening",
                    "type": "bool"
                }, {"name": "previousRecordTime", "type": "uint256"}],
                "constant": true,
                "name": "a3Valve",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "inputs": [{"name": "tokenAddress", "type": "address"}],
                "name": "changeToken",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"name": "stats", "type": "uint256[5]"}],
                "constant": true,
                "name": "getGlobalStats",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "name": "renounceOwnership",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"name": "stats", "type": "uint256[14]"}],
                "constant": true,
                "inputs": [{"name": "_player", "type": "address"}],
                "name": "getPersonalStats",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "constant": true,
                "name": "getA3Status",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "address"}],
                "constant": true,
                "name": "erc20Token",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "address"}],
                "constant": true,
                "name": "owner",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "bool"}],
                "constant": true,
                "name": "isOwner",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "inputs": [{"type": "address"}],
                "name": "versionMaps",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "playersCount",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "depositsCounter",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "getDuration",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"name": "withdrawTime", "type": "uint256"}],
                "constant": true,
                "inputs": [{"name": "_player", "type": "address"}],
                "name": "getLastWithdrawTime",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "clearStartTime",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "uint256"}],
                "constant": true,
                "name": "DESTORY_LIMIT",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "inputs": [{"name": "_to", "type": "address"}],
                "name": "transferAllto",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"name": "teamTotalLimit", "type": "uint256"}],
                "constant": true,
                "inputs": [{"name": "_player", "type": "address"}],
                "name": "_getTeamTotalLimit",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"name": "referrer", "type": "address"}, {
                    "name": "linkEnable",
                    "type": "bool"
                }, {"name": "referralReward", "type": "uint256"}, {
                    "name": "active",
                    "type": "bool"
                }, {"name": "refsCount", "type": "uint256"}, {
                    "name": "vip",
                    "type": "uint8"
                }, {"name": "expirationTime", "type": "uint256"}, {
                    "name": "teamCount",
                    "type": "uint256"
                }, {"name": "playerDepositAmount", "type": "uint256"}, {
                    "name": "playerWithdrawAmount",
                    "type": "uint256"
                }, {"name": "teamPerformance", "type": "uint256"}, {"name": "lastWithdrawTime", "type": "uint256"}],
                "constant": true,
                "inputs": [{"type": "address"}],
                "name": "players",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "outputs": [{"type": "address"}],
                "constant": true,
                "name": "AISImpl",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "inputs": [{"name": "newOwner", "type": "address"}],
                "name": "transferOwnership",
                "stateMutability": "Nonpayable",
                "type": "Function"
            }, {
                "outputs": [{"name": "deposits", "type": "uint256[100]"}],
                "constant": true,
                "inputs": [{"name": "_player", "type": "address"}, {"name": "page", "type": "uint256"}],
                "name": "getDeposits",
                "stateMutability": "View",
                "type": "Function"
            }, {
                "payable": true,
                "inputs": [{"name": "tokenAddress", "type": "address"}],
                "stateMutability": "Payable",
                "type": "Constructor"
            }, {
                "inputs": [{"name": "depositId", "type": "uint256"}, {
                    "name": "account",
                    "type": "address"
                }, {"name": "referrer", "type": "address"}, {"name": "modelType", "type": "uint8"}, {
                    "name": "amount",
                    "type": "uint256"
                }], "name": "NewDeposit", "type": "Event"
            }, {
                "inputs": [{"name": "account", "type": "address"}, {
                    "name": "originalAmount",
                    "type": "uint256"
                }, {"name": "level_percent", "type": "uint256"}, {"name": "amount", "type": "uint256"}],
                "name": "Withdraw",
                "type": "Event"
            }, {
                "inputs": [{"name": "player", "type": "address"}, {"name": "amount", "type": "uint256"}],
                "name": "TransferReferralReward",
                "type": "Event"
            }, {
                "inputs": [{"name": "ref", "type": "address"}, {
                    "name": "player",
                    "type": "address"
                }, {"name": "_amount", "type": "uint256"}, {"name": "percent", "type": "uint256"}, {
                    "name": "modelType",
                    "type": "uint8"
                }, {"name": "refReward", "type": "uint256"}], "name": "AllocateReferralReward", "type": "Event"
            }, {
                "inputs": [{"name": "account", "type": "address"}, {
                    "name": "depositType",
                    "type": "uint8"
                }, {"name": "amount", "type": "uint256"}], "name": "TakeAwayDeposit", "type": "Event"
            }, {
                "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }], "name": "OwnershipTransferred", "type": "Event"
            }]

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
