const Post = ({ post }) => {
    return (
        <article>
            <p>{post.id}</p>
                <br />
            <p>{post.title}</p>
                <br />
            <p>{post.body}</p>
                <br />
            <p>{post.userId}</p>
                <br />
            <p>{post.tags}</p>
                <br />
            <p>{post.reactions}</p>
                
            
        </article>
    )
}
export default Post