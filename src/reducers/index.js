export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
export function increment() {
    return { type: 'INCREMENT' }
}

export function decrement() {
    return { type: 'DECREMENT' }
}

export const incrementAsync = () => (
    dispatch => (
        setTimeout(() => {
            dispatch({type: "INCREMENT"})
        }, 1000)
    )
);

