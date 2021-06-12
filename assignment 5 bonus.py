from math import pi

#calculates circumference and area
radius = int(input('Enter radius: '))
area = pi * radius ** 2
circumference = 2 * pi * radius

#outputs area and circumference rounded to 3 decimal points
print(f'\nArea: {round(area, 3)}\nCircumference: {round(circumference, 3)}')
