$(document).ready(function () {
    jQuery.fn.clickToggle = function (a, b) {
        var ab = [b, a];
        return this.on("click", function () {
            ab[this._tog ^= 1].call(this);
        });
    };

    //declaring variable
    // var bread = $("#bread");
    // var fbBread = firebase.database().ref().child("better").child("title");
    // var list1 = $("#list1");
    // var fbList1 =  firebase.database().ref().child("better");

    // fbList1.child("cover").on('value',function(datasnapshot) {
    //     console.log(datasnapshot.val());
    //     console.log($(list1[0].children[0].children[0].children[0]).css("background-image" , datasnapshot.val()));
    // })


    $("#toggle").click(function () {
        $("aside").toggleClass("aside");
        $("#content").toggleClass("ml-0 col-md-12 col-xl-12 col-lg-12");
        $("#search").toggleClass("ml-md-4")
    });

    // bread.click(function() {
    //     fbBread.on('value', function(datasnapshot) {
    //         bread.text(datasnapshot.val());
    //     })
    // })


    //menu selection
    $("aside ul li a").click(function () {
        $("aside ul li, .active-menu").removeClass("active-menu");
        $(this).parent().addClass("active-menu");
        $(this).addClass("active-menu");
    })

    //display page respond to selected menu
    $("#menu-explore").click(function () {
        $("#songs, #albums, #artists").addClass("hide");
        $("#explore").removeClass("hide");
    })
    $("#menu-songs").click(function () {
        $("#albums, #artists, #explore").addClass("hide");
        $("#songs").removeClass("hide");
    })
    $("#menu-albums").click(function () {
        $("#songs, #artists, #explore").addClass("hide");
        $("#albums").removeClass("hide");
    })

    //declara var for song selection
    var prevSong = new Audio;
    var playingSong = null;

    //select song in card
    $(".track-card").clickToggle(
        function () {
            // b.play();
        },
        function () {
            // b.pause();
        }

    );

    //song selection in card
    $(".track-card").click(function () {
        var song = {
            title: $(this.children[1].children[0].children[0]).text(),
            artist: $(this.children[1].children[1].children[0]).text(),
            album: null,
            src: $(this).attr("src"),
            cover: $(this.children[0].children[0]).css("background-image"),
        }

        playingSong = new Audio(song.src);
        // console.log(playingSong.duration())
        prevSong.pause();
        playingSong.play();
        prevSong = playingSong;

        $(".play-artwork span").css({
            "background-image": song.cover
        });
        $(".play-info .info .title p").text(song.title);
        $(".play-info .info .artist p").text(song.artist);
        $(".play-progress .control #play i").text("pause");
    })

    //song selection in list
    $(".list-songs table tbody tr").click(function () {

        var song = {
            title: $(this.children[1]).text(),
            artist: $(this.children[2]).text(),
            album: $(this.children[3]).text(),
            src: $(this).attr("src"),
            duration: 0,
            cover: $(this.children[0].children[0].children[0]).css("background-image"),
        }

        playingSong = new Audio(song.src);
        prevSong.pause();
        playingSong.play();
        prevSong = playingSong;
        var songDuration;
        $(playingSong).on("canplay", function () {
            song = {duration: this.duration}
            var minutes = Math.floor(song.duration / 60);
            var seconds = Math.ceil(song.duration - minutes * 60);
            // console.log(minutes, seconds);
            $('#duration').text(minutes+":"+seconds);
        });

        
        $(".list-songs table tbody tr").removeClass("current-song");
        $(this).addClass("current-song");

        $(".play-artwork span").css({
            "background-image": song.cover
        });
        $(".play-info .info .title p").text(song.title);
        $(".play-info .info .artist p").text(song.artist);
        $(".play-progress .control #play i").text("pause");
        // $(".play-progress .control #play").attr("id", "pause");
    })

    // pause song
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


});

// var b = new Audio('https://firebasestorage.googleapis.com/v0/b/musicapp-4582e.appspot.com/o/In%20The%20End%20-%20Linkin%20Park.mp3?alt=media&token=8d74a9c1-77a5-4d38-baf4-d8bb4113f34f');

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