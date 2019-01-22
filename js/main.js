$(document).ready(function () {

    $("#play").click(function () {
        if ($(this).attr("src").toString().indexOf('source/img/icons8-play-30.png') != -1) {
    
            this.src = this.src.replace("source/img/icons8-play-30.png", "source/img/icons8-pause-30.png");
            // function pause();

        } else {

            this.src = this.src.replace("source/img/icons8-pause-30.png", "source/img/icons8-play-30.png");
            // function play();

        }


    });

});

$("#toggle").click(function () {
    $("aside").toggleClass("aside");
    // $("#home").toggleClass("col-sm-12 col-12 col-md-12 col-lg-12 col-xl-12")
    $(".content").toggleClass("offset-lg-0 offset-xl-0 offset-md-0 offset-sm-0 offset-0  col-sm-12 col-12 col-md-12 col-lg-12 col-xl-12")
});

function play() {

}

function pause() {

}

function next() {

}

function prev() {

}

function shuffle() {

}

function repeat() {

}