function flip(array, n) {
    var spatula = (n > array.length) ? array.length : n;
    for(var i = Math.floor(spatula/2); i < spatula; i++) {
        [array[i], array[spatula-i-1]] = [array[spatula-i-1], array[i]]
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