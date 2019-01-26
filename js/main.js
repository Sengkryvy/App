
  
  
  // USE LIKE:
  


$(document).ready(function () {
    jQuery.fn.clickToggle = function(a,b) {
        var ab = [b,a];
        return this.on("click", function(){ ab[this._tog^=1].call(this); });
      };

    $(".track-card").clickToggle(function playSound() {   
        // alert("AAA");
        b.play();
   }, function() {
        // alert("BBB");
        b.pause();
   });


    $("#toggle").click(function () {
        // function playSound();
        $("aside").toggleClass("aside");
        $("#content").toggleClass("ml-0 col-md-12 col-xl-12 col-lg-12");
        // $("#content").toggleClass("offset-0, offset-md-0, offset-lg-0, offset-xl-0, offset-sm-0, col-sm-12 col-12 col-md-6 col-lg-6 col-xl-12");
        $("#search").toggleClass("ml-md-4")
        // $("#search").toggleClass("ml-50")

    });

    // $("#play").click(function () {
    //     if ($(this).attr("src").toString().indexOf('source/img/icons8-play-30.png') != -1) {

    //         this.src = this.src.replace("source/img/icons8-play-30.png", "source/img/icons8-pause-30.png");
    //         // function pause();

    //     } else {

    //         this.src = this.src.replace("source/img/icons8-pause-30.png", "source/img/icons8-play-30.png");
    //         // function play();

    //     }


});

// $('#audio')[0].play();

// $('#audio').on("play", function (me) {
//     $('audio').each(function (i, e) {
//         if (e !== me.currentTarget) {
//             this.pause();
//         }
//     });
// });









var a = new Audio('source/music/In The End - Linkin Park.mp3');
var b = new Audio('https://firebasestorage.googleapis.com/v0/b/musicapp-4582e.appspot.com/o/In%20The%20End%20-%20Linkin%20Park.mp3?alt=media&token=8d74a9c1-77a5-4d38-baf4-d8bb4113f34f');
// function playSound() {

//     a.play();
// }

// function pauseSound() {

//     a.pause();
// }



// $("#card").click(
//     function playSound () {
//         // alert("hello")
//         a.play();
//         // $(this).css({"width": "100px"})
//     }
// );

// $('#toggle').toggle(function () {
//     $("#search").css({paddin: "0px"});
// }, function () {
//     $("#search").css({borderBottomLeftRadius: "5px"});
// });

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