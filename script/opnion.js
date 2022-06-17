
let url = "https://newsapi.org/v2/top-headlines?q=opinion&apiKey=c32219c14c094cde8d01c40cbcff3b2f"
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    // console.log(res.articles[0]);
    // append(res.articles[8]);
    append7(res.articles);
})
.catch(function(err){
    console.log(err);
})
let show_news = document.getElementById('show_news');
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
        div.addEventListener("click",function(){
            show(el);
        });
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

    })
}
function show(el){
    
    localStorage.setItem("newsdata",JSON.stringify(el));
    window.location.href="show.html";
}