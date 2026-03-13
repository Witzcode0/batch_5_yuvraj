# * * * * *
# * * * * *
# * * * * *
# * * * * *
# * * * * *

num = 5

for row in range(1, num+1):
    for col in range(1, num+1):
        print("*", end=" ")
    print()


# * 
# * * 
# * * * 
# * * * * 
# * * * * *

num = 5

for row in range(1, num+1):
    for col in range(1, row+1):
        print("*", end=" ")
    print()





#         * 
#       * * 
#     * * * 
#   * * * * 
# * * * * *

num = 5

for row in range(1, num+1):
    for col in range(num-row, 0, -1):
        print(" ", end=" ")
    for col in range(1, row+1):
        print("*", end=" ")
    print()


#         *
#       * * *
#     * * * * *
#   * * * * * * *
# * * * * * * * * *

num = 5

for row in range(1, num+1):
    for col in range(num-row, 0, -1):
        print(" ", end=" ")
    for col in range(1, row+1):
        print("*", end=" ")
    for col in range(1, row):
        print("*", end=" ")
    print()