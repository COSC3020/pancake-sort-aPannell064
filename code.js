function flip(array, n) {
    //len = arrray.length();
    var spatula = [];
    for(var i = 1; i < n+1 && array.length; i++) {
        spatula.unshift(array.shift());
    }

    while(spatula .length) {
        array.unshift(spatula.pop());
    }

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var maxIndex;
    for (var i = array.length-1; i >= 0; i--) {
        maxIndex = i;
        for (var j = 0; j < i; j++) {
            if(array[j] > array[maxIndex]) {maxIndex = j;}
        }
        array = flip(array, maxIndex+1);
        array = flip(array, i+1);
    }
    return array;
}