const getVesselsData = async function() {
    const response = await fetch("https://api.starcitizen-api.com/8b322b4bdc142d7bb9002e006d0f1234/v1/cache/ships")
    if (response.status == 200){
        console.log(response.json())
    }
    else{
        new Error(response.statusText)
    }
}

export default getVesselsData