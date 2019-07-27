window.onload = function (e) {
    document.getElementById('menu').addEventListener('click', function(e) {
        toggleElementVisibility('submenu-item');
    });
    document.getElementById('search').addEventListener('click', function(e) {
        toggleElementVisibility('search-bar');
    });
    document.getElementById('login').addEventListener('click', function(e) {
        toggleElementVisibility('login-form');
    });
    document.getElementById('sign-up').addEventListener('click', function(e) {
        toggleElementVisibility('sign-up-form');
    });
}

function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}

function toggleElementVisibility(elementId, event) {
    document.getElementById(elementId).classList.toggle('show');
    setTimeout(() => {
        document.getElementById(elementId).classList.toggle('element-visible');
    }, 100);
}
