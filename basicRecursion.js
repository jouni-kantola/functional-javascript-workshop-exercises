//arr = array of words
//fn = function
//init = initial value

function reduce(arr, fn, init) {
    // My solution - no recursion
    // var val;
    // for (var i = 0; i < arr.length; i++) {
    //     val = fn(arr[i]);
    //     init[val] = ++init[val] || 1;
    // }
    // return init;

    // Official solution
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value; // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
    })(0, init); // IIFE. kick off recursion with initial values
}

module.exports = reduce;
