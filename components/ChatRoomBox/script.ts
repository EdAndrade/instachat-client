import Vue from "vue";

export default Vue.extend({

    watch: {
        chatName(){
            this.validateChatName()
            console.log(this.chatNameValidation)
        }
    },

    data(){

        let creatingChat: boolean

        return{
            chatName: '',
            peopleQtd: '',
            creatingChat: false,

            chatNameValidation: {
                fullfiled: false,
                fourChar: false
            }
        }
    },

    methods: {

        validateChatName(){
            this.chatNameValidation.fullfiled = this.chatName !== ''
            this.chatNameValidation.fourChar = this.chatName.length >= 4

            return (this.chatNameValidation.fullfiled && this.chatNameValidation.fourChar)
        },

        validate(){
            this.createChatRoomAndRedirect()
        },        
    
        async createChatRoom(chatName: string, peopleQtd: number){
            return await this.$axios.post('create_chat', {
                chatName,
                peopleQtd
            })
        },

        createChatRoomAndRedirect(){

            this.creatingChat = true
            this.createChatRoom(this.chatName, Number(this.peopleQtd) ).then( response => {
                this.creatingChat = false

                // this.$vs.notification({
                //     progress    : 'auto',
                //     color       : body.color,
                //     position    : 'top-right',
                //     title       : body.title,
                //     text        : body.text,
                //     square		: true
                // })
            })
        }
    },

    mounted(){
    }
});