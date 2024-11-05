// Array of fortunes
const fortunes = [
    { numChildren: 2, partnerName: "Alex", geoLocation: "Denver", jobTitle: "Engineer" },
    { numChildren: 3, partnerName: "Jamie", geoLocation: "Boulder", jobTitle: "Designer" },
    { numChildren: 1, partnerName: "Taylor", geoLocation: "New York", jobTitle: "Doctor" }
];

// Function to tell a random fortune
function tellRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const { numChildren, partnerName, geoLocation, jobTitle } = fortunes[randomIndex];
    const fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById("output").innerHTML = `<p>${fortune}</p>`;
}

// Event listener for fortune button
document.getElementById("fortuneButton").addEventListener("click", tellRandomFortune);

// Function to calculate dog age
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}

// Function to handle dog age input
function handleDogAgeInput() {
    const age = prompt("Enter your dog's age in human years:");
    if (age) {
        const message = calculateDogAge(Number(age));
        document.getElementById("output").innerHTML = `<p>${message}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid age.</p>`;
    }
}

// Event listener for dog age button
document.getElementById("dogAgeButton").addEventListener("click", handleDogAgeInput);

// Function to reverse a number
function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}

// Function to sort letters in alphabetical order
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
