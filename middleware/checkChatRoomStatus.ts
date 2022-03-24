export default ( { redirect, store }: any ) => {
    if(store.state.chat.chatRoom.code === ''){
        redirect('/')
    }
}