var nav = document.getElementById('navbar-changing-color');


window.addEventListener('scroll', function (event) {
    event.preventDefault();
    if (window.scrollY <= nav.scrollHeight) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#09353E';
        nav.style.transition = 'background-color 200ms linear'
    }
});

function searchOpening() {
    if (document.getElementById("form").style.display === "none") {
        document.getElementById("form").style.display = "block";
    } else {
        document.getElementById("form").style.display = "none";
    }
}

function audioOpening() {
    if (document.getElementById("audio").style.display === "none") {
        document.getElementById("audio").style.display = "block";
    } else {
        document.getElementById("audio").style.display = "none";
    }
}