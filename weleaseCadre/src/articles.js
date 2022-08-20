import { getUsersPage } from './api/axios'
import { getPostsPage } from './api/axios'
import { useState, useEffect } from 'react'
import User from './User'
import Post from './Post'
import { useQuery } from 'react-query'
import PageButton from './PageButton'

const Example1 = () => {
    const [page, setPage] = useState(5)
    const [post, setPost] = useState({"posts": []})
    const [user, setUser] = useState({"users": []})
    const {
        isLoading,
        isError,
        error,
        data: users,
        isFetching,
        isPreviousData,
    } = useQuery(['/users', page], () => getUsersPage(page), {
        keepPreviousData: true
    })
    useEffect(() => {

        getPostsPage(page).then(json => setPost(json))
        getUsersPage(page).then(json => setUser(json))

    }, [page])

    if (isLoading) return <p>Loading Users...</p>

    if (isError) return <p>Error: {error.message}</p>
    const content = post.posts.map(post => <Post key={post.id} post={post} />)
    const contents = user.users.map(user => <User key={user.id} user={user} />)

    

    return (
        <>
            
            {isFetching && <span className="loading">Loading...</span>}
            {content}
            {contents}
        </>
    )
}
export default Example1