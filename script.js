//load what local storage when page loads up 
function load() {

    localStorage.getItem($(".description").val());

    $("#0 .description").val(localStorage.getItem("0"));

    for (var i = 0; i < 9; i++) {
        $("#" + [i] + " .description").val(localStorage.getItem([i]));
    }
}




//save button response
$(".saveBtn").click(function() {
    // console.log($(this).siblings(".description").val());
    // save the info to the local storage
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
});

//keep information updated in specific hour

//past hour 

//future hour

//

load();