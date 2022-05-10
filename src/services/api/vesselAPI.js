const getVesselsData = async function() {
    //ask by fecth the API
    const response = await fetch("https://api.starcitizen-api.com/8b322b4bdc142d7bb9002e006d0f1234/v1/cache/ships")

    //Verify if everything ok
    if (response.status == 200){
        const data = await response.json()
        console.log(await data)
        return await data.data.filter(vessel => vessel != null) //return the array
    }
    else{
        new Error(response.statusText)
    }
}

export default getVesselsData