number_list = [23,134,42,43,2,56,7,34,2,34,5,67,6,56,67,456,87,798,862]

minimum_number = number_list[0]

for number in number_list:

    if number < minimum_number:

        minimum_number = number

print(minimum_number)