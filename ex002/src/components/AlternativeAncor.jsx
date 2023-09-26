import propTypes from 'prop-types'

AlternativeAncor.defaultProps = {
    name: "Visitante",
    url: "#",
    target: "_self"
}
export default function AlternativeAncor({name, event, url, target}){

    return(
        <a href={url} target={target} rel='noreferrer' onClick={event}>
            <p>{name}, você deseja realmente sair da página atual?</p>
        </a>
    )
}