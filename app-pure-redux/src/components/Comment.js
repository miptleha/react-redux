import { useEffect } from "react";
import ToggleButton from "./ToggleButton";
import { useDispatch } from "react-redux";
import { deleteCommentAction, editCommentAction } from "../store/commentsReducer";

export default function Comment({item}) {
    const limit = 100; //height limit
    function onInput(e) {
        resize(e.target);
    }
    function resize(textarea) {
        textarea.style.height = "";
        textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
    }

    useEffect(() => {
        let list = document.getElementsByClassName("Comment-Text");
        for (let i of list) {
            resize(i);
        }
    }, []);

    const dispatch = useDispatch();

    function textChange(e) {
        dispatch(editCommentAction({...item, text: e.target.value}));
    }

    function statusChange(status) {
        dispatch(editCommentAction({...item, status}));
    }

    function deleteItem() {
        dispatch(deleteCommentAction(item.id));
    }

    return (
        <div className="Comment">
            <textarea className="Comment-Text" value={item.text} onChange={textChange} onInput={onInput} />
            <div className="Comment-Manage">
                <ToggleButton name="like" status={item.status} setStatus={statusChange}>👍</ToggleButton>
                <ToggleButton name="dislike" status={item.status} setStatus={statusChange}>👎</ToggleButton>
                <button className="Button" onClick={deleteItem}>❌</button>
            </div>
        </div>
    )
}