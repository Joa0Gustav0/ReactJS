import styles from './SubmitButton.module.css'

function SubmitButton(){
    return (
        <input type="button" className={styles.confirmButton} id="confirm-button" value="Confirmar"/>
    )
}

export default SubmitButton