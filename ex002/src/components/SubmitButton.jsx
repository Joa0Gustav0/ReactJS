import styles from './styles/SubmitButton.module.css'
import { useState } from 'react'


function SubmitButton(){
    const [initialValue, setInitialValue] = useState("Confirmar") 

    const confirm = () => {
        setInitialValue("Confirmado!")
    }
    const resetState = () => {
        setInitialValue("Confirmar")
    }
    return (
        <input type="button" className={styles.confirmButton} id="confirm-button" value={initialValue}
        onClick={confirm}
        onMouseLeave={resetState}/>
    )
}

export default SubmitButton