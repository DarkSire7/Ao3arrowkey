console.log("im running")
let chap = document.querySelectorAll('a[href*="/chapters/"]');

let prev = "";
let next = "";


chap.forEach(chapters => {
    if (chapters.innerHTML == "← Previous Chapter"){
        prev = chapters.href;
        return;
    }
})

chap.forEach(chapters => {
    if (chapters.innerHTML == "Next Chapter →"){
        next = chapters.href;
        return;
    }
})


document.addEventListener('keydown', function (event) {

    if (event.key === "ArrowRight") {
        window.open(next, "_self")

    }
    else if (event.key === "ArrowLeft") {
        window.open(prev, "_self")
    }

});
