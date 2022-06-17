// let key = `c32219c14c094cde8d01c40cbcff3b2f`;
// let country_url = `https://newsapi.org/v2/top-headlines?country=${}&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
// let key2 = `85633aad-4e8d-4176-9f4d-587c82634456`;
// let search_url = `https://newsdata.io/api/1/news?apikey=pub_829083ce4169440e3b1e07490f62e252dda0&q=${}&language=en`
const today = new Date();
let day = today.getDay()
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let month = today.getMonth();
let monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date = today.getDate();
let year = today.getFullYear();
document.getElementById("today_date").innerText = daylist[day]+", "+monthlist[month]+" "+date+", "+year;



// let show_news = document.getElementById('show_news');
const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    // console.log(res.articles[0]);
    append(res.articles[8]);
    append1(res.articles);
})
.catch(function(err){
    console.log(err);
})

let left = document.getElementById("left1");
function append(data){
        let image = document.createElement("img");
        image.src = data.urlToImage;
        image.style.width = "100%";
        image.style.height = "200px"
        let title = document.createElement("p");
        title.textContent = data.title;
        let date = document.createElement("p");
        date.textContent = data.publishedAt;
        left.append(image,title,date);
        console.log(left);
        left.addEventListener("click",function(){
            show(el);
        });
}




let right = document.getElementById("right1");
function append1(data){
    data.forEach(function(el){
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "10px"

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        right.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

const url1 = `https://newsapi.org/v2/top-headlines?q=top&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
fetch(url1)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    append2(res.articles);
    
})
.catch(function(err){
    console.log(err);
})
let top_khabar = document.getElementById('top_khabar');
function append2(data){
    data.forEach(function(el){
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "10px"

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        top_khabar.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

const url2 = `https://newsapi.org/v2/top-headlines?q=opinion&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
fetch(url2)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res.results);
    append3(res.articles);
    
})
.catch(function(err){
    console.log(err);
})
let opinion = document.getElementById('opinion');
function append3(data){
    data.forEach(function(el){
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "10px"

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        opinion.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

const url3 = `https://newsapi.org/v2/top-headlines?q=international&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
fetch(url3)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res.results);
    append4(res.articles);
    
})
.catch(function(err){
    console.log(err);
})
let international = document.getElementById('international');
function append4(data){
    data.forEach(function(el){
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "10px"

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        international.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

async function search(){
    let querry = document.getElementById("search").value;
    try{
    let url =`https://newsapi.org/v2/top-headlines?q=${querry}&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
    // console.log(url)
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    append5(data.articles);
    console.log(data.articles);
    }catch(error){
        console.log(error)
    }
}
let show_news = document.getElementById('show_news');
function append5(data){
    // let show_news = document.getElementById('show_news');
    show_news.innerHTML = null;
    data.forEach(function(el){
        show_news.style.marginTop = "30px";
        // show_news.style.backgroundColor = "white"
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "20px";
        div.style.backgroundColor = "white";
        // div.style.border = "1px solid red";

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        show_news.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

async function search(){
    let querry = document.getElementById("search").value;
    try{
    let url =`https://newsapi.org/v2/top-headlines?q=${querry}&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
    // console.log(url)
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    append5(data.articles);
    console.log(data.articles);
    }catch(error){
        console.log(error)
    }
}
// let show_news = document.getElementById('show_news');
function append5(data){
    // let show_news = document.getElementById('show_news');
    show_news.innerHTML = null;
    data.forEach(function(el){
        show_news.style.marginTop = "30px";
        // show_news.style.backgroundColor = "white"
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "20px";
        div.style.backgroundColor = "white";
        // div.style.border = "1px solid red";

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        show_news.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

async function ukrain(){
    // let querry = document.getElementById("search").value;
    try{
    let url =`https://newsapi.org/v2/top-headlines?q=ukrain&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
    // console.log(url)
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    append5(data.articles);
    console.log(data.articles);
    }catch(error){
        console.log(error)
    }
}
// let show_news = document.getElementById('show_news');
function append5(data){
    // let show_news = document.getElementById('show_news');
    show_news.innerHTML = null;
    data.forEach(function(el){
        show_news.style.marginTop = "30px";
        // show_news.style.backgroundColor = "white"
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "20px";
        div.style.backgroundColor = "white";
        // div.style.border = "1px solid red";

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        show_news.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}

async function corona(){
    // let querry = document.getElementById("search").value;
    try{
    let url =`https://newsapi.org/v2/top-headlines?q=corona virus&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
    // console.log(url)
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    append6(data.articles);
    console.log(data.articles);
    }catch(error){
        console.log(error)
    }
}
// let show_news = document.getElementById('show_news');
function append6(data){
    // let show_news = document.getElementById('show_news');
    show_news.innerHTML = null;
    data.forEach(function(el){
        show_news.style.marginTop = "30px";
        // show_news.style.backgroundColor = "white"
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "20px";
        div.style.backgroundColor = "white";
        // div.style.border = "1px solid red";

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        show_news.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}


async function internati(){
    // let querry = document.getElementById("search").value;
    try{
    let url =`https://newsapi.org/v2/top-headlines?q=international&apiKey=c32219c14c094cde8d01c40cbcff3b2f`;
    // console.log(url)
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    append7(data.articles);
    console.log(data.articles);
    }catch(error){
        console.log(error)
    }
}
// let show_news = document.getElementById('show_news');
function append7(data){
    // let show_news = document.getElementById('show_news');
    show_news.innerHTML = null;
    data.forEach(function(el){
        show_news.style.marginTop = "30px";
        // show_news.style.backgroundColor = "white"
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.marginBottom = "20px";
        div.style.backgroundColor = "white";
        // div.style.border = "1px solid red";

        let image = document.createElement("img");
        if(el.urlToImage == null){
            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfeR2gr_Z2U5rNiTKieMXMM9ZY96GbKUQQg&usqp=CAU';
        }
        else{
            image.src = el.urlToImage;
        }
        image.style.width = "200px";
        image.style.height = "100%";

        let div1 = document.createElement("div");
        div1.style.marginLeft = "5px"
        let title = document.createElement("p");
        title.textContent = el.title;
        let date = document.createElement("p");
        date.textContent = el.publishedAt;
        div1.append(title,date);
        div.append(image,div1)
        show_news.append(div);
        div.addEventListener("click",function(){
            show(el);
        });
    })
}
// function news(){
//     window.location.href = "news.html";
// }
function show(el){
    
    localStorage.setItem("newsdata",JSON.stringify(el));
    window.location.href="show.html";
}






