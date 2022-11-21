const findTheOldest = function(array) {
        return array.reduce((oldest, currentPerson) => {
          const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
          const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
          return oldestAge < currentAge ? currentPerson : oldest;
        })
      };
      
      const getAge = function(birth, death) {
        if (!death) {
          death = new Date().getFullYear();
        }
        return death - birth;
      };

// let currentYear = new Date().getFullYear();

// const findTheOldest = function(people) {
//         people.yearOfDeath === undefined 
//         ? people.yearOfDeath = currentYear 
//         : people.yearOfDeath;

//         const peopleAgeSorted = people.sort((a, b) => 
//         (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1));
//         let oldestPerson = peopleAgeSorted[0];
//         return oldestPerson;
// }; 

// Do not edit below this line
module.exports = findTheOldest;
