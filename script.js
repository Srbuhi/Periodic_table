
const highlightElements = document.querySelectorAll(".tables-list-item");
highlightElements[0].addEventListener("click", highlightBatteryElements);
highlightElements[1].addEventListener("click", highlightBodyElements);
highlightElements[2].addEventListener("click", highlightSeaElements);
highlightElements[3].addEventListener("click", highlightEndangeredElements);

function highlightBatteryElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "human-body", "sea", "endangered");
    body.classList.add("batteries");
}

function highlightBodyElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "sea", "endangered");
    body.classList.add("human-body");
}

function highlightSeaElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "human-body", "endangered");
    body.classList.add("sea");
}

function highlightEndangeredElements() {
    const body = document.querySelector("body");
    body.classList.remove("main", "batteries", "human-body", "sea");
    body.classList.add("endangered");
}



