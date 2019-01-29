$(document).ready(function () {
    jQuery.fn.clickToggle = function (a, b) {
        var ab = [b, a];
        return this.on("click", function () {
            ab[this._tog ^= 1].call(this);
        });
    };

    $("#toggle").click(function () {
        $("aside").toggleClass("aside");
        $("#content").toggleClass("ml-0 col-md-12 col-xl-12 col-lg-12");
        $("#search").toggleClass("ml-md-4")
    });

    $("#menu-explore").click(function () {
        $("#songs").addClass("hide");
        $("#explore").removeClass("hide");
    })

    //display page respond to selected menu
    $("#menu-songs").click(function () {
        $("#songs").removeClass("hide");
        $("#explore").addClass("hide");
    })

    //menu selection
    $("aside ul li a").click(function () {
        $("aside ul li, .active-menu").removeClass("active-menu");
        $(this).parent().addClass("active-menu");
        $(this).addClass("active-menu");
    })


    //select song in card
    $(".track-card").clickToggle(
        function () {
            b.play();
        },
        function () {
            b.pause();
        }

    );

    //song selection in card
    $(".track-card").click(function() {
        var song = {
            title: $(this.children[1].children[0].children[0]).text(),
            artist: $(this.children[1].children[1].children[0]).text(),
            album: null,
            src: $(this.children[0].children[0]).css("background-image"),
        }
                $(".play-artwork span").css({
            "background-image": song.src
        });
        $(".play-info .info .title p").text(song.title);
        $(".play-info .info .artist p").text(song.artist);
    })

    //song selection in list
    $(".list-songs table tbody tr").click(function () {

        $(".list-songs table tbody tr").removeClass("current-song");
        $(this).addClass("current-song");
        var song = {
            title: $(this.children[1]).text(),
            artist: $(this.children[2]).text(),
            album: $(this.children[3]).text(),
            src: $(this.children[0].children[0].children[0]).css("background-image"),
        }

        $(".play-artwork span").css({
            "background-image": song.src
        });
        $(".play-info .info .title p").text(song.title);
        $(".play-info .info .artist p").text(song.artist);
    })


});

var b = new Audio('https://firebasestorage.googleapis.com/v0/b/musicapp-4582e.appspot.com/o/In%20The%20End%20-%20Linkin%20Park.mp3?alt=media&token=8d74a9c1-77a5-4d38-baf4-d8bb4113f34f');

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