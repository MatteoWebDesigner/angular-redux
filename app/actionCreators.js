function increment(counter) {
    return {
        type: 'INCREMENT',
        payload: {
            count: counter
        }
    };
}

function decrement(counter) {
    return {
        type: 'DECREMENT',
        payload: {
            count: counter
        }
    };
}

function reset(counter) {
    return {
        type: 'RESET',
        payload: {
            count: counter
        }
    };
}

export default { increment, decrement, reset };