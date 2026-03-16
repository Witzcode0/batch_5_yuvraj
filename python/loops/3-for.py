# syntax:

# for var in iterable_obj:
#     code of block

# finit loop

# name = "python"

# for ch in name:
#     print(ch)

# num = 15
# for num in range(1, num+1):
#     print(num)

# num = 15
# for num in range(1, num+1):
#     print(num)
# else:
#     print("loop execution is completed")


# * * * * *
# * * * * *
# * * * * *
# * * * * *
# * * * * *

# num = 5

# for row in range(1, num+1):
#     for col in range(1, num+1):
#         print("*", end=" ")
#     print()

# * 
# * * 
# * * * 
# * * * * 
# * * * * *

# num = 5

# for row in range(1, num+1):
#     for col in range(1, row+1):
#         print("*", end=" ")
#     print()


#         * 
#       * * 
#     * * * 
#   * * * * 
# * * * * *

num = 5

# for row in range(1, num+1):
#     for col in range(num-row, 0, -1):
#         print(" ", end=" ")
#     for col in range(1, row+1):
#         print("*", end=" ")
#     print()


#         * 
#       * * * 
#     * * * * * 
#   * * * * * * * 
# * * * * * * * * * 


# num = 5

# for row in range(1, num+1):
#     for col in range(num-row, 0, -1):
#         print(" ", end=" ")
#     for col in range(1, row+1):
#         print("*", end=" ")
#     for col in range(1, row):
#         print("*", end=" ")
#     print()


# * 
# * * 
# * * * 
# * * * * 
# * * * * *

# num = 5

# for row in range(1, num+1):
#     for col in range(1, row+1):
#         print(row, end=" ")
#     print()

# num = 5

# for row in range(1, num+1):
#     for col in range(1, row+1):
#         print(col, end=" ")
#     print()


# print(ord('A'))
# print(chr(65))

# num = 5

# for row in range(1, num+1):
#     for col in range(1, row+1):
#         print(chr(col + 64), end=" ")
#     print()


# num = 5
# g_var = 1
# for row in range(1, num+1):
#     for col in range(1, row+1):
#         print(chr(g_var + 64), end=" ")
#         g_var+=1
#     print()

# num = 5
# g_var = 1
# for row in range(1, num+1):
#     for col in range(1, row+1):
#         print(g_var, end=" ")
#         g_var+=1
#     print()