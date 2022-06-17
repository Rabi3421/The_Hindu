let show_news = document.getElementById('show_news');
let khabar = JSON.parse(localStorage.getItem('newsdata'));

let image = document.createElement("img");
        image.src = khabar.urlToImage;
        image.style.width = "100%";
        image.style.height = "500px"
        let title = document.createElement("p");
        title.style.textAlign = "center";
        title.textContent = khabar.title;
        let description = document.createElement("p");
        description.textContent = khabar.content;
        let date = document.createElement("p");
        date.textContent = khabar.publishedAt;
        date.style.textAlign = "center";

        show_news.append(image,title,description,date);
        console.log(image,title,date)