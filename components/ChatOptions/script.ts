import Vue from 'vue'

export default Vue.extend({

    data(){

        return {
            chatLink:'http://localhost:3000?chatCode=fdaswn21elsafdlkj;lkfadskfljfjldas',
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
            window.open(`sms://1900/${this.userAgentCode}body=${this.chatLink})`, '_blank')
        }
    },

    mounted(){
        this.checkUserAgent()
    }
})