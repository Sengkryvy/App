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

    

});