var order = {};

$(".hidden").on("change", function() {
    console.log('a');
    setTimeout(function() {
        updateTotal();
    }, 50);
});

function updateTotal() {
    var totalString = "";
    $(".hidden").each(function() {
        if ($(this).prop("checked")) {
            totalString = totalString.concat('<li class="item">' + $(this).siblings("label").html() + "</li>");
        }
        
    });
    console.log(totalString);
    $("ul").html(totalString);

}

/*$(".ui radio checkbox checked").on("click", function() {
    $(".ui relaxed list").html('<li class="item">' + order["tortilla"] + '</li>');
    console.log(order["tortilla"]);
});
*/
$(".ui.checkbox").checkbox();
