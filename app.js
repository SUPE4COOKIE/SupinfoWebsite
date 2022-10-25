const screenobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add('animatedscreen');
        }
        else {
            entry.target.classList.remove('animatedscreen');
        }
    });
});

const historytextobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animatedhistorytext');
        }
        else {
            entry.target.classList.remove('animatedhistorytext');
        }
    });
});

function flex() {
    document.getElementById("programmes").style.display = "flex";
}

function none() {
    document.getElementById("programmes").style.display = "none";
}

const screen = document.querySelectorAll(".screen")
const historytext = document.querySelectorAll(".historytext")
screen.forEach((screen) => { screenobserver.observe(screen) })
historytext.forEach((historytext) => { historytextobserver.observe(historytext) })

document.getElementById("programme").onmouseenter = flex;
document.getElementById("programmes").onmouseenter = flex;
document.getElementById("programme").onmouseleave = none;
document.getElementById("programmes").onmouseleave = none;



