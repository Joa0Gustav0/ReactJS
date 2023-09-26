import styles from './DisplayName.module.css'

export default function DisplayName(props){
    return(
        <div>
            <h1 className={styles.welcomeTitle}>Olá, <span>{props.name ?? "Visitante"}</span>!</h1>
            <h2 className={styles.jobText}>Você é <span>{props.job}</span>.</h2>
        </div>
    )
}