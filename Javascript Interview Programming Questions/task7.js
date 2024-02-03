// Write a JavaScript program to creat an array with the largest element in each value of two dimensional array

let two_d_array = [
    [34,45,7,354,67,54,57,9],
    [46,879,3,546,92,65,81,86],
    [67,69,223,94,702,39,27,61]
]

let array_of_max_values = []

for (let x of two_d_array) array_of_max_values.push(Math.max.apply(null, x))

console.log(array_of_max_values)