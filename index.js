function findMatching(drivers, name) {
    function compareNames(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    } 
    return drivers.filter(compareNames);
}

function fuzzyMatch(drivers, p){
   function firstLetterMatch(driver){
    return driver.startsWith(p);
   }
   return drivers.filter(firstLetterMatch)
}

function matchName(drivers, p){
    function nameMatching(driver){
        return driver.name === p;
    }
    return drivers.filter(nameMatching);
}