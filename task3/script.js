// country flag
  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        console.log(`${country.flag} - ${country.name.common}`);
      });
    })
    .catch(error => {
      console.log("An error occurred while fetching the data:", error);
  });


// country name,region,subregion,population



   fetch("https://restcountries.com/v3.1/all")
   .then(response => response.json())
   .then(data => {
     data.forEach(country => {
       const name = country.name.common;
       const region = country.region || "N/A";
       const subRegion = country.subregion || "N/A";
       const population = country.population || "N/A";

       console.log("Country Name: " + name);
       console.log("Region: " + region);
       console.log("Sub-Region: " + subRegion);
      console.log("Population: " + population);

    });
  })
 .catch(error => console.error("Error fetching data: ", error));



//



// true 
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

function areEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let i = 0; i < keys1.length; i++) {
        const key1 = keys1[i];
        const key2 = keys2[i];
        if (key1 !== key2 || obj1[key1] !== obj2[key2]) {
            return false;
        }
    }
    return true;
}

console.log(areEqual(obj1, obj2));