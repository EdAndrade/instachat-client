import Vue from "vue";

export default Vue.extend({

    data(){

        return{

        }
    },

    methods: {

        async getChatRoom(chatCode: string){
            return await this.$axios.post('get_chat_by_chatcode', {
                code: chatCode
            })
        },
    
        async createChatRoom(chatName: string, peopleQtd: number){
            return await this.$axios.post('create_chat', {
                chatName,
                peopleQtd
            })
        }
    },

    mounted(){
        this.getChatRoom('e97d99e350b69b1b07ce1866e041771e').then( response => {
            console.log(response)
        })
    }
});