const screenobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { // vérifie si l'élément est dans le viewport
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

const screen = document.querySelectorAll(".screen")
const historytext = document.querySelectorAll(".historytext")
screen.forEach((screen) => { screenobserver.observe(screen) })
historytext.forEach((historytext) => { historytextobserver.observe(historytext) })


