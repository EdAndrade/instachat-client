import Vue from 'vue'

export default Vue.extend({

    data(){

        return {
            chatLink:'',
            agentIsMobile: false,
            userAgentCode: '',
            copiedStatus: false
        }
    },

    computed: {
        isClipboardAvaible(){
            return !!navigator.clipboard
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
        },

        copyChatLinkToClipboard(){

            var chatLink: any = document.getElementById("chatLink");
            
            if( navigator.clipboard && chatLink ){
                chatLink.select();
                chatLink.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(chatLink.value);
                this.showCopiedStatus()
            }
        },

        showCopiedStatus(){
            this.copiedStatus = true
            setTimeout( () => { this.copiedStatus = false }, 2000)
        }
    },

    mounted(){
        this.chatLink = `${window.location.protocol}//${window.location.host}?chatCode=${this.$store.state.chat.chatRoom.code}`
        this.checkUserAgent()
    }
})