function scrollContact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});
}
/* HAMBURGER MENU */
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");
const navLinks = nav.querySelectorAll("a"); // select all links inside nav

// Toggle menu open/close
toggle.addEventListener("click", function(){
    nav.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* CONTACT FORM */

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");
const btn = form.querySelector("button");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            msg.innerText = "✅ Message Sent Successfully!";
            form.reset();
        } else {
            msg.innerText = "❌ Error! Check form or try again.";
        }
    })
    .catch(() => {
        msg.innerText = "❌ Network error!";
    })
    .finally(() => {
        btn.innerText = "Send Message";
        btn.disabled = false;
    });
});
/* pop up process */

function openProcess(card){

document.getElementById("processPopup").style.display="flex";

document.getElementById("popupContent").innerHTML = card.innerHTML;

}

function closeProcess(){

document.getElementById("processPopup").style.display="none";

}
function exitPage() {
    window.location.href = "index.html"; // change "index.html" to your homepage URL
}
// OPEN IMAGE
function openImage(img) {
    var popup = document.getElementById("imagePopup");
    var popupImg = document.getElementById("popupImg");

    popup.style.display = "flex";
    popupImg.src = img.src;
}

// CLOSE IMAGE
function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}
// ============whatsapp hide when scrool down ===========
const whatsappBtn = document.querySelector(".whatsapp"); // select by class
const footer = document.getElementById("footer");

window.addEventListener("scroll", function () {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        whatsappBtn.style.opacity = "0";
        whatsappBtn.style.pointerEvents = "none"; // hide and unclickable
    } else {
        whatsappBtn.style.opacity = "1";
        whatsappBtn.style.pointerEvents = "auto"; // show and clickable
    }
});
// when card is open
const cards = document.querySelectorAll('.process-container .process-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('open'); // add/remove 'open' class on click
  });
});