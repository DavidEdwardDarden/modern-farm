const allPlntsGrwingInFld = [];

export const addPlant = (seedObj) => {
    console.log(seedObj + "look left")
    //debugger
    if (Array.isArray(seedObj) === true) {
        seedObj = JSON.parse(JSON.stringify(seedObj))
        allPlntsGrwingInFld.push(`${seedObj}`)
    }
    else allPlntsGrwingInFld.push(`${seedObj}`)
    console.log("Look at this: " + allPlntsGrwingInFld)
}

//export const usePlants = () => {
//    const allPlants = JSON.parse(JSON.stringify((allPlntsGrwingInFld)));
//   return allPlants;
//}

//Testing below   vvvvvvvvvvvvvvvvvvvvvvvvvv

export const usePlants = () => {

    const allPlants = JSON.parse(JSON.stringify((allPlntsGrwingInFld)));
    return allPlants;
}