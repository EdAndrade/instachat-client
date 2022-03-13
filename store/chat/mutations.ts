import { State } from './types';
import { ChatRoom } from './types';

export default {

	SET_CHATROOM (state: State, chatRoom: ChatRoom ): void {
		state.chatRoom = chatRoom;
	}
};