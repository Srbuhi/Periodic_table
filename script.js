
const highlightElements = document.querySelectorAll(".tables-list-item");
highlightElements[0].addEventListener("click", highlightBatteryElements);
highlightElements[1].addEventListener("click", highlightBodyElements);
highlightElements[2].addEventListener("click", highlightSeaElements);
highlightElements[3].addEventListener("click", highlightEndangeredElements);
highlightElements[4].addEventListener("click", highlightCrustElements);
highlightElements[5].addEventListener("click", highlightPriceOfElements);

const iconMeaning = document.querySelectorAll(".icon-meaning");
highlightElements.forEach((icon, index) => icon.addEventListener("mouseenter", showHint));
highlightElements.forEach((icon, index) => icon.addEventListener("mouseleave", hideHint));

function showHint() {
    iconMeaning[1].style.display = "block";
}

function hideHint() {
    iconMeaning[1].style.display = "none";
}

function highlightBatteryElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "human-body", "sea", "endangered", "crust", "price");
    body.classList.add("batteries");
}

function highlightBodyElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "sea", "endangered", "crust", "price");
    body.classList.add("human-body");
}

function highlightSeaElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "human-body", "endangered", "crust", "price");
    body.classList.add("sea");
}

function highlightEndangeredElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "human-body", "sea", "crust", "price");
    body.classList.add("endangered");
}

function highlightCrustElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "human-body", "sea", "endangered", "price");
    body.classList.add("crust");
}

function highlightPriceOfElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "human-body", "sea", "endangered", "crust");
    body.classList.add("price");
}
