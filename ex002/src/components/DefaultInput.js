import styles from './DefaultInput.module.css'

function DefaultInput(){
    return (
        <label htmlFor="name-input" className={styles.inputLabel}>
            <h1 className={styles.requireText}>Digite o seu nome:</h1> 
            <input type="text" className={styles.textInput} id="name-input" placeholder="Insira o seu nome..." autoComplete="off" maxLength="20"></input>
        </label>
    )
}
export default DefaultInput