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

export const incrementAsync = () => (
    dispatch => (
        setTimeout(() => {
            dispatch({type: "INCREMENT"})
        }, 2000)
    )
);

