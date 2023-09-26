import styles from './DisplayName.module.css'
import propTypes from 'prop-types'

export default function DisplayName({name ,currentJob, workingTime}){
    DisplayName.propTypes = {
        name: propTypes.string,
        currentJob: propTypes.string,
        workingTime: propTypes.number
    }
    return(
        <div>
            <h1 className={styles.welcomeTitle}>Olá, <span>{name || "Visitante"}</span>!</h1>
            <h2 className={styles.jobText}>Você é <span>{currentJob}</span>.</h2>
            <h2 className={styles.jobText}>Trabalhando há <span>{workingTime ?? "alguns "} anos</span>.</h2>
        </div>
    )
}