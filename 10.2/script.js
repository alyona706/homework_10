const arrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showEvenNumbers(arrey) {
    let result = [];

    for(let i = 0; i < arrey.length; i++) {
        if(arrey[i] % 2 === 0) {
            result.push(arrey[i]);
        }
    }

    return console.log(result);
}

showEvenNumbers(arrey);