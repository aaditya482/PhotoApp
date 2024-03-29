import posts from '../data/posts'

// once the action is received, reducer updates the current state
const postReducer = function postsf(state = posts , action) {
    console.log(action.index);

    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST' : return [...state, action.post]
        default: return state
    }
}

export default postReducer 