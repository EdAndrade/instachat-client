import Vue from 'vue'

export default Vue.extend({

    data(){

        return {
            chatLink:'',
            agentIsMobile: false,
            userAgentCode: ''
        }
    },

    methods: {

        checkUserAgent(){
            let userAgent = navigator.userAgent
            this.agentIsMobile = userAgent.match(/Android/i) || userAgent.match(/iPhone/i) ? true : false
            this.userAgentCode = userAgent.match(/Android/i) ? '?' : '&'
        },

        openSMSApp(){
            window.open(`sms://${this.userAgentCode}body=${this.chatLink}`, '_blank')
        }
    },

    mounted(){
        this.chatLink = `${window.location.protocol}//${window.location.host}?chatCode=${this.$store.state.chat.chatRoom.code}`
        this.checkUserAgent()
    }
})