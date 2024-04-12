import { useSelector } from 'react-redux';
import Comment from "./Comment";

export default function CommentList() {

    const data = useSelector(s => s.comments);

    return (
        <div className="CommentList">
            {data.map(i => (<Comment key={i.id} item={i} />))}
       </div>
    )
}