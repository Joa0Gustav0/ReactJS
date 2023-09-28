export default function UserList({usersArray}){
    return(
        <>
            <h1>Usuários Cadastrados:</h1>
            {
                    usersArray.map((currentUser) => (
                        <p>Name: {currentUser.name} | Job: {currentUser.job}</p>
                    ))
            }
            {console.log(usersArray)}
        </>
    )
}