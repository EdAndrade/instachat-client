import { State } from './types';

export default {

	SET_CHATCODE (state: State, chatCode: string): void {
		state.chatCode = chatCode;
	}
};