const jumpStop = [];
const chatten = [];
const polar = [];

const createCountryArtist = (genre = "Country", name, age) => {
    const countryArtist = {
        name: name,
        age: age,
        genre: genre,
    }
    chatten.push(countryArtist);
    return chatten;
}

const createPopArtist = (genre = "Pop", name, age) => {
    const popArtist = {
        name: name,
        age: age,
        genre: genre,
    }
    polar.push(popArtist);
    return polar;
}

const createFunkArtist = (genre = "Funk", name, age) => {
    const funkArtist = {
        name: name,
        age: age,
        genre: genre,
    }
    jumpStop.push(funkArtist);
    return jumpStop;
}

const createRapArtist = (genre = "Rap", name, age) => {
    const rapArtist = {
        name: name,
        age: age,
        genre: genre,
    }
    jumpStop.push(rapArtist);
    return polar;
}

const createBluegrassArtist = (genre = "Bluegrass", name, age) => {
    const bluegrassArtist = {
        name: name,
        age: age,
        genre: genre,
    }
    chatten.push(bluegrassArtist);
    return chatten;
}

createCountryArtist(undefined, "Bruce Atkins", 23);
createPopArtist(undefined, "Jensen Brown", 20);
createFunkArtist(undefined, "Dre Funkz", 25);
createRapArtist(undefined, "Dusta Grimes", 21);
createBluegrassArtist(undefined, "Bartholomew Danielson", 23);
createCountryArtist(undefined, "Avilee Dallas", 19);
createPopArtist(undefined, "Austin Kinkaid", 22);
createRapArtist(undefined, "Leyoncé Branis", 27);


console.table(jumpStop);
console.table(chatten);
console.table(polar);
