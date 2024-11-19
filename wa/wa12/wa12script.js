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
        document.getElementById("title").innerHTML = myData.title;

        const date = `${myData.year}-${myData.month.padStart(2, '0')}-${myData.day.padStart(2, '0')}`;
        document.getElementById("date").innerHTML = `Date: ${date}`;


        document.getElementById("comic").src = myData.img; //displaying comic
        document.getElementById("comic").alt = myData.alt;   //alt tex
    })
    .catch((error) => console.error("Error fetching the comic:", error));

}

fetchData();

document.getElementById('getNewComic').addEventListener('click', e=> {fetchData();});
