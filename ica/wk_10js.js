document.addEventListener("DOMContentLoaded", function () {
    let my_var = 100;
    var my_other_var = "helo world";
    const this_is_a_constant = "constant";
    console.log(my_other_var);
    my_other_var += "!";



document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    const heading = document.getElementById("my_head");
    const paragraph = document.getElementById("p");

    console.log("Heading element:", heading);   // Check if heading is found
    console.log("Paragraph element:", paragraph); // Check if paragraph is found

    heading?.addEventListener("click", function(e) {
        alert("clicked the h1");
    });

    paragraph?.addEventListener("mouseover", function(e) {
        alert("hovering");
        e.target.style.color = "red";
    });

    paragraph?.addEventListener("mouseout", function(e) {
        e.target.style.color = ""; // Reset the color when the mouse leaves
    });
}); 


