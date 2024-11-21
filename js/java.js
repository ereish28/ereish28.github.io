fetch('../js/projectjson.json')
    .then(response =>{
        return response.json();
    }).then(projects =>{
        console.log(projects);
        parseData(projects);
    }).catch(err =>{
        console.log(`{err}`)
    })

function parseDate(data) {
    for(let i=0; i < data.projects.length; i++) {
        document.getElementById("projects").innerHTML += `
            <div class="row project" id="${data.projects[i].subdomain}">
                <div class="projimg">
                    <img src="images/insert image from object`>
                </div>
                <div class ="description">
                    <h2>${data.projects[i].name}</h2> 
                    <p class="subtitle">${data.projects[i].subtitle}</p>
                    <p>${data.projects[i].abstract}</p>
                </div>
            </div>`;
    }
}