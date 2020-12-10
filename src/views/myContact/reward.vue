<template>
<span>{{amount}} TRX</span>
</template>

<script>
    let timer=undefined

    export default {
        name: 'Reward',
        props: {
            pid: {
                type: Number,
                required: true
            },
            contract:{
                type:Object,
                required:true,
            },
            address:{
                type:String,
                required:true,
            }
        },
        data() {
            return {
                amount: 0,

            }
        },
        watch: {

        },
        beforeDestroy() {
            if(timer){
                clearInterval(timer)
            }
        },
        created() {
            this.getOutputReward(this.pid)

            let that=this;
            timer = setInterval(() => {
                this.getOutputReward(that.pid)
            }, 3000)
        },
        methods: {
            async getOutputReward(pid) {
                const d = await  this.contract.income(this.address, pid).call();
                console.log("dddddd",d)
                this.amount = parseFloat(d) / 1000000
            }
        }

    }
</script>
