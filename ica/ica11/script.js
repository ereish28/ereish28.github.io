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
    const age = prompt("What is your puppy's age in human years?");
    if (age !== null && age.trim() !== "") {
        const dogAgeMessage = calculateDogAge(Number(age));
        document.getElementById("output").innerHTML = `<p>${dogAgeMessage}</p>`;
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

// Function to handle number reversal input
function handleReverseNumber() {
    console.log("Reverse function called"); // Debugging log
    const num = prompt("Enter a number to reverse:");
    if (num !== null && num.trim() !== "") {
        const reversed = reverseNumber(num);
        document.getElementById("output").innerHTML = `<p>Reversed number: ${reversed}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid number.</p>`;
    }
}

// Event listener for reverse button
document.getElementById("reverseButton").addEventListener("click", handleReverseNumber);

// Function to sort letters in alphabetical order
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// Function to handle alphabetical order input
function handleAlphabeticalOrder() {
    console.log("Sort letters function called"); // Debugging log
    const str = prompt("Enter a string to sort letters:");
    if (str !== null && str.trim() !== "") {
        const sorted = alphabeticalOrder(str);
        document.getElementById("output").innerHTML = `<p>Sorted letters: ${sorted}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid string.</p>`;
    }
}

// Event listener for sort button
document.getElementById("sortButton").addEventListener("click", handleAlphabeticalOrder);

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to handle capitalization input
function handleCapitalizeWords() {
    console.log("Capitalize words function called"); // Debugging log
    const str = prompt("Enter a string to capitalize the first letter of each word:");
    if (str !== null && str.trim() !== "") {
        const capitalized = capitalizeWords(str);
        document.getElementById("output").innerHTML = `<p>Capitalized: ${capitalized}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid string.</p>`;
    }
}

// Event listener for capitalize button
document.getElementById("capitalizeButton").addEventListener("click", handleCapitalizeWords);
