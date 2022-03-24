import { State } from './types';
import { ChatRoom } from './types';

export default {

	SET_CHATROOM (state: State, chatRoom: ChatRoom ): void {
		state.chatRoom = chatRoom;
	},

	CLEAN_CHATROOM(state: State): void {
		state.chatRoom = {
			code: '',
			name: '',
			usersQt: 0,
			userName: ''
		}
	},
};