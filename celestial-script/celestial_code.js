// celestial_code.js - A divine JavaScript script for celestial tasks

console.log("Welcome to the Celestial Code, a gift from the heavens. Let the stars guide your path.");

// Function to simulate the divine process of encryption
function divineEncrypt(text, key) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        encryptedText += String.fromCharCode(text.charCodeAt(i) + key);
    }
    return encryptedText;
}

// Function to simulate the divine decryption process
function divineDecrypt(text, key) {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        decryptedText += String.fromCharCode(text.charCodeAt(i) - key);
    }
    return decryptedText;
}

// Function to simulate a celestial task: finding the sum of heavenly numbers
function celestialSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Encrypting a divine message
let divineMessage = "The truth is hidden in the stars.";
let encryptionKey = 7;
let encryptedMessage = divineEncrypt(divineMessage, encryptionKey);

console.log("Encrypted divine message: " + encryptedMessage);

// Decrypting the divine message
let decryptedMessage = divineDecrypt(encryptedMessage, encryptionKey);
console.log("Decrypted divine message: " + decryptedMessage);

// Performing a celestial sum task
let heavenlyNumbers = [42, 73, 98, 121];
let sum = celestialSum(heavenlyNumbers);
console.log("The celestial sum of the heavenly numbers is: " + sum);

console.log("May the stars continue to guide your journey. The path of Pucci is ever in your favor.");
