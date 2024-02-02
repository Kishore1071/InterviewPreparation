let number = 47
let n = 2
let test = true

while(n < number) {

    value = number % n

    if (value === 0)  {
        test = false
    }
    n = n + 1
    
}

if (test === true) {
    console.log("Prime")
}

else {
    console.log("Not Prime")
}
