// fortune
const fortunes = [
    { numChildren: 2, partnerName: "Alexa", geoLocation: "Denver", jobTitle: "Engineer" },
    { numChildren: 3, partnerName: "Jane", geoLocation: "Boulder", jobTitle: "Designer" },
    { numChildren: 1, partnerName: "Bree", geoLocation: "Golden", jobTitle: "Doctor" }
];

// fortune
function tellRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const { numChildren, partnerName, geoLocation, jobTitle } = fortunes[randomIndex];
    const fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById("output").innerHTML = `<p>${fortune}</p>`;
}

// fortune
document.getElementById("fortuneButton").addEventListener("click", tellRandomFortune);

// age
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}

// age
function handleDogAgeInput() {
    const age = prompt("What is your puppy's age in human years?");
    if (age !== null && age.trim() !== "") {
        const dogAgeMessage = calculateDogAge(Number(age));
        document.getElementById("output").innerHTML = `<p>${dogAgeMessage}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid age.</p>`;
    }
}

// age
document.getElementById("dogAgeButton").addEventListener("click", handleDogAgeInput);


function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}

// reverse
function handleReverseNumber() {
    console.log("Reverse function called"); 
    const num = prompt("Enter a number to reverse:");
    if (num !== null && num.trim() !== "") {
        const reversed = reverseNumber(num);
        document.getElementById("output").innerHTML = `<p>Reversed number: ${reversed}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid number.</p>`;
    }
}

// reverse
document.getElementById("reverseButton").addEventListener("click", handleReverseNumber);


function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// alphabet
function handleAlphabeticalOrder() {
    console.log("Sort letters function called"); 
    const str = prompt("Enter a string to sort letters:");
    if (str !== null && str.trim() !== "") {
        const sorted = alphabeticalOrder(str);
        document.getElementById("output").innerHTML = `<p>Sorted letters: ${sorted}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid string.</p>`;
    }
}


document.getElementById("sortButton").addEventListener("click", handleAlphabeticalOrder);

// capitalize the first letter
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// capitalization
function handleCapitalizeWords() {
    console.log("Capitalize words function called"); 
    const str = prompt("Enter a string to capitalize the first letter of each word:");
    if (str !== null && str.trim() !== "") {
        const capitalized = capitalizeWords(str);
        document.getElementById("output").innerHTML = `<p>Capitalized: ${capitalized}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Please enter a valid string.</p>`;
    }
}


document.getElementById("capitalizeButton").addEventListener("click", handleCapitalizeWords);
