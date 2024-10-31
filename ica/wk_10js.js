


console.log(document.getElementById("my_head"));

document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").style.color = "red";
    document.getElementById("paragraph").innerHTML = "html text";
})