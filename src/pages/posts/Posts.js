import './Posts.css'
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import {usePosts} from "../../hooks/usePost";
import PostServices from "../../API/PostServices";
import {getPageCount} from "../../utils/pages";
import {Button} from "../../components/UI/button/Button";
import {Modal} from "../../components/modal/Modal";
import {PostForm} from "../../components/postForm/PostForm";
import {PostFilter} from "../../components/postFilter/PostFilter";
import {Loader} from "../../components/UI/loader/Loader";
import {PostList} from "../../components/postList/PostList";
import {Pagination} from "../../components/pagination/Paggination";

function Posts() {
     const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const resp = await PostServices.getAll(limit, page)
        setPosts(resp.data)
        const totalCount = resp.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    return (
        <div className="App">
            <Button style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
                Написати пост
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{ margin: '15px 0' }}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1 style={{ textAlign: 'center' }}>{postError}</h1>}
            {
                isPostLoading
                    ? <Loader/>
                    : <PostList removePost={removePost} posts={sortedAndSearchPosts} title={'Список постів'}/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
