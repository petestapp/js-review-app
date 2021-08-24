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

// addCoaster function
function addCoaster(){
// create object
    let tempCoaster = {};
// get user inputs
    tempCoaster.height = prompt(`What is the height classification?`)
    tempCoaster.inversions = confirm(`Does it have inversions?`)
    tempCoaster.name = prompt(`What is the name?`)
    tempCoaster.manufacturer = prompt(`Who is manufacturer?`)
// .push object to coasters
coasters.push(tempCoaster);
} // end function

console.log(`coasters:`, coasters)