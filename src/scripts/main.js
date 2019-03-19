const createDoctor = function(name, specialty, address){
    return {
        "name": name,
        "specialty": specialty,
        "address": address
    }
}

const createPet = function(petName, petBreed){
    return {
    name: petName,
    breed: petBreed
    }
}

console.log(createDoctor("Dr. Procter", "Proctologist", "555 Street"));

console.log(createPet("Sparky", "Corgi"));

//factory function for creating artist object.
const createArtist = function(name, age, genre) {
    return {
        "name": name,
        "age": age,
        "genre": genre
    }
}

const JumpStop_Records = [];
const Chatten_Records = [];
const Polar_Records = [];
//function that calls the factory function, creating a new object, then sorts it into the appopriate array.
const createAndSortArtist = (name, age, genre) => {
    const artist = createArtist(name, age, genre);
    if (genre === "rap" || genre === "funk") {
        JumpStop_Records.push(artist);
    }else if (genre === "country" || genre === "bluegrass"){
        Chatten_Records.push(artist);
    }else if (genre === "pop"){
        Polar_Records.push(artist);
    }
}

//Function calls. Looks like garbage, but in a real life situation this would be handled by some kind of user input or array-looping function and databases, ect.
createAndSortArtist("Bruce Atkins", 23, "country");
createAndSortArtist("Jensen Brown", 20, "pop");
createAndSortArtist("Dre Funkz", 25, "funk");
createAndSortArtist("Dusta Grimes", 21, "rap");
createAndSortArtist("Bartholomew Danielson", 23, "bluegrass");
createAndSortArtist("Avilee Dallas", 19, "country");
createAndSortArtist("Austin Kinkaid", 22, "pop");
createAndSortArtist("Loyoncé Branis", 27, "rap");

console.table(JumpStop_Records);
console.table(Chatten_Records);
console.table(Polar_Records);