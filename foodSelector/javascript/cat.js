$(() => {
    $("button").on("click", () => {
        var numberOfListItem = $("li").length+1;
        var randomOfListItem = Math.floor(Math.random()*numberOfListItem);
        if(randomOfListItem == numberOfListItem-1) randomOfListItem = 2;
        console.log(randomOfListItem);
        $("h1").text($("li").eq(randomOfListItem).text());
        $("#pic").attr({
            src = ""
        });
    });
});

