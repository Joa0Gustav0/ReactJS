export default function DisplayName(props){
    return(
        <div>
            <h1 className="welcome-title">Olá, <span>{props.name ?? "Visitante"}</span>!</h1>
            <h2 className="job-text">Você é <span>{props.job}</span>.</h2>
        </div>
    )
}