//  Generate a list of twenty "four-digit" values and each values of the list must be unique

let number_array = []

while (number_array.length < 20) {

    random_number = String(Math.floor(Math.random() * 10000))
    console.log(random_number);

    if (random_number.length === 4) {

        let match_found = false
        
        for (let a of number_array) {

            if (String(a) === random_number) {

                match_found = true
            }
        }

        if (match_found === false) {

            number_array.push(Number(random_number))
        }
    }
}

console.log(number_array);