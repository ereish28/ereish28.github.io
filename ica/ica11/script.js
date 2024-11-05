// Function to tell fortune
function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById("output").innerHTML += `<p>${fortune}</p>`;
}

// Calling tellFortune function
tellFortune(2, "Alex", "Denver", "Engineer");
tellFortune(3, "Jamie", "Boulder", "Designer");
tellFortune(1, "Taylor", "New York", "Doctor");

// Function to calculate dog age
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const message = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById("output").innerHTML += `<p>${message}</p>`;
}

// Calling calculateDogAge function
calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(5);

// Challenge: Enable user input for dog age
function inputDogAge() {
    const age = prompt("Enter your dog's age in human years:");
    calculateDogAge(Number(age));
}

// Call inputDogAge to prompt user
inputDogAge();

// Function to reverse a number
function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    document.getElementById("output").innerHTML += `<p>Reversed number: ${reversed}</p>`;
}

// Calling reverseNumber function
reverseNumber(32243);
reverseNumber(12345);

// Function to sort letters in alphabetical order
function alphabeticalOrder(str) {
    const sortedStr = str.split('').sort().join('');
    document.getElementById("output").innerHTML += `<p>Sorted letters: ${sortedStr}</p>`;
}

// Calling alphabeticalOrder function
alphabeticalOrder('webmaster');
alphabeticalOrder('javascript');

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    const capitalized = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById("output").innerHTML += `<p>Capitalized: ${capitalized}</p>`;
}

// Calling capitalizeWords function
capitalizeWords('the quick brown fox');
capitalizeWords('hello world');