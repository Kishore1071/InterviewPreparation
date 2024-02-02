let given_word = "Javascript"

word = given_word.toLocaleLowerCase()

reversed_word = ""

for (let letter of word) {

    reversed_word = letter + reversed_word

}

if (word === reversed_word) {
    console.log(`The word ${given_word} is a palindrome`);
} else {
    console.log(`The word ${given_word} is not a palindrome`);
}
