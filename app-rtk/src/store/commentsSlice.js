import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        initComments(state, action) {
            return action.payload;
        },
        addComment(state, action) {
            return [action.payload, ...state];
        },
        editComment(state, action) {
            const ind = state.findIndex(i => i.id === action.payload.id);
            if (ind !== -1) {
                state[ind] = action.payload;
            }
        },
        deleteComment(state, action) {
            const ind = state.findIndex(i => i.id === action.payload);
            if (ind !== -1) {
                state.splice(ind, 1);
            }
        }
    }
})

export default commentsSlice.reducer;
export const { initComments, addComment, editComment, deleteComment } = commentsSlice.actions;