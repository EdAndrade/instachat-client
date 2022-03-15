import Vue from "vue";

export default Vue.extend({

    watch: {

        chatName(){
            this.validateChatName()
        },

        peopleQtd(){
            this.validatePeopleQtd()
        }
    },

    data(){

        let creatingChat: boolean

        return{
            chatName: '',
            peopleQtd: '',
            creatingChat: false,
            warnInputs: false,

            chatNameValidation: {
                fullfiled: false,
                fourChar: false
            },

            peopleQtdValidation: {
                onlyNumbers: false
            }
        }
    },

    methods: {

        validateChatName(): boolean{
            this.chatNameValidation.fullfiled = this.chatName !== ''
            this.chatNameValidation.fourChar = this.chatName.length >= 4

            return (this.chatNameValidation.fullfiled && this.chatNameValidation.fourChar)
        },

        validatePeopleQtd(): boolean{
            this.peopleQtdValidation.onlyNumbers = !!Number(this.peopleQtd) && Number(this.peopleQtd) > 0
            return this.peopleQtdValidation.onlyNumbers
        },

        validate(): void{

            if( this.validateChatName() === true && this.validatePeopleQtd() === true){
                this.createChatRoomAndRedirect()
            }else{
                this.warnInputs = true
                setTimeout( () => { this.warnInputs = false }, 2000)
            }
                
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