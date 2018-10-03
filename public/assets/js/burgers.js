$(function() {
    $(".devourButton").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = {
            devoured: true
        };
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function() {
            location.reload();
        });
    });

    $(".addBurgerForm").on("submit", function(event) {
        event.preventDefault();
        var burg = {
            burger_name: $("#newBurg").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burg
        }).then(function() {
            location.reload();
        });
    });
});