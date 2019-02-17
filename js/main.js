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
    $("#sample-album").click(function () {
        $(".app #content").find(">div").not(".app .content #album-info").addClass("hide");
        $("#album-info").removeClass("hide");
    });
    $("#american_teen").click(function () {
        $(".app #content").find(">div").not(".app .content #american-teen").addClass("hide");
        $("#american-teen").removeClass("hide");
    });
    $("#spiderman_into_the_spider_verse").click(function () {
        $(".app #content").find(">div").not(".app .content #spiderman-into-the-spider-verse").addClass("hide");
        $("#spiderman-into-the-spider-verse").removeClass("hide");
    });
    $("#live_in_texas").click(function () {
        $(".app #content").find(">div").not(".app .content #live-in-texas").addClass("hide");
        $("#live-in-texas").removeClass("hide");
    });
    $("#artist-khalid").click(function () {
        $(".app #content").find(">div").not(".app .content #khalid").addClass("hide");
        $("#khalid").removeClass("hide");
    });
    $("#artist-keiki-kobayashi").click(function () {
        $(".app #content").find(">div").not(".app .content #album-info").addClass("hide");
        $("#album-info").removeClass("hide");
    });
    $("#artist-marshmello").click(function () {
        $(".app #content").find(">div").not(".app .content #marshmello").addClass("hide");
        $("#marshmello").removeClass("hide");
    });
    $("#artist-post-malone").click(function () {
        $(".app #content").find(">div").not(".app .content #post-malone").addClass("hide");
        $("#post-malone").removeClass("hide");
    });
    $("#artist-lauv").click(function () {
        $(".app #content").find(">div").not(".app .content #lauv").addClass("hide");
        $("#lauv").removeClass("hide");
    });

});
