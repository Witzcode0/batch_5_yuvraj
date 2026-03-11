# Arithmetic Operators (+, -, *, /, //, %, **): Perform mathematical calculations.
# Assignment Operators (=, +=, -=, *=, /=): Used to assign values to variables, often with shorthand operations.
# Comparison Operators (==, !=, >, <, >=, <=): Evaluate values to return boolean results.
# Logical Operators (and, or, not): Used to combine conditional statements.
# Identity Operators (is, is not): Check if variables refer to the same object.
# Membership Operators (in, not in): Test for sequence membership.
# Bitwise Operators (&, |, ^, ~, <<, >>): Manipulate individual bits of integers. 

# Arithmetic:
# num1 = 10
# num2 = 20

# print(num1 + num2) # 30
# print(num1 - num2) # -10
# print(num1 * num2) # 200
# print(num1 / num2) # 0.5 return always float value

# a = 10
# b = 5
# print(a/b)
# print(a//b)

# print(num1 % num2)

# print(2 ** 5)

# Assignment:

# num = 10
# num = num + 20
# num += 20

# num -= 20
# num *= 20
# num /= 20
# num //= 20
# num %= 20
# num **= 20
# print(num)

# Comparison: 

# num1 = 10
# num2 = 20

# print(num1 == num2) # False
# print(num1 != num2) # True
# print(num1 < num2) # True
# print(num1 <= num2) # True
# print(num1 > num2) # False
# print(num1 >= num2) # False

# Identity 

# num = 10
# check : value, location and type
# print(num is 10) 
# print(num is not 10)


# Membership

# name = 'brijesh' 
# print("b" in name)
# print("B" in name)
# print("je" in name)
# print("rje" in name)

# logical

# C1 C2 C3 and or
# T  T  T  T   T
# F  T  T  F   T
# T  F  T  F   T
# T  T  F  F   T
# F  F  F  F   F

# c not
# T F
# F T

# print(not(10 < 20) and (20 < 10))
# print((10 < 20) or not(20 < 10))

# 2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
# 128  64  32  16   8   4   2   1


# 3 = binary = 0011
# 5 = binary = 0101
#   a b & | ^
# # 0 0 0 0 0
# # 0 1 0 1 1
# # 1 0 0 1 1
# # 1 1 1 1 0

# 0001 = 1
# 0111 = 7
# 0110 = 6
# a = 3
# b = 5
# print(a&b)
# print(a|b)
# print(a^b)

# <<, >>

# x = 7
# 7 = 00000111

# print(x << 2)

# 000111
# 00011100

# x = 5
# print(~x)

# -(x + 1)

# x = 50
# print(~x)