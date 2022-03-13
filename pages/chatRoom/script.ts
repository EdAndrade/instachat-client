import Vue from 'vue'

export default Vue.extend({

    data(){

        let socket: any

        return {
            chatRoom: this.$store.state.chat.chatRoom,
            userMessage: '',
            socket,
        }
    },

    methods: {
        
        connectSocket(){

            console.log(`${this.chatRoom.code}&${this.chatRoom.userName}`)

            this.socket = new WebSocket(`ws://localhost:8081/${this.chatRoom.code}&${this.chatRoom.userName}`)
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

            console.log(this.chatRoom.code, this.userMessage)
            this.socket.send(JSON.stringify({
                code: this.chatRoom.code,
                message: this.userMessage
            }))
        },

        receiveMessage(message: string){
            alert(message)
        }
    },

    mounted(){
        this.connectSocket()
    }
})