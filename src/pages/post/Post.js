import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import PostServices from "../../API/PostServices";
import {Loader} from "../../components/UI/loader/Loader";

export const Post = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const params = useParams()
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const resp = await PostServices.getById(params.id)
        setPost(resp.data)
    })

    const [fetchComments, isComLoading, errorCom] = useFetching(async () => {
        const resp = await PostServices.getByIdComments(params.id)
        setComments(resp.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])
    return (
        <div>
            <h1>Ви відкрили сторінку поста з ID = {params.id}</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.id} {post.title}</div>
            }

            <h1>Коментарі</h1>
            {
                isComLoading
                    ? <Loader/>
                    : <div style={{marginTop: '20px', marginLeft: '20px'}}>
                        {comments.map(com =>
                            <div key={com.id} style={{marginTop: '20px'}}>
                                <h5>{com.email}</h5>
                                <p>{com.body}</p>
                            </div>
                        )}
                    </div>
            }
        </div>
    )
}
