import Vue from 'vue'

export default  Vue.extend({

    

    data(){
        
        return {
            userName: '',
            chatCode: '',
            gettingChatRoom: false
        }
    },

    methods: {

        validate(){
            this.getChatRoomAndVerify(this.chatCode)
        },

        async getChatRoom(chatCode: string){
            return await this.$axios.post('get_chat_by_chatcode', {
                code: chatCode
            })
        },

        getChatRoomAndVerify(chatCode: string){

            this.gettingChatRoom = true

            this.getChatRoom(chatCode).then( response => {
                this.handleChatRoomResponse(response.data)
            })
        },

        handleChatRoomResponse(data: any){

            if(data === null){
                alert("Desculpa mas este chat não existe!")
            }else{

                this.$store.commit('chat/SET_CHATROOM', {
                    code: data.code,
                    name: data.name,
                    usersQt: data.usersQt,
                    userName: this.userName
                })

                this.$router.push('/chatRoom')
            }
        }
    }
})