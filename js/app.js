const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.getElementById("movie-box");
const getMovies = async (api)=>
{
 const response =await fetch(api);
 const data = await response.json();
showMovies(data.results);
}
const showMovies = (data) =>
{   movieBox.innerHTML='';
    data.forEach((element) => {
        const imagePath = element.poster_path === null ? "img/image-missing.png" : IMGPATH + element.poster_path;
        const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt=""/>
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${element.original_title}  </h2>
                        <span> ${element.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${element.overview}
                    </p>
                 </div>
            `
           movieBox.appendChild(box);
        
    });
} 


document.getElementById("search").addEventListener("keypress" ,
     (event) =>{
       
        if(event.key=== "Enter" )
        {
            console.log(event.target.value);
            const movie_search = SEARCHAPI + event.target.value;
        
        if (event.target.value.trim() != "") {
            console.log(movie_search);
            getMovies(movie_search);
        } 
        else{
            getMovies(APIURL);
        }
       }
    })
    //init
    getMovies(APIURL);



