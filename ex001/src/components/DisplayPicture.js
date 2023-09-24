function displayPicture(){
    var url = "https://api.api-ninjas.com/v1/randomimage?category=nature"

    async function getData(){
        var response = await fetch(url)
        .then(async (resp) => {
            if (resp.ok == true){
                var data = await resp.json()
                console.log(data)
            }else{
                return `${resp.status} ${resp.statusText}`
            }
        })
    }

    return getData()
}

export default displayPicture