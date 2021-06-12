from math import pi

radius = int(input('Enter radius: '))
area = pi * radius ** 2
circumference = 2 * pi * radius

print(f'\nArea: {round(area, 2)}\nCircumference: {round(circumference, 2)}')
