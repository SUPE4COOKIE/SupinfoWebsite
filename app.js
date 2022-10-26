const screenobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { // check if the element is in the viewport

            entry.target.classList.add('animatedscreen'); // add the class to the element
        }
        else {
            entry.target.classList.remove('animatedscreen'); // remove the class from the element
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

const Franceobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animatedFrance');
        }
        else {
            entry.target.classList.remove('animatedFrance');
        }
    });
});

const iconcontainerobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animatediconcontainer');
        }
        else {
            entry.target.classList.remove('animatediconcontainer');
        }
    });
});

function flex() {
    document.getElementById("programmes").style.display = "flex";
}

function none() {
    document.getElementById("programmes").style.display = "none";
}

const screen = document.querySelectorAll(".screen");
const historytext = document.querySelectorAll(".historytext");
const France = document.querySelectorAll(".France");
const iconcontainer = document.querySelectorAll(".iconcontainer");
screen.forEach((screen) => { screenobserver.observe(screen) })
historytext.forEach((historytext) => { historytextobserver.observe(historytext) })
France.forEach((France) => { Franceobserver.observe(France) })
iconcontainer.forEach((iconcontainer) => { iconcontainerobserver.observe(iconcontainer) })
/* call a function to modify the display type of the element if it's hovering it*/
document.getElementById("programme").onmouseenter = flex;
document.getElementById("programmes").onmouseenter = flex;
document.getElementById("programme").onmouseleave = none;
document.getElementById("programmes").onmouseleave = none;



