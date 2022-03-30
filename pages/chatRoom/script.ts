import Vue from 'vue';

interface message{
    data: string,
    user: string,
    me: boolean
}

export default Vue.extend({

    middleware: 'checkChatRoomStatus',

    data(){

        let socket: any
        let ringtone: any
        let invibleNotificationButton: any

        return {
            chatRoom: this.$store.state.chat.chatRoom,
            userMessage: '',
            socket,
            messages: Array<message>(),
            ringtone,
            invibleNotificationButton,
            connecting: false
        }
    },

    methods: {
        
        connectSocket(){

            console.log(`${this.chatRoom.code}&${this.chatRoom.userName}`)

            this.socket = new WebSocket(`ws://172.20.10.2:8081/${this.chatRoom.code}&${this.chatRoom.userName}`)
            this.socket.addEventListener('open', (event: any) => {
                console.log(this.socket)
                this.socket.send(JSON.stringify({
                    code: this.chatRoom.code,
                    message: {
                        data: `[${this.chatRoom.userName}] entrou na sala`,
                    }
                }))
            })

            this.socket.addEventListener('message', (event: any) => {
                this.receiveMessage(event.data)
            })
        },

        async sendMessage(){

            try{

                if(window.navigator.vibrate)
                    window.navigator.vibrate(200);

                await this.socket.send(JSON.stringify({
                    code: this.chatRoom.code,
                    message: {
                        data: this.userMessage,
                        user: this.chatRoom.userName
                    }
                }))

                this.userMessage = ''

            }catch(error){

            }
        },

        receiveMessage(message: string){
            let decodedMessage: message = JSON.parse(message)
            this.invibleNotificationButton.click()

            this.messages.push({
                ...decodedMessage,
                user: decodedMessage.user !== this.chatRoom.userName ? decodedMessage.user : 'Eu',
                me: decodedMessage.user !== this.chatRoom.userName ? false : true
            })
        },

        playNotification(){
            this.invibleNotificationButton = document.getElementById('notification')

            if(this.invibleNotificationButton)
                this.invibleNotificationButton.onclick = () => { this.ringtone.play() }
        },

        checkConnectionState(){

            setInterval(() => {
                let state = this.socket.readyState;
                this.connecting = state === 0 ? true : false

                if(state === 3 || state === 2){
                    location.reload()
                }
            }, 1000)
        }
    },

    mounted(){
        this.ringtone = new Audio('~assets/audio/ringtone.mp3')
        this.playNotification()
        this.connectSocket()
        this.checkConnectionState()
    },

    updated(){
        let chatSectionHTMLElement: any = document.querySelector(".chatSection")
        chatSectionHTMLElement.scrollTop = chatSectionHTMLElement.scrollHeight
    }
})