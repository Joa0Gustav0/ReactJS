import styles from './styles/DisplayName.module.css'
import propTypes from 'prop-types'

export default function DisplayName({name ,currentJob, workingTime, testNum}){
    DisplayName.propTypes = {
        name: propTypes.string,
        currentJob: propTypes.string,
        workingTime: propTypes.number
    }
    return(
        <div>
            <h1 className={styles.welcomeTitle}>{testNum}Olá, <span>{name ?? "visitante"}</span>!</h1>
            <h2 className={styles.jobText}>Você é <span>{currentJob ?? "trabalhador(a)"}</span>.</h2>
            <h2 className={styles.jobText}>Trabalhando há <span>{workingTime ?? "alguns"}  anos</span>.</h2>
        </div>
    )
}