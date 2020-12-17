var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Average 1: " + average(scores));
console.log("Average 2: " + average(scores2));

function average(arr) {
    var av = 0;
    for (i = 0; i < arr.length; i++) {
        av += arr[i];
        // console.log(av);
    }
    return Math.round(av / arr.length)
}