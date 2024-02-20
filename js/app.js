$(document).ready(function () {


    // console.log("DOM Loaded");
    // $(window).on('load', function(){
    //     console.log("Window loaded!");
    //     $('.preloader').addClass('complete');
    // });

    //  CV Download
    document.getElementById("downloadLink").addEventListener("click", function () {
        var confirmDownload = confirm("Do you want to download the CV?");
        if (confirmDownload) {
            var link = document.createElement("a");
            link.href = "./Resume/Darshan_Pawar_Resume.pdf";
            link.download = "Darshan_pawar_resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });


    // header
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    var typed = new Typed(".element", {
        strings: ["Darshan Pawar", "a Developer", "a Designer", "an Enthusiastic Coder"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000,
    });

    // progress bars

    var waypoint = new Waypoint({
        element: document.getElementById("exp-id"),
        handler: function (direction) {
            if (direction === "down") {
                // This condition ensures the handler only runs when scrolling down
                var p = document.querySelectorAll(".progress-bar");

                p[0].style.width = "95%";
                p[0].style.transition = "width 1.5s ease-in-out";

                p[1].style.width = "95%";
                p[1].style.transition = "width 2s ease-in-out";

                p[2].style.width = "75%";
                p[2].style.transition = "width 2s ease-in-out";

                p[3].style.width = "45%";
                p[3].style.transition = "width 2.5s ease-in-out";

                p[4].style.width = "85%";
                p[4].style.transition = "width 2.5s ease-in-out";
            }
        },
        offset: "90%",
    });

    // Filterz

    var filterizd = $(".filter-container").filterizr({
        animationDuration: 0.5,
    });

    //owl Carousel

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
    });
});
