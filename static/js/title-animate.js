const titleStates = new Map();

window.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".animate");
    titles.forEach(title => {
        titleStates.set(title, { show: false, shown: false });
        title.addEventListener("mouseenter", () => showFullTitle(title));
        title.addEventListener("mouseleave", () => hideFullTitle(title));
    });
});

async function showFullTitle(title) {
    const titleState = titleStates.get(title);
    if (titleState.show) return;

    titleState.show = true;
    titleStates.set(title, titleState);

    title.innerText = "SHTI";
    await wait(50);
    title.innerText = "SHOTIM";
    await wait(50);
    title.innerText = "SHOWTIME";
    await wait(50);
    title.innerText = "SHOWTIME_";

    titleState.shown = true;
    titleStates.set(title, titleState);
    await blink(true, title);
}

async function hideFullTitle(title) {
    const titleState = titleStates.get(title);
    if (!titleState.show) return;

    if (!titleState.shown) {
        titleState.shown = false;
        titleStates.set(title, titleState);
        await wait(200);
    }
    titleState.shown = false;
    titleStates.set(title, titleState);

    title.innerText = "SHOTIM";
    await wait(50);
    title.innerText = "SHTI";
    await wait(50);
    title.innerText = "ST";

    titleState.show = false;
    titleStates.set(title, titleState);
}

async function blink(shown, title) {
    if (!titleStates.get(title).shown) return;
    console.log(titleStates.get(title));

    if (shown)
        title.innerText = title.innerText.replace("_", " ");
    else
        title.innerText = title.innerText.replace(" ", "_");

    await wait(400);
    await blink(!shown, title);
}

async function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
