import styles from './styles/DisplayName.module.css'
import propTypes from 'prop-types'

export default function DisplayName({name ,currentJob, workingTime}){
    DisplayName.propTypes = {
        name: propTypes.string,
        currentJob: propTypes.string,
        workingTime: propTypes.number
    }
    DisplayName.defaultProps = {
        name: "visitante",
        currentJob: "trabalhador",
        workingTime: "alguns"
    }
    return(
        <div>
            <h1 className={styles.welcomeTitle}>Olá, <span>{name}</span>!</h1>
            <h2 className={styles.jobText}>Você é <span>{currentJob}</span>.</h2>
            <h2 className={styles.jobText}>Trabalhando há <span>{workingTime.toFixed(1)}  anos</span>.</h2>
        </div>
    )
}