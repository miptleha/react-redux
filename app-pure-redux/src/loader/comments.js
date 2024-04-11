import { initCommentsAction } from "../store/commentsReducer";

export function LoadComments() {
    return function(dispatch) {
        dispatch(initCommentsAction([
            {id: 1, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus iure inventore voluptates corrupti dolorem doloribus eveniet voluptate similique fugit? Sed perferendis labore sunt consectetur et repellat animi repellendus quo.", status: ""},
            {id: 2, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: "like"},
            {id: 3, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: ""},
            {id: 4, text: "Lorem, ipsum dolor sit", status: "dislike"},
            {id: 5, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: ""},
            {id: 6, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit", status: ""},
        ]));
    } 
}