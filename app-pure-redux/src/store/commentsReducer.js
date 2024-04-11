const INIT_COMMENTS = "INIT_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const defaultState = [];
export function commentsReducer(state = defaultState, action) {
    switch (action.type) {
        case INIT_COMMENTS:
            return action.payload;
        case ADD_COMMENT:
            return [action.payload, ...state];
        case EDIT_COMMENT:
            return state.map(i => i.id === action.payload.id ? action.payload : i);
        case DELETE_COMMENT:
            return state.filter(i => i.id !== action.payload);
        default:
            return state;
    }
}

export function initCommentsAction(payload) {
    return {type: INIT_COMMENTS, payload};
}

export function addCommentAction(payload) {
    return {type: ADD_COMMENT, payload};
}

export function editCommentAction(payload) {
    return {type: EDIT_COMMENT, payload};
}

export function deleteCommentAction(payload) {
    return {type: DELETE_COMMENT, payload};
}