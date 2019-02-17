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

});