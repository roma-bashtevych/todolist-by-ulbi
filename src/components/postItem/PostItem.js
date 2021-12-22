import './PostItem.css'
import {Button} from "../UI/button/Button";
import {useHistory} from 'react-router-dom'

export const PostItem = ({ post, number, removePost }) => {
const router = useHistory();
    return (
        <div className={'post'}>
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <Button
                    onClick={() => router.push(`/posts/${post.id}`)}
                >Відкрити</Button>
                <Button onClick={() => removePost(post)}>Видалити</Button>
            </div>
        </div>
    )
}
