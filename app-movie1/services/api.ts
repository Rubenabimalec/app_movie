export const TMBD_CONFIG={
    BASE_URL: "https://api.themoviedb.org/3", //las peticiones se construyen a partir de aqui
    //La variable EXPO_PUBLIC_MOVIE_API_KEY debería estar definida en un archivo .env.
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY, //Se accede a una variable de entorno usando process.env. 
    Headers:{
        accept: "application/json",
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    },
};
//recibe un objeto con una propiedad query de tipo string.
export const fetchPopularMovies= async({query}:{query:string})=>{//desestructuración con tipado en TypeScript.
    const endpoint=query
    //Si query tiene valor, se construye una URL para buscar películas que coincidan con esa palabra.
    ?`${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: "GET",
        headers:TMBD_CONFIG.Headers,
    });
    if(!response.ok){
        throw new Error("fail to fetch a movies" + response.statusText);
    }

    const data = await response.json()
    return data.results
}