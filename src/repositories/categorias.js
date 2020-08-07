function create(categoriaData){
    const isLocalHost = window.location.hostname.includes('localhost')
    const URL = isLocalHost ? 'http://localhost:8080/categorias' : 'https://ryanflix.herokuapp.com/categorias';
    return fetch(URL,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(categoriaData),
    })
}

function getAllWithVideos(){
    const isLocalHost = window.location.hostname.includes('localhost')
    const URL = isLocalHost ? 'http://localhost:8080/categorias?_embed=videos' : 'https://ryanflix.herokuapp.com/categorias?_embed=videos';
    return fetch(URL)
    .then(async (response)=>{
        const resposta = await response.json();
        return resposta;
    });
}

function getAll(){
    const isLocalHost = window.location.hostname.includes('localhost')
    const URL = isLocalHost ? 'http://localhost:8080/categorias' : 'https://ryanflix.herokuapp.com/categorias';
    return fetch(URL)
    .then(async (response)=>{
        const resposta = await response.json();
        return resposta;
    });
}

export default {
    getAllWithVideos,
    getAll,
    create
}