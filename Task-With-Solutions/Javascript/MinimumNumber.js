let number_array = [23,134,42,43,2,56,7,34,2,34,5,67,6,56,67,456,87,798,862]

let minimum_number = number_array[0]

for (let number of number_array) {
    
    if(number < minimum_number) {
        minimum_number = number
    }
}

console.log(minimum_number);
