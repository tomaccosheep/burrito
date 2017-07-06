
// This function checks to see if you change anything in the "hidden" class
// {{
$(".hidden").on("change", function() { 
    setTimeout(function() {
        updateTotal(); // This waits 50 milliseconds, and then runs updateTotal()
    }, 50);
});
// }}

// This fills out the white box in the upper right-hand corner
// The variable "totalString" contains all HTML that will be injected
// into the element. It gets info from every element in class "hidden"
// that isn't named "delivery" or "terms."
// Then it checks to see if the element is named "tortilla," because then the
// function manipulates the string to be "Wheat flour".split(" ")[0], to
// just get the first word, "Wheat". Then it adds "Tortilla."
// All ingredients are surrounded by list tags, so that the ingredients
// are list items.
// Then it calculates the price and fills that in. It looks at every
// element in the "hidden" class that has a name of "extra-ingredients."
// It adds 50 to the price of 600 cents for every extra ingredient.
// Then it cuts up the numbers to present them properly
// {{ 
function updateTotal() { 
    var totalString = "";
    var price = 600;
    $(".hidden").each(function() {
        if ($(this).prop("checked") && $(this).prop("name") != "delivery" && $(this).prop("name") != "terms") {
            if ($(this).prop("name") === "tortilla") {
                totalString = totalString.concat('<li class="item">' + $(this).siblings("label").html().split(" ")[0] + " Tortilla</li>");
            }
            else {
                totalString = totalString.concat('<li class="item">' + $(this).siblings("label").html() + "</li>");
            }
            if ($(this).prop("checked") && $(this).prop("name") === "extra-ingredients") {
                price = price + 50;
            }
        }
    });
    $("ul").html(totalString);
    $("#total_cost").html("<strong>Total:</strong> $" + price.toString().slice(0, -2) + "." + price.toString().slice(-2));
}
// }}

$(".ui.checkbox").checkbox();
