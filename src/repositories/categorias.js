

function getAllWithVideos(){
    
    const isLocalHost = window.location.hostname.includes('localhost')
    const URL = isLocalHost ? 'http://localhost:8080/categorias?_embed=videos' : 'https://ryanflix.herokuapp.com/categorias?_embed=videos';
    return fetch(URL)
    .then(async (response)=>{
        const resposta = await response.json();
        return resposta;
    });
}


export default {
    getAllWithVideos,
}