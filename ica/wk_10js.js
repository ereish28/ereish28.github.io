document.addEventListener("DOMContentLoaded", function () {
    let my_var = 100;
    var my_other_var = "helo world";
    const this_is_a_constant = "constant";
    console.log(my_other_var);
    my_other_var += "!";


    console.log(document.getElementById("my_head"));

    document.getElementById("my_head").addEventListener("click", function(e){
        alert("clicked the h1");


        console.log(document.getElementById("p"));

        paragraph.addEventListener("mouseover", function(e) {
            alert("hovering");
        });

        });
    });
