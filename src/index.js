import "./styles.css";
import * as pageContent from "./pageContent.js";


pageContent.loadHome();
pageContent.fullScreenStyling.load();

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    removeAllContent();
    pageContent.loadHome();
    pageContent.fullScreenStyling.load();
});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    removeAllContent();
    pageContent.fullScreenStyling.remove();
    pageContent.loadMenu();
});

const about = document.querySelector("#about");
about.addEventListener("click", () => {
    removeAllContent();
    pageContent.loadAbout();
    pageContent.fullScreenStyling.load();
});

const contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    removeAllContent();
    pageContent.fullScreenStyling.remove();
    pageContent.loadContact();
});

function removeAllContent() {
    const content = document.querySelector("#content")
    content.textContent = "";
};

