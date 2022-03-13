import Vue from "vue";

export default Vue.extend({

    data(){

        let creatingChat: boolean

        return{
            chatName: '',
            peopleQtd: '',
            creatingChat: false
        }
    },

    methods: {

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