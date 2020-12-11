<template>
    <Countdown :time="time" format="hh:mm:ss" @on-end="onCountdownEnd">
        <template slot-scope="{ time }">{{ time }}</template>
    </Countdown></template>

<script>
    import Countdown from '@choujiaojiao/vue2-countdown'

    export default {
        name: 'count',
        components: { Countdown},

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
                time: 0,

            }
        },
        watch: {

        },
        beforeDestroy() {

        },
        mounted() {
            this.timer()

        },
        methods: {
            onCountdownEnd() {
                this.time=0
                console.log('countdown end~')
            },
            async timer(){

                let  time= await this.contract.nextGrant(this.address,this.pid).call();

                console.log("time====",parseInt(time))
                if (time > 0 ) {
                    const d = new Date();
                    console.log("d.getTime()", d.getTime())
                    const t=(parseInt(time))-d.getTime()/1000
                    //const t = (this.g4 + 60) - d.getTime() / 1000

                     console.log("t",t)
                     this.time= parseInt(t)
                }



            },
        }

    }
</script>
