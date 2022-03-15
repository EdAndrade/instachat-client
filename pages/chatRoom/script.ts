import Vue from 'vue'

interface message{
    data: string,
    user: string,
    me: boolean
}

export default Vue.extend({

    data(){

        let socket: any

        return {
            chatRoom: this.$store.state.chat.chatRoom,
            userMessage: '',
            socket,
            messages: Array<message>()
        }
    },

    methods: {
        
        connectSocket(){

            console.log(`${this.chatRoom.code}&${this.chatRoom.userName}`)

            this.socket = new WebSocket(`ws://172.20.10.2:8081/${this.chatRoom.code}&${this.chatRoom.userName}`)
            this.socket.addEventListener('open', (event: any) => {

                // this.socket.send(JSON.stringify({
                //     code: "e97d99e350b69b1b07ce1866e041771",
                //     message: "Oi"
                // }))
            })

            this.socket.addEventListener('message', (event: any) => {
                this.receiveMessage(event.data)
            })
        },

        sendMessage(){

            this.socket.send(JSON.stringify({
                code: this.chatRoom.code,
                message: {
                    data: this.userMessage,
                    user: this.chatRoom.userName
                }
            }))
        },

        receiveMessage(message: string){
            let decodedMessage: message = JSON.parse(message)

            this.messages.push({
                ...decodedMessage,
                user: decodedMessage.user !== this.chatRoom.userName ? decodedMessage.user : 'Eu',
                me: decodedMessage.user !== this.chatRoom.userName ? false : true
            })
        }
    },

    mounted(){
        this.connectSocket()
    }
})