let test = "ywhs";
testA = test.split("");
permutations = [];
generatePermutations(testA, testA.length);

function generatePermutations(array, arrayLength) {
        if (arrayLength === 1) {
        console.log(array); // THIS OUTPUTS DIFFERENT PERMUTATIONS
        permutations.push(array);
        console.log(permutations); // VALUES IN ARRAY ARE ALL THE SAME

        /* 
          permutations.push(array.join(""));
          console.log(permutations);
          SPLITTING THE STRING MAKES IT WORK FINE?!
        */ 
        return;
    }

    for (let i = 0; i < arrayLength; i += 1) {
        generatePermutations(array, arrayLength - 1);

        if (arrayLength % 2 == 0) {
            swapArrayElements(array, i, arrayLength - 1);
        } else {
            swapArrayElements(array, 0, arrayLength - 1);
        }
    }
}

function swapArrayElements(array, elementA, elementB) {
    let temp = array[elementA];
    array[elementA] = array[elementB];
    array[elementB] = temp;
}