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
            
            try{

                return await this.$axios.post('create_chat', {
                    chatName,
                    peopleQtd
                })

            }catch(error){
                
            }
        },

        createChatRoomAndRedirect(){

            this.creatingChat = true
            
            try{
                this.createChatRoom(this.chatName, Number(this.peopleQtd) ).then( response => {
                    this.creatingChat = false
                    
                    if(response){
                        this.$emit('chatCodeMessage', response.data)
                        this.$nuxt.$vs.notification({
                            progress: 'auto',
                            color: '#41cf06',
                            position: 'bottom-right',
                            title: 'Chat criado com sucesso!',
                            text: 'Código do chat preenchido automaticamente'
                        })
                    }
                        
                })
            }catch(error){
                this.creatingChat = false
            }
        }
    },

    mounted(){
    }
});