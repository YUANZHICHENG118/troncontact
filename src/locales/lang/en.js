export default {
    global: {
        test: 'test',
        share: 'contact us',
        team: 'Team',
        report:'Report',
        copy: 'copy',
        enturPrice: 'enter amount',
        confirm: 'Submit',
        cancel: 'Cancel'
    },
    sidebar: {
        contact: 'contract',
        myContact: 'my contract',
        reward: 'team reward',
        question: 'common problems'
    },
    account: {
        userData: {
            title: ' information',
            AInvest: 'investment A ',
            BInvest: 'investment B ',
            CInvest: 'investment C ',
            investing: 'progress',
            rewardQuota: 'Team reward',
            receivedQuota: 'Award',
            level: 'level',
            promotionNum: 'Totalpromotion',
            teamSize: 'Total team',
            deposit: 'Total deposit',
            extraction: 'Total extraction',
            OrdinaryUser: 'Ordinary users',
            super: 'super',
            performance: 'Team performance'
        },
        networkData: {
            title: 'Network',
            investTotal: 'Total investment',
            poolBalance: 'pool balance',
            withdrawalTotal: 'Total withdrawal',
            membership: 'Global membership',
            Restart: 'Restart countdown',
            contract: 'Contract'
        },
        inviteData: {
            title: 'Recommended links'
        }
    },
    contact: {
        investMoney: 'Investment amount',
        getMoney: 'Access to funds',
        Issued: 'Issued with principal',
        choose: 'Please select',
        lock: 'Lock in for {day} day'
    },
    myContact: {
        code: 'Contract code',
        amount: 'Deposit amount',
        profit: 'Current profit',
        gain: 'Gain revenue',
        ThawingDate: 'Thawing date',
        Withdrawable: 'Withdrawable',
        get: 'extract',
        getCash: 'Getting cash',
        pledgeDay: 'Pledge days',
        getReward: 'reward',
        redeem: 'Redeem',
        again: 'Again',
        PleaseWithdraw: 'Please withdraw the reward first'
    },
    teamReward: {
        title: 'Team reward',
        nthFirst: 'First generation',
        nthSecond: 'Second generation',
        nthThird: 'The third generation',
        nthforth: 'Generation 4-10',
        nthFifth: 'Generation 10-15',
        available: 'Awards available'
    },
    question:{
        title:'FAQ',
        Q1:{
            title:'What do I need to participate in this project? ',
            item1:'You need to have TronLinks Chrome browser extension tool or download a mobile APP application such as TronLink. '
        },
        Q2: {
            title:'How do I get AIS? ',
            item1:'You can buy AIS on a cryptocurrency exchange and then exchange for AIS: or use the decentralized exchange Justswap to exchange for AIS. You need to put the cryptocurrency in your personal wallet and use it to get funds (deposit)!'
        },
        Q3: {
            title:'Why is Aiswap.org trustworthy? ',
            item1:'This platform is managed by a smart contract on the blockchain. No one can change the algorithm of a smart contract, not even the management department. You can view the open source code of the contract in the tron ​​browser, and you can check the smart contract code with professional tools to ensure that the platform is safe.'
        },
        Q4: {
            title:'How to obtain funds (investment)? ',
            item1:'You need to select the desired contract type, then select the contract (deposit) term and select or enter the deposit amount. '
        },
        Q5: {
            title:'What investment types are available? ',
            item1:'On the aiswap.org platform, you can choose A, B, and C three types of contracts to invest. If you want, you can sign after the contract expires. '
        },
        Q6: {
        title:'Introduction to type A contract gameplay? ',
        item1:'A type contract freezes the principal, and the income is issued every 5 seconds. ',
        item2:'A1 contract: the number of days when the principal is frozen-5 days, the contracts cumulative return is 5%, and the daily return is 1%',
        item3:'A2 contract: Principal frozen days -15 days, contract cumulative return 20%, daily return 1.33%',
        item4:'A3 contract: the number of days when the principal is frozen-3 days, the cumulative return of the contract is 10%, and the daily return is 3.33%',
        item5:'A3 contract is closed by default, and the platform fund pool balance will be automatically opened when it falls by 10% compared with 0:00 on the same day, and it will be automatically closed after the amount of fund pool balance is recovered and increased by 20%. ',
        },
        Q7: {
        title:'Introduction to type B contract play? ',
        item1:'Type B contract principal is issued along with the income, which is issued every 5 seconds. ',
        item2:'B1 contract: 10-day period, including 110% cumulative return on principal and 11% daily return',
        item3:'B2 contract: 20-day period, including 130% cumulative return on principal and 6.5% per day',
        item4:'Type B contract is locked by default, you need to participate in Type C contract to unlock it. The cumulative investment amount of type B contracts cannot be higher than the cumulative investment amount of type C contracts. ',
        },
        Q8: {
        title:'Introduction to C type contract gameplay? ',
        item1:'C type contract principal is frozen for 30 days, the contract income is 20%-50%, and the investment is successful, and the income will be issued once. ',
        item2:'C type contract investment amount of 100 to 100,000 AIS, can be entered manually. ',
        item3:'The return of the first round investment of the C contract is 20%. ',
        item4:'',
        item5:'',
        item6:'',
        },
        Q9: {
            title:'How to upgrade to VIP, what are the advantages of VIP? ',
            item1:'Accounts with a cumulative investment amount of 500,000 AIS in category C contracts are automatically upgraded to VIP accounts, and VIP accounts will be given 5% AIS rewards for each withdrawal. If you withdraw 10,000 AIS, you will actually receive 10,500 AIS. (Excluding withdrawals for refund of principal)'
        },
        Q10:{
            title:'How to activate my referral link? ',
            item1:'Contract investment is divided into three types: Type A, Type B, and Type C. In order to activate the referral link, you need to make an investment in a Type A contract. The minimum investment amount is 100 AIS'
        },
        Q11:{
            title:'How can I get team rewards? ',
            item1:'To get the team bonus, you need to recommend new members to join the contract, take the percentage of the team member’s withdrawal amount each time, and recommend several valid accounts for several generations (users whose contracts expire all automatically become invalid accounts), up to 15 generations . A3 contract and withdrawal of principal refund will not generate team rewards',
            item2:'reward cap: the cumulative maximum available team reward is 3.3 times of the total investment principal in the A contract. For example, if your total investment principal in Type A contracts is 1000 AIS, then your team rewards will stop issuing when 3300 AIS is issued. If you want to continue to receive team rewards, you need to increase the investment principal of Type A contracts. When there is no ongoing Type A contract on your account, you will not enjoy team rewards.'

        },
        // Q12:{
        // title:'How is the team reward calculated? ',
        // item1:'Type A contract 10% for the first generation, 5% for the second generation, 6% for the third generation, 2% for the 4-10 generation, 3% for the 11-15 generation',
        // item2:'Type B contract and Type C contract 1st generation 3%, 2nd generation 1%, 3rd generation 2%, 4-10th generation 0.2%, 11-15th generation 0.5%'
        // },
        // Q13: {
        // title:'Related policies for withdrawal of profits, rewards, and principal? ',
        // item1:'In order to prevent a run, each investment is a separate contract number, separate settlement and withdrawal, contract revenue, contract principal and team rewards are withdrawn separately, and each wallet address needs to wait 8 for each withdrawal You can withdraw again only after hours'
        // },
        Q14:{
            title:'Is there any investment limit? ',
            item1:'There is no limit on the total investment amount, but a single investment amount is limited. The investment amounts of Type A and Type B contracts cannot be filled out independently. You can only choose the following amounts in the drop-down menu to invest: 100AIS, 500AIS, and 1000AIS are available in the first 3 days, 5000AIS is available on the fourth day, and the fifth 10000AIS option will be available every day, 50,000 AIS option will be available on the 6th day, and 100,000 AIS option will be available on the 7th day. \n' +
            'A single investment amount of 1 to 100,000 AIS for Type C contracts can be entered manually'
        },
        Q15:{
            title:'How long can this project run? ',
            item1:'Aiswap.org This project will always operate. When the contract fund pool is below 100 AIS, the restart mechanism will be activated after 24 hours. After the restart mechanism is activated, the contract investment amount and undrawn amount of all players will be automatically cleared. . But the team framework remains the same, and it can be activated by reinvesting, and a new round will start at that time'
        }
    }
}
