const defaultState = {count:100};
export default function TestRedux(state = defaultState, action) {
    let count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'decrease':
            return { count: count - 1 }
        default:
            return state
    }
}