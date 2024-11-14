const apiEndpoint = 'https://catfact.ninja/fact';

function getCatFact() {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data.fact); 
            displayRes(data.fact);  
        })
        .catch(error => {
            console.error('Error:', error); 
            alert('Failed to fetch a cat fact'); 
        });
}

function displayRes(fact) {
    document.getElementById('catFact').textContent = fact;
}

getCatFact();
