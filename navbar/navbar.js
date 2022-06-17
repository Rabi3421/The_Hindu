function navbar(){
    return`
    const today = new Date();
let day = today.getDay()
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let month = today.getMonth();
let monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date = today.getDate();
let year = today.getFullYear();
document.getElementById("today_date").innerText = daylist[day]+", "+monthlist[month]+" "+date+", "+year;
    <div id="search_box">
        <div id="left">
            <div class="icons"><i class="fa-brands fa-facebook-f"></i></div>
            <div class="icons"><i class="fa-brands fa-twitter"></i></div>
            <div class="icons"><i class="fa-brands fa-linkedin-in"></i></div>
            <div class="icons"><i class="fa-brands fa-instagram-square"></i></div>
            <div class="icons"><i class="fa-solid fa-envelope"></i></div>
            <div class="icons"><i class="fa-solid fa-mobile-screen"></i></div>
            <div class="icons">ePaper</div>
        </div>
        <div id="right">
            <input type="text" id="search" placeholder="search here">
            <i class="fa-solid fa-magnifying-glass"onclick="search()"></i>
        </div>
    </div>
    <img src="https://www.thehindu.com/theme/images/th-online/logo.png" id="the_hindu">
    <div id="date">
        <p>LATEST NEWS</p>
        <p id="today_date"></p>
        <p>E-PAPER</p>
    </div>
    <div id="menu">
        <div id="menudrop">
            <p>MENU</p>
            <i class="fa-solid fa-bars"></i>
        </div>
        <div id="heading">
            <p>TODAY'S PAPER</p>
            <p>NEWS</p>
            <p>OPINION</p>
            <p>BUSINESS</p>
            <p>SPORT</p>
            <p>ENTERTAINMENT</p>
            <p>CROSSWORD+</p>
        </div>
        <a href=subscription_trial.html><div id="get_trail">GET TRIAL</div></a>
        <a href="subscription.html"><div id="subscribe">SUBSCRIBE NOW</div></a>
        <div id="login">LOG IN</div>
    </div>
    <div id="trending">
        <p>TRENDING TODAY</p>
        <p onclick="ukrain()">RUSSIA-UKRAINE CRISIS</p>
        <p onclick="corona()">CORONA VIRUS</p>
        <p onclick="internati()">INTERNATIONAL</p>
    </div>`
}
export default navbar