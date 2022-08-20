const User = ({ user }) => {
    return (
        <article>
            <p>{user.id}</p>
            <br />
            <p>Prénom: {user.firstName}</p>
            <br />
            <p>Nom: {user.lastName}</p>
        </article>
    )
}
export default User