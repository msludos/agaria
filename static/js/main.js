function getMenuItem(name) {
    switch (name) {
        case "main":
            if (localStorage.getItem("lang") == "ru") return "Главная";
            if (localStorage.getItem("lang") == "ag") return "Glavna";
            break;
        case "news":
            if (localStorage.getItem("lang") == "ru") return "Новости";
            if (localStorage.getItem("lang") == "ag") return "Kunen Novostak";
            break;
        case "article":
            if (localStorage.getItem("lang") == "ru") return "Статьи";
            if (localStorage.getItem("lang") == "ag") return "Kunen Stat`ak";
            break;
        case "about":
            if (localStorage.getItem("lang") == "ru") return "О Нас";
            if (localStorage.getItem("lang") == "ag") return "O Mukâî";
            break;
    }
}

let menu = `
<div class="menu">
    <div class="icon"><img src="/static/imgs/logo.png" alt="logo"></div>
    <div class="item"><a href="/${localStorage.getItem("lang")}">${getMenuItem("main")}</a></div>
    <div class="item"><a href="/${localStorage.getItem("lang")}/news">${getMenuItem("news")}</a></div>
    <div class="item"><a href="/${localStorage.getItem("lang")}/article">${getMenuItem("article")}</a></div>
    <div class="item"><a href="/${localStorage.getItem("lang")}/about">${getMenuItem("about")}</a></div>
    <div class="lang">
        <a href="/ru/${location.pathname+location.search+location.hash}">RU</a>
        <a href="/ag/${location.pathname+location.search+location.hash}">AG</a>
    </div>
</div>
`;

window.onload = function() { 
    localStorage.setItem("lang", "ru");
    document.querySelector("body").innerHTML = menu + document.querySelector("body").innerHTML;
    document.querySelector(".lang a[href^='/ru/']").addEventListener(function() {
        localStorage.setItem("lang", "ru");
    });
    document.querySelector(".lang a[href^='/ag/']").addEventListener(function() {
        localStorage.setItem("lang", "ag");
    });
}
