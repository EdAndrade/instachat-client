import Vue from 'vue'

export default  Vue.extend({

    props: {

        newChatCode: {
            type: String,
            required: true
        }
    },

    watch: {

        newChatCode(){
            this.chatCode = this.newChatCode
        }
    },

    data(){
        
        return {
            userName: '',
            chatCode: '',
            gettingChatRoom: false,
            warnInputs: false,
        }
    },

    methods: {

        validate(){
            if( this.userName !== '' && this.chatCode !== '' ){
                this.getChatRoomAndVerify(this.chatCode)
            }else{
                this.warnInputs = true
                setTimeout( () => { this.warnInputs = false }, 2000)
            }
        },

        async getChatRoom(chatCode: string){
            return await this.$axios.post('get_chat_by_chatcode', {
                code: chatCode
            })
        },

        getChatRoomAndVerify(chatCode: string){

            this.gettingChatRoom = true

            this.getChatRoom(chatCode).then( response => {
                this.handleChatRoomResponse(response)
            })
        },

        handleChatRoomResponse(response: any){
            if(response.data.status === 404){
                this.gettingChatRoom = false
                this.$nuxt.$vs.notification({
                    progress: 'auto',
                    color: '#dd2121',
                    position: 'bottom-right',
                    title: 'Sala de chat não existe',
                    text: 'A sala de chat solicitada não existe'
                })
            }
            else if(response.data.status === 403){
                this.gettingChatRoom = false
                this.$nuxt.$vs.notification({
                    progress: 'auto',
                    color: '#dd2121',
                    position: 'bottom-right',
                    title: 'Sala de chat está cheia',
                    text: 'A sala de chat solicitada atingiu o seu limite!'
                })
            }else{

                this.$nuxt.$vs.notification({
                    progress: 'auto',
                    color: '#41cf06',
                    position: 'bottom-right',
                    title: 'Sala encontrada! Redirecionando',
                    text: 'Redirecionando para sala de chat solicitada'
                })

                this.$store.commit('chat/SET_CHATROOM', {
                    code: response.data.code,
                    name: response.data.name,
                    usersQt: response.data.usersQt,
                    userName: this.userName
                })

                this.$router.push('/chatRoom')
            }
        }
    }
})