number = 47
n = 2

test = True

while n < number:

    value = number % n

    if value == 0:

        test = False

    n = n + 1

if test == True:

    print("Prime")

else:
    
    print("Not Prime")

