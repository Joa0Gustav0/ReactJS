import styles from './SubmitButton.module.css'


function SubmitButton(){
    function logMessage(){
        console.log("Confirmado!")
    }
    return (
        <input type="button" className={styles.confirmButton} id="confirm-button" value="Confirmar"
        onClick={logMessage}/>
    )
}

export default SubmitButton