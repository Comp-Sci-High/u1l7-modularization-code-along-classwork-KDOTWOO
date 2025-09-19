// 1. Code Along

// Let's first identify what parts of the code is repetitive

// Superhero 1
// let hero1 = "Spider-Man";
// let power1 = "web-slinging";
// let city1 = "New York City";
// console.log(hero1 + " uses " + power1 + " to protect " + city1 + ".");

// // Superhero 2
// let hero2 = "Magneto";
// let power2 = "magnetic field manipulation";
// let city2 = "Genosha";
// console.log(hero2 + " uses " + power2 + " to protect " + city2 + ".");

// // Superhero 3
// let hero3 = "Wonder Woman";
// let power3 = "super strength";
// let city3 = "Themyscira";
// console.log(hero3 + " uses " + power3 + " to protect " + city3 + ".");

// Now let's work together to make this code more modular. 
// We'll start by defining a function that can handle the repetitive parts of the superhero description.

// Step 1: Define a function with an appropriate name.
function superheroes(hero,power,city){
console.log(hero+" uses "+ power +" to protect "+ city+".");
};

// Step 2: Idenitfy the inputs and add them as parameters. 
// Setp 3: Add the function logic to return the full statement. 



// Step 4: Call the function below for Spider-Man, Magneto, & Wonder Woman

superheroes("Wonder Woman","super strength","Themyscira");
superheroes("Magneto","magnetic field manipulation","Genosha");
superheroes("Spider-Man","web-slinging","New York City");
// 2. Classwork

// Task 1: Add more superheroes!
// Create at least two more superheroes by calling your function for each one.
superheroes("Squirrel Girl","Squirrel Commanding","Broke Ville");
superheroes("Jeff the Shark","Water Manipulation","Atlantic Ocean");


// Task 2: 5 members of the Sinister Six have escaped, and each villain is causing chaos in a different part of the city.
// You are tasked to modularize this code! 

// Step 1: Read through the following code and identify which parts are repetitive 

// let villain1 = "Doctor Octopus";
// let location1 = "Times Square";
// let chaos1 = "destroying cars with his mechanical arms";
// console.log(villain1 + " has escaped from the Raft and is causing chaos in " + location1 + " by " + chaos1 + "!");

// let villain2 = "Electro";
// let location2 = "Central Park";
// let chaos2 = "overloading the city's power grid";
// console.log(villain2 + " has escaped from the Raft and is causing chaos in " + location2 + " by " + chaos2 + "!");

// let villain3 = "Vulture";
// let location3 = "Empire State Building";
// let chaos3 = "swooping down and grabbing people off the streets";
// console.log(villain3 + " has escaped from the Raft and is causing chaos in " + location3 + " by " + chaos3 + "!");

// let villain4 = "Sandman";
// let location4 = "Brooklyn Bridge";
// let chaos4 = "turning the bridge into sand";
// console.log(villain4 + " has escaped from the Raft and is causing chaos in " + location4 + " by " + chaos4 + "!");

// let villain5 = "Mysterio";
// let location5 = "Broadway";
// let chaos5 = "casting illusions to confuse and panic everyone";
// console.log(villain5 + " has escaped from the Raft and is causing chaos in " + location5 + " by " + chaos5 + "!");

// Step 2: Define a function with an appropriate name. 
function villains(villain,location,chaos){
console.log( villain +" has escaped from the Raft and is causing chaos in  "+ location +" by "+ chaos+".");
}; 
// Step 3: Idenitfy the inputs and add them as parameters.
 
// Setp 4: Add the function logic to return the full statement. 
villains("Mysterio","Broadway","casting illusions to confuse and panic everyone");
villains("Sandman","Brookyln Bridge","turning the bridge into sand");
villains("Vulture","Empire State Building","swooping down and grabbing people off the streets");
villains( "Electro","Central Park","overloading the city's power grid");
villains("Doctor Octopus","Times Square","destroying cars with his mechanical arms");
// Step 5: Call the function below for Doctor Octopus, Electro, Vulture, Sandman, Mysterio, & Kraven the Hunter

// Step 6: Kraven the Hunter has also escaped, he's releasing and hunting wild animals in the Bronx Zoo
// Call the function below for Kraven the Hunter
villains("Kraven The Hunter","Bronx Zoo","releasing and hunting wild animals")




// Task 3: You are tasked with collecting super hero stats and putting them in objects. 
// Modularize the code below so that when you call a function with inputs, it returns a super hero object. 


// Step 1: Read through the objects and identify the keys that repeat. 

// let blackPanther = {
//     secretIdentity: "T'Challa",
//     city: "Wakanda",
//     affiliation: "Avengers",
//     archNemesis: "Killmonger",
//     catchphrase: "Wakanda Forever",
// };

// let batman = {
//     secretIdentity: "Bruce Wayne",
//     city: "Gotham City",
//     affiliation: "Justice League",
//     archNemesis: "Joker",
//     catchphrase: "I am vengeance, I am the night, I am Batman",


// Step 2: Define a function with an appropriate name. 
function SupeStats(secretIdentity,city,affiliation,archNemesis,catchphrase){
console.log(secretIdentity + " who defends "+city+ " with the "+affiliation+" to face against " + archNemesis+" and says " +catchphrase);
};
SupeStats("Bruce Wayne","Gotham City","Justice League","Joker","I am vengeance, I am the night, I am Batman");
SupeStats("T'Challa","Wakanda","Avengers","Killmonger","Wakanda Forever");
// Step 3: Idenitfy the inputs and add them as parameters.
 
// Setp 4: Add the function's logic to return the a super hero object. 

// Step 5: Call the function below for Black Panther and Batman

// Step 6: Call the function for Iron Man
// Otherwise known as Tony Stark an Avenger stationed in NYC
// He's known to say "I am Iron Man", and his greatest beef is with The Mandarin
SupeStats("Tony Stark","NYC","Avenger","The Mandarin","I am Iron Man");