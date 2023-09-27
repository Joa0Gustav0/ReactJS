import styles from './styles/DefaultInput.module.css'

function DefaultInput({nameValue, jobValue, workingTimeValue, myEvent}){
    return (
        <div className={styles.inputLabel}>
            <h1 className={styles.requireText}>Digite o seu nome:</h1> 
            <input type="text" className={styles.textInput} id="name" placeholder="Insira o seu nome..." autoComplete="off" maxLength="20" onChange={myEvent} value={nameValue}></input>
            <h1 className={styles.requireText}>Digite a sua profissão:</h1> 
            <input type="text" className={styles.textInput} id="job" placeholder="Insira a sua profissão..." autoComplete="off" maxLength="20" onChange={myEvent} value={jobValue}></input>
            <h1 className={styles.requireText}>Digite o tempo de trabalho:</h1> 
            <input type="number" className={styles.textInput} id="working-time" placeholder="Insira o tempo de trabalho..." max={10} value={workingTimeValue} onChange={myEvent} onInput={(e) => {
                if (Number(e.target.value) > 10 ||
                Number(e.target.value) < 0){
                    e.target.value = ""
                }
            }}></input>
        </div>
    )
}
export default DefaultInput