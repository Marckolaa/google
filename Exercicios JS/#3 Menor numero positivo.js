let array = [4, 1, -5, 4, 5];
let min = Infinity;
for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] < min) {
        min = array[i];
    }
}
console.log(min); 