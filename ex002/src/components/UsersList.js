import styles from './styles/UsersList.module.css'

export default function UserList({usersArray}){
    console.log(usersArray)
    return(
        <>
            <h1 className={styles.title}>Usuários Cadastrados:</h1>
            <table className={styles.usersBox}>
                <thead>
                    <tr>
                        <th className={styles.usersBox__title} key="name-title">Nome</th>
                        <th className={styles.usersBox__title}>Profissão</th>
                    </tr>
                </thead>
                <tbody>
                    {usersArray.length > 0 && (
                        usersArray.map((currentUser, currentI) => (

                            <tr key={currentUser.name + currentI}>
                                <td className={styles.usersBox__data}>{currentUser.name}</td>
                                <td className={styles.usersBox__data}>{currentUser.job}</td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </>
    )
}