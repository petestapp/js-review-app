// set up list of coasters
let coasters = [];
// allow user to input as many coasters as they want
let continueInput = true;
while(continueInput){
    if(confirm(`Would you like to add an roller coaster to the list?`)){
        addCoaster();
    }
    else{
        continueInput = false;
    }
} // end while
search();

// addCoaster function
function addCoaster(){
// create object
    let tempCoaster = {};
// get user inputs
    tempCoaster.name = prompt(`What is the name?`);
    tempCoaster.height = prompt(`What is the height classification?`);
    tempCoaster.inversions = confirm(`Does it have inversions?`);
    // tempCoaster.manufacturer = prompt(`Who is manufacturer?`);
// .push object to coasters
coasters.push(tempCoaster);
} // end addCoaster
// console.log array
console.log(`coasters:`, coasters);

// search function
function search(){
let matches = [];
// allow user to start a search

// allow user to input height
let heightSearch = prompt(`What is the height category?`)
// allow user to input inversions
let inversionSearch = confirm(`Does it have inversions?`)
// loop through array and search for matches
for (let i = 0; i<coasters.length; i++){
    if (coasters[i].height === heightSearch || coasters[i].inversions === inversionSearch){
        matches.push(coasters[i]);
    }
}
// display matches
console.log(`matches:`, matches);
for (i=0; i<matches.length; i++){
    alert(`matches: ` + matches[i].name);
    }
} // end search