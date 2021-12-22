import {PostItem} from "../postItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const PostList = ({ posts, title, removePost }) => {
    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>Немає постів</h1>
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {
                    posts.map((post, index) =>
                        <CSSTransition
                            classNames={'post'}
                            key={post.id}
                            timeout={1000}
                        >
                            <PostItem
                                removePost={removePost}
                                number={index}
                                post={post}
                            />
                        </CSSTransition>)
                }
            </TransitionGroup>
        </div>
    )
}
