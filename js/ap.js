let opneCanvas = document.querySelector(".opne_canvas");
let bhDark = document.querySelector(".bg_darkjhf");
let closeCanvas = document.querySelector(".oncanvs_close");

opneCanvas.addEventListener("click", function() {
    bhDark.style.transform = "translateX(0)";
})
closeCanvas.addEventListener("click", function() {
    bhDark.style.transform = "translateX(102%)";
})



$(document).ready(function() {
    let check = 0;
    let opney = 2;

    $("#menu_md_onw").on("click", function() {
        if (check == 0) {
            $(".daba").css({ "display": "block", "height": "auto" });
            check = 1;
        } else {
            $(".daba").css({ "display": "none", "height": "0" });
            check = 0;
        }
    })

    $("#menu_md_onw").on("click", function() {
        if (opney == 2) {
            $(".trigger i").removeClass('ri-menu-2-line');
            $(".trigger i").addClass('ri-close-large-line');
            opney = 3;
        } else {
            $(".trigger i").addClass('ri-menu-2-line');
            $(".trigger i").removeClass('ri-close-large-line');
            opney = 2;
        }
    })

});