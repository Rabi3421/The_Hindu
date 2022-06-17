console.log("hi")
async function searchMovies(){
    try{
    let url =`https://newsdata.io/api/1/news?apikey=pub_829083ce4169440e3b1e07490f62e252dda0&q=category`;
    // console.log(url)
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    // return data.Search;
    console.log(data.results);
    }catch(error){
        console.log(error)
    }
}
searchMovies();