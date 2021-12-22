import {Input} from "../UI/input/Input";
import {Button} from "../UI/button/Button";
import {useState} from "react";

export const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault()
        create({ ...post, id: Date.now().toString() })
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            <Input
                type="text"
                placeholder={'Заголовок поста'}
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <Input
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder={'Опис поста'}
            />
            <Button
                onClick={addNewPost}
            >Створити</Button>
        </form>
    )
}
