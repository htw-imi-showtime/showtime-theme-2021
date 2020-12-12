let title;
let hovered = false;

window.addEventListener("DOMContentLoaded", () => {
    title = document.querySelector("nav > a > strong");
    afterTitle = title.querySelector("::after");
    title.addEventListener("mouseenter", showFullTitle);
    title.addEventListener("mouseleave", hideFullTitle);
});

function showFullTitle() {
    setTimeout(() => {
        title.innerText = "IMI×SHTI";
    }, 50);
    setTimeout(() => {
        title.innerText = "IMI×SHOTIM";
    }, 100);
    setTimeout(() => {
        title.innerText = "IMI×SHOWTIME";
    }, 150);
    setTimeout(() => {
        title.innerText = "IMI×SHOWTIME_";
        hovered = true;
        blink(true);
    }, 200);
}

function hideFullTitle() {
    hovered = false;
    setTimeout(() => {
        title.innerText = "IMI×SHOTIM";
    }, 50);
    setTimeout(() => {
        title.innerText = "IMI×SHTI";
    }, 100);
    setTimeout(() => {
        title.innerText = "IMI×ST";
    }, 150);
}

function blink(shown) {
    setTimeout(() => {
        if (hovered === false) return;
        if (shown)
            title.innerText = title.innerText.replace("_", " ");
        else
            title.innerText = title.innerText.replace(" ", "_");
        blink(!shown);
    }, 400);
}
