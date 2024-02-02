let number1 = 0
let number2 = 1

let count = 0

while (count < 20) {
    
    if (count === 0) {
        console.log(number1)
        console.log(number2);

        count++

    } else {

        value = number1 + number2

        console.log(value)

        number1 = number2
        number2 = value 

        count++
    }
}