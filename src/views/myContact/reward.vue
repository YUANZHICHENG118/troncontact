<template>
<span>{{amount}} TRX</span>
</template>

<script>

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
        created() {
            this.getOutputReward(this.pid)
        },
        methods: {
            async getOutputReward(pid) {
                const d = await  this.contract.outputReward(this.address, pid).call();
                console.log("dddddd",d)
                this.amount = parseFloat(d) / 1000000
            }
        }

    }
</script>
