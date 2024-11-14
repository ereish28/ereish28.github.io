let myData = {};

function fetchData(){
    Math.floor(Math.random() * 3000);
    fetch("https://corsproxy.io/?https://xkcd.com/${}/info.0.json")

    .then((res) => {
        if(res.ok) {
            return res.json();
        }

        else {
            console.log(res);
        }
    })

    .then ((res) => {
        myData = res;
        console.log(myData);
        document.getElementById("comic").innerHTML = myData.title    //title
        document.getElementById("comic").src = myData.img; //displaying comic
        document.getElementById("comic").alt = myData.alt   //alt text

    })

}

fetchData();

getNewComic();

document.querySelector('button').addEventListener('click', getNewComic);
