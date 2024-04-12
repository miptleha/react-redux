import { useSelector, useDispatch } from 'react-redux';
import { addCommentAction } from '../store/commentsReducer';

export default function Header() {

    const data = useSelector(s => s.comments);
    const dispatch = useDispatch();

    const totalCount = data.length;
    const likeCount = data.filter(i => i.status === "like").length;
    const dislikeCount = data.filter(i => i.status === "dislike").length;
    const withTextCount = data.filter(i => i.text).length;

    function addComment() {
        dispatch(addCommentAction({id: +new Date(), text: "", status: ""}));
    }

    return (
        <div className="Header">
            <div className="App-Name">APP-PURE-REDUX</div>
            <button className="Big-Button" onClick={addComment}>Add new comment</button>
            <div>
                <div>(click on comment to edit it)</div>
                <div>Likes: {likeCount}, Dislikes: {dislikeCount}, Total: {totalCount}, Not empty: {withTextCount}</div>
            </div>
        </div>
    )
}