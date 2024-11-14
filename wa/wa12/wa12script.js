let myData = {};

function fetchData(){
    fetch("https://corsproxy.io/?https://xkcd.com/614/info.0.json")

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
