function DefaultInput(){
    return (
        <label for="name-input" className="input-label">
            <h1>Digite o seu nome:</h1> 
            <input type="text" id="name-input" placeholder="Insira o seu nome..." autoComplete="off" maxLength="20"></input>
        </label>
    )
}
export default DefaultInput