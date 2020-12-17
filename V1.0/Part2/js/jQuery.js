$("input").attr("type", "color");
$("a").css("color", "red");

$("#buttonTest").click(function () {
    alert("button has been clicked motherfucker");
});

$("#pickleButton").click(function () {
    console.log("Si jala");
    $("#pickle").fadeToggle("slow");
});

$("#color").on("change", function () {
    $(".jumbotron").css("backgroundColor", $(this).val())
});

$("#selectTitle").change(function () {
    var title = $(this).val();
    $(".jumbotron h1").text(title);
});

$("button").on("mouseenter", function () {
    $(this).removeClass("btn-primary");
    $(this).addClass("btn-warning");
});
$("button").on("mouseleave", function () {
    $(this).removeClass("btn-warning");
    $(this).addClass("btn-primary");
});