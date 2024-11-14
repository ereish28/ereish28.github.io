let myData = {};

function fetchData(){
    constRandom = Math.floor(Math.random() * 3000);
    fetch(`https://corsproxy.io/?https://xkcd.com/${constRandom}/info.0.json`)

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
        document.getElementById("title").innerHTML = myData.title;    //title
        document.getElementById("comic").src = myData.img; //displaying comic
        document.getElementById("comic").alt = myData.alt;   //alt tex
    })

}

fetchData();

document.getElementById('getNewComic').addEventListener('click', e=> {fetchData();});
