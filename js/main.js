var prevSong = new Audio;
var playingSong = null;
var song;
var i=0;
var startTime = 0 ,startMinutes = 0, startSeconds = 0;
var isPaused = false; 


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


    //menu selection
    $("aside ul li a").click(function () {
        $("aside ul li, .active-menu").removeClass("active-menu");
        $(this).parent().addClass("active-menu");
        $(this).addClass("active-menu");
    })

    //display page respond to selected menu
    $("#menu-explore").click(function () {
        $(".app #content").find(">div").not(".app .content #explore").addClass("hide");
        $("#explore").removeClass("hide");
        $("#play").parent().removeClass().addClass("explore");
    })
    $("#menu-songs").click(function () {
        $(".app #content").find(">div").not(".app .content #songs").addClass("hide");
        $("#songs").removeClass("hide");
    })
    $("#menu-albums").click(function () {
        $(".app #content").find(">div").not(".app .content #albums").addClass("hide");
        $("#albums").removeClass("hide");
    })
    $("#menu-artists").click(function () {
        $(".app #content").find(">div").not(".app .content #artists").addClass("hide");
        $("#artists").removeClass("hide");
    })



    
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
        song = {
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
            

            // track progress bar
            var onePercentDuration=(song.duration/100);
            var endTime = song.duration;
            var trackProgressBar = setInterval(function () {
                if (!isPaused){
                    $("#song-progress").css("width",i+"%");
                    i++; // incrementation
                    startTime = startTime + onePercentDuration;
                    // reset progress bar
                    if (i == 101){
                        clearInterval(trackProgressBar);
                        i=0;
                        $("#song-progress").css("width",i+"%");
                    }
                }
                // console.log(i);
            }, onePercentDuration*1000)
            
            // track progress timer
            var trackProgressTimer = setInterval(function (){
            var endMinutes = Math.floor(song.duration / 60);
            var endSeconds = Math.ceil(song.duration - minutes * 60);
            // startMinutes = startSeconds = 0
                if (!isPaused){
                    startSeconds = startSeconds + 1; // incrementation
                    if (startSeconds < 10){
                        $('#startDuration').text(startMinutes+":0"+startSeconds);
                    }
                    else{
                        if (startSeconds == 60){
                            startMinutes = startMinutes + 1;
                            startSeconds = 0;
                            $('#startDuration').text(startMinutes+":"+startSeconds);
                        }
                        else{
                            $('#startDuration').text(startMinutes+":"+startSeconds);
                        }
                    }
                    // console.log(startMinutes, startSeconds);
                    if (startMinutes == endMinutes && startSeconds == endSeconds){
                        clearInterval(trackProgressTimer);
                        startMinutes = 0, startSeconds = 0;
                        $('#startDuration').text(startMinutes+":"+startSeconds);
                    }
                }
            }, 1000)
        });
        
        $(".list-songs table tbody tr").removeClass("current-song");
        $(this).addClass("current-song");

        setPlayingInfo();
    })

    // pause song
    $("#play, #pause").click(function (e) {
        var playingStatus = $(".play-progress .control #play i");
        if (playingStatus.text() == "play_arrow") {
            playingStatus.text("pause");
            playingSong.play();
            e.preventDefault();
            isPaused = false;
        } else {
            playingStatus.text("play_arrow");
            playingSong.pause();
            e.preventDefault();
            isPaused = true;
        }
    })

    //go to next song
    $("#next").click(function () {
        var section = current.parent().parent().parent();
        var temp;
        //control for weekly chart list
        if (section.parent().is('#weekly-chart')) {
            if (current.is(":last-child")) {
                current.removeClass("current-song");
                current = current.parent().children(':first-child');
            } else {
                current = current.next();
                $(".current-song").removeClass("current-song").next().addClass("current-song");
            }
        } else { //control for song list
            if (current.is(":last-child")) {
                current.removeClass("current-song");
                current = current.parent().next().next().children(':first-child');
                current.addClass("current-song");
            } else {
                current.removeClass("current-song");
                current = current.next();
                current.addClass("current-song");
            }
        }
    // seeking (click on progress bar to go to a position)
    var isSeeking = false;
    var progressPosition = $("#song-progress").css("width");
    // console.log(progressPosition);
    $("#song-progress").click(function(e){
        var position = e.pageX - this.offsetLeft;
        console.log(position);
    });

        setSongInList(current);
        playSong();
        setPlayingInfo();
    })

    //go to prev song
    $("#prev").click(function () {
        var section = current.parent().parent().parent();
        var temp;
        //control for weekly chart list
        if (section.parent().is('#weekly-chart')) {
            if (current.is(":first-child")) {
                current.removeClass("current-song");
                current = current.parent().children(':last-child');
                current.addClass("current-song");
            } else {
                current = current.prev();
                $(".current-song").removeClass("current-song").prev().addClass("current-song");
            }
        } else { //control for song list
            if (current.is(":first-child")) {
                current.removeClass("current-song");
                current = current.parent().prev().prev().children(':last-child');
                current.addClass("current-song");
            } else {
                current.removeClass("current-song");
                current = current.prev();
                current.addClass("current-song");
            }
        }

        setSongInList(current);
        playSong();
        setPlayingInfo();
    })

});

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