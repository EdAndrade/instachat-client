import Vue from 'vue';
import {v4 as uuidv4} from 'uuid';

interface message{
    data: string,
    user: string,
    me: boolean,
    uuid: string,
    sendedMessage: boolean
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
            connecting: false,
            isChatOptionVisible: false
        }
    },

    methods: {
        
        connectSocket(){

            this.socket = new WebSocket(`ws://${process.env.SERVER_IP}:8081/${this.chatRoom.code}&${this.chatRoom.userName}`)
            this.socket.addEventListener('open', (event: any) => {
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

                if(this.userMessage!==''){

                    let uuid = uuidv4()
                    let message = {
                        code: this.chatRoom.code,
                        uuid,
                        message: {
                            data: this.userMessage,
                            user: this.chatRoom.userName,
                            me: true
                        }
                    }

                    await this.socket.send(JSON.stringify(message))
                    this.messages.push({
                        data: this.userMessage,
                        user: 'Eu',
                        me: true,
                        uuid,
                        sendedMessage: false
                    })

                    this.userMessage = ''
                }

            }catch(error){

            }
        },

        receiveMessage(message: string){
            let decodedMessage: message = JSON.parse(message)
           
            let myMessage = this.messages.filter( localMessage => {
                return decodedMessage.uuid === localMessage.uuid
            })

            if(!myMessage.length){

                this.messages.push({
                    ...decodedMessage,
                    user: decodedMessage.user,
                    me: false
                })

            }else{
                this.setMessageSendedStatusToTrue(decodedMessage.uuid)
            }
        },

        setMessageSendedStatusToTrue(messageUUID: string){
            this.messages.forEach( localMessage => {
                if(messageUUID === localMessage.uuid)
                    localMessage.sendedMessage = true
            })
        },

        playNotification(){
            this.invibleNotificationButton = document.getElementById('notification')

            if(this.invibleNotificationButton)
                this.invibleNotificationButton.onclick = () => { this.ringtone.play() }
        },

        changeChatOptionVisibility(){
            this.isChatOptionVisible = !this.isChatOptionVisible
        },

        checkConnectionState(){

            setInterval(() => {
                let state = this.socket.readyState;
                this.connecting = state === 0 ? true : false

                if(state === 3 || state === 2){
                    location.reload()
                }
            }, 1000)
        },
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