export interface State {
	chatRoom: ChatRoom
}

export interface ChatRoom {
	code: string,
	name: string,
	usersQt: number,
	userName: ''
}