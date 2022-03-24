export default ( { redirect, store }: any ) => {
    
    if(store.state.chatRoom.code === ''){
        redirect('/')
    }
}