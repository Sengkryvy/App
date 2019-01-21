$(document).ready(function () {

    $("#play").click(function () {
        if ($(this).attr("src").toString().indexOf('source/img/icons8-play-30.png') != -1) {

            function pause();
            this.src = this.src.replace("source/img/icons8-play-30.png", "source/img/icons8-pause-30.png");

        } else {

            function play();
            this.src = this.src.replace("source/img/icons8-pause-30.png", "source/img/icons8-play-30.png");

        }

    });

});