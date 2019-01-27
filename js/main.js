
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
        $("#search").toggleClass("ml-md-4")

    });


});










var a = new Audio('source/music/In The End - Linkin Park.mp3');
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