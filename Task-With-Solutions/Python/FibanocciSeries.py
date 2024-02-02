number1 = 0
number2 = 1

count = 0

while count < 20:

    if count == 0:

        print(number1)
        print(number2)

        count = count + 1

    else:

        value = number1 + number2

        print(value)

        number1 = number2
        number2 = value

        count = count + 1