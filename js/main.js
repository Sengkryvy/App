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