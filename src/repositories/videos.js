function create(videoData){
    
    const isLocalHost = window.location.hostname.includes('localhost')
    const URL = isLocalHost ? 'http://localhost:8080/videos' : 'https://ryanflix.herokuapp.com/videos';
    return fetch(URL,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(videoData),
    })
}
export default {
    create,
}