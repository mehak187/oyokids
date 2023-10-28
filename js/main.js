
$(document).ready(function () {
    $(".defaultp1").click(function () {
        $(".go1").show();
        $(".defaultp1").hide();
        $(".player-9").hide();
        $(".player-1").show();
        $(".cardd1 img").css("visibility", "hidden");
        $(".cardd2 img").css("visibility", "hidden");
        $(".cardd3 img").css("visibility", "hidden");
        $(".cardd4 img").css("visibility", "hidden");
        $(".cardd5 img").css("visibility", "hidden");
        $(".cardd6 img").css("visibility", "hidden");
        $(".cardd7 img").css("visibility", "hidden");
        $(".cardd8 img").css("visibility", "hidden");
        $(".cardd9 img").css("visibility", "hidden");
        $(".cardd1").removeClass("b-none");
        $(".cardd2").removeClass("b-none");
        $(".cardd3").removeClass("b-none");
        $(".cardd4").removeClass("b-none");
        $(".cardd5").removeClass("b-none");
        $(".cardd6").removeClass("b-none");
        $(".cardd7").removeClass("b-none");
        $(".cardd8").removeClass("b-none");
        $(".cardd9").removeClass("b-none");
    });
    $(".go1").click(function () {
        $(".defaultp2").show();
        $(".go1").hide();
        $(".cardd1 img").css("visibility", "visible");
        // $(".cardd1").css("border", "none");
        $(".cardd1").addClass("b-none");
    });
    $(".defaultp2").click(function () {
        $(".defaultp2").hide();
        $(".go2").show();
        $(".player-1").hide();
        $(".player-2").show();
    });
    $(".go2").click(function () {
        $(".defaultp3").show();
        $(".go2").hide();
        $(".cardd2 img").css("visibility", "visible");
        // $(".cardd2").css("border", "none");
        $(".cardd2").addClass("b-none");
    });
    $(".defaultp3").click(function () {
        $(".defaultp3").hide();
        $(".go3").show();
        $(".player-2").hide();
        $(".player-3").show();
    });
    $(".go3").click(function () {
        $(".defaultp4").show();
        $(".go3").hide();
        $(".cardd3 img").css("visibility", "visible");
        // $(".cardd3").css("border", "none");
        $(".cardd3").addClass("b-none");
    });
    $(".defaultp4").click(function () {
        $(".defaultp4").hide();
        $(".go4").show();
        $(".player-3").hide();
        $(".player-4").show();
    });
    $(".go4").click(function () {
        $(".defaultp5").show();
        $(".go4").hide();
        $(".cardd4 img").css("visibility", "visible");
        // $(".cardd4").css("border", "none");
        $(".cardd4").addClass("b-none");
    });
    $(".defaultp5").click(function () {
        $(".defaultp5").hide();
        $(".go5").show();
        $(".player-4").hide();
        $(".player-5").show();
    });
    $(".go5").click(function () {
        $(".defaultp6").show();
        $(".go5").hide();
        $(".cardd5 img").css("visibility", "visible");
        // $(".cardd5").css("border", "none");
        $(".cardd5").addClass("b-none");
    });

    $(".defaultp6").click(function () {
        $(".defaultp6").hide();
        $(".go6").show();
        $(".player-5").hide();
        $(".player-6").show();
    });
    $(".go6").click(function () {
        $(".defaultp7").show();
        $(".go6").hide();
        $(".cardd6 img").css("visibility", "visible");
        // $(".cardd6").css("border", "none");
        $(".cardd6").addClass("b-none");
    });
    $(".defaultp7").click(function () {
        $(".defaultp7").hide();
        $(".go7").show();
        $(".player-6").hide();
        $(".player-7").show();
    });
    $(".go7").click(function () {
        $(".defaultp8").show();
        $(".go7").hide();
        $(".cardd7 img").css("visibility", "visible");
        // $(".cardd7").css("border", "none");
        $(".cardd7").addClass("b-none");
    });
    $(".defaultp8").click(function () {
        $(".defaultp8").hide();
        $(".go8").show();
        $(".player-7").hide();
        $(".player-8").show();
    });
    $(".go8").click(function () {
        $(".defaultp9").show();
        $(".go8").hide();
        $(".cardd8 img").css("visibility", "visible");
        // $(".cardd8").css("border", "none");
        $(".cardd8").addClass("b-none");
    });
    $(".defaultp9").click(function () {
        $(".defaultp9").hide();
        $(".go9").show();
        $(".player-8").hide();
        $(".player-9").show();
    });
    $(".go9").click(function () {
        $(".defaultp1").show();
        $(".go9").hide();
        $(".cardd9 img").css("visibility", "visible");
        // $(".cardd9").css("border", "none");
        $(".cardd9").addClass("b-none");
    });
});
// $(document).ready(function () {
//     $(".cardfix9").click(function () {
//         $(".cardd1 img").css("visibility", "visible");
//         $(".cardd1").css("border", "none");
//         $(".cardfix9").css("visibility", "hidden");
//     });
//     $(".cardfix8").click(function () {
//         $(".cardd2 img").css("visibility", "visible");
//         $(".cardd2").css("border", "none");
//         $(".cardfix8").css("visibility", "hidden");
//     });
//     $(".cardfix7").click(function () {
//         $(".cardd3 img").css("visibility", "visible");
//         $(".cardd3").css("border", "none");
//         $(".cardfix7").css("visibility", "hidden");
//     });
//     $(".cardfix6").click(function () {
//         $(".cardd4 img").css("visibility", "visible");
//         $(".cardd4").css("border", "none");
//         $(".cardfix6").css("visibility", "hidden");
//     });
//     $(".cardfix5").click(function () {
//         $(".cardd5 img").css("visibility", "visible");
//         $(".cardd5").css("border", "none");
//         $(".cardfix5").css("visibility", "hidden");
//     });
//     $(".cardfix4").click(function () {
//         $(".cardd6 img").css("visibility", "visible");
//         $(".cardd6").css("border", "none");
//         $(".cardfix4").css("visibility", "hidden");
//     });
//     $(".cardfix3").click(function () {
//         $(".cardd7 img").css("visibility", "visible");
//         $(".cardd7").css("border", "none");
//         $(".cardfix3").css("visibility", "hidden");
//     });
//     $(".cardfix2").click(function () {
//         $(".cardd8 img").css("visibility", "visible");
//         $(".cardd8").css("border", "none");
//         $(".cardfix2").css("visibility", "hidden");
//     });
//     $(".cardfix1").click(function () {
//         $(".cardd9 img").css("visibility", "visible");
//         $(".cardd9").css("border", "none");
//         $(".cardfix1").css("visibility", "hidden");
//     });
// });

