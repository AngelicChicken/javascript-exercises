const age = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }

    return death - birth;
};

const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {
        const old = age(oldest.yearOfBirth, oldest.yearOfDeath);
        const current = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return current > old? oldest = currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
