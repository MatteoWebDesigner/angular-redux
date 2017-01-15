const INITIAL_STATE = 0;

function counter(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return INITIAL_STATE;
		default:
			return state;
	}
}

export default { counter };