function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            console.log(data.fact); // Logs the fact to the console
            document.getElementById('catFact').textContent = data.fact; // Displays the fact on the page
        })
        .catch(error => console.error('Error:', error));
}
