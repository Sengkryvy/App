var prevSong = new Audio;
var playingSong = null;
var song;
var add = 0;
var current;


$(document).ready(function () {
    jQuery.fn.clickToggle = function (a, b) {
        var ab = [b, a];
        return this.on("click", function () {
            ab[this._tog ^= 1].call(this);
        });
    };

    //song selection in card
    $(".track-card").click(function () {
        current = $(this);

        //set info to object song
        setSongInCard();

        playSong();

        setPlayingInfo();
    })

    //song selection in list
    $(".list-songs table tbody tr").click(function () {

        // get and play song
        // add += 1;
        current = $(this)

        //set info to object song
        setSongInList(current);

        playSong();

        //set playing info in playing section
        $(".list-songs table tbody tr").removeClass("current-song");
        $(this).addClass("current-song");

        setPlayingInfo();
    })

    // pause and play song
    $("#play, #pause").click(function () {
        var playingStatus = $(".play-progress .control #play i");
        if (playingStatus.text() == "play_arrow") {
            playingStatus.text("pause");
            playingSong.play();
        } else {
            playingStatus.text("play_arrow");
            playingSong.pause();
        }
    })

    //go to next song
    $("#next").click(function () {
        var section = current.parent().parent().parent();
        //control for weekly chart list
        if (section.parent().is('#weekly-chart')) {
            if (current.is(":last-child")) {
                $(current).removeClass("current-song");
                current = current.parent().children(':first-child');
            } else {
                current = current.next();
                $(".current-song").removeClass("current-song").next().addClass("current-song");                
            }
        } else { // control for songs list
            console.log(current[0]);
            console.log("songs")
            if (current.is(":last-child")) {
                console.log("last");
                if (current.parent().next().is("thead")) {
                    $(current).removeClass("current-song")
                    current = current.parent().next().next().children();
                } else {
                    current.removeClass('current-song');
                    current = current.parent().children(':first-child');
                }
                $(current).parent().children(':first-child').addClass("current-song");

            } else {
                current = current.next();
                $(".current-song").removeClass("current-song").next().addClass("current-song");
            }
        }

        setSongInList(current);
        playSong();
        setPlayingInfo();
    })

    //go to prev song
    $("#prev").click(function () {

        if (current.is(":first-child")) {
            if (current.parent().next().is("thead")) {
                $(current).removeClass("current-song")
                current = current.parent().prev().prev().children();
            } else if (current.parent().is(":nth-child(3)")) {

            } else {
                current.removeClass('current-song');
                current = current.parent().children(':last-child');
            }
            $(current).parent().children(':last-child').addClass("current-song");
        } else {
            current = current.prev()
            $(".current-song").removeClass("current-song").prev().addClass("current-song");
        }
        setSongInList(current);
        playSong();
        setPlayingInfo();
    })



})

function setSongInCard() {
    song = {
        title: $(current.children[1].children[0].children[0]).text(),
        artist: $(current.children[1].children[1].children[0]).text(),
        album: null,
        duration: 0,
        src: $(current).attr("src"),
        cover: $(current.children[0].children[0]).css("background-image"),
    };
}

function setSongInList(current) {
    song = {
        title: current.children(":nth-child(2)").text(),
        artist: current.children(":nth-child(3)").text(),
        album: current.children(":nth-child(4)").text(),
        src: current.attr("src"),
        duration: 0,
        cover: current.children(":nth-child(1)").children(":nth-child(1)").children(":nth-child(1)").css("background-image"),
    };
}

function setPlayingInfo() {

    //set duration
    $(playingSong).on("canplay", function () {
        song = {
            duration: this.duration,
        };
        var minutes = Math.floor(song.duration / 60);
        var seconds = Math.ceil(song.duration - minutes * 60);
        $('#duration').text(minutes + ":" + seconds);
    });

    //set playing info
    $(".play-artwork span").css({
        "background-image": song.cover
    });
    $(".play-info .info .title p").text(song.title);
    $(".play-info .info .artist p").text(song.artist);
    $(".play-progress .control #play i").text("pause");
}

function playSong() {
    playingSong = new Audio(song.src);
    prevSong.pause();
    playingSong.play();
    prevSong = playingSong;
}

function nextSong() {}