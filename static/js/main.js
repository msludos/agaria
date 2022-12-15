function getMenuItem(name) {
    switch (name) {
        case "main":
            if (document.querySelector("html").getAttribute("lang") == "ru") return "Главная";
            if (document.querySelector("html").getAttribute("lang") == "ag") return "Glavna";
            break;
        case "news":
            if (document.querySelector("html").getAttribute("lang") == "ru") return "Новости";
            if (document.querySelector("html").getAttribute("lang") == "ag") return "Kunen Novostak";
            break;
        case "article":
            if (document.querySelector("html").getAttribute("lang") == "ru") return "Статьи";
            if (document.querySelector("html").getAttribute("lang") == "ag") return "Kunen Stat`ak";
            break;
        case "about":
            if (document.querySelector("html").getAttribute("lang") == "ru") return "О Нас";
            if (document.querySelector("html").getAttribute("lang") == "ag") return "O Mukâî";
            break;
    }
}

let menu = `
<div class="menu">
    <div class="icon"><img src="/static/imgs/logo.png" alt="logo"></div>
    <div class="item"><a href="/${document.querySelector("html").getAttribute("lang")}">${getMenuItem("main")}</a></div>
    <div class="item"><a href="/${document.querySelector("html").getAttribute("lang")}/news">${getMenuItem("news")}</a></div>
    <div class="item"><a href="/${document.querySelector("html").getAttribute("lang")}/article">${getMenuItem("article")}</a></div>
    <div class="item"><a href="/${document.querySelector("html").getAttribute("lang")}/about">${getMenuItem("about")}</a></div>
    <div class="lang">
        <a href="/ru/${location.pathname.slice(4)+location.search+location.hash}">RU</a>
        <a href="/ag/${location.pathname.slice(4)+location.search+location.hash}">AG</a>
    </div>
</div>
`;

window.onload = function() { 
    document.querySelector("body").innerHTML = menu + document.querySelector("body").innerHTML;
    document.querySelector(".lang a[href^='/ru/']").addEventListener("click", function() {
        localStorage.setItem("lang", "ru");
    });
    document.querySelector(".lang a[href^='/ag/']").addEventListener("click", function() {
        localStorage.setItem("lang", "ag");
    });
}
