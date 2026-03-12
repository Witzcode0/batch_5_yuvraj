age = int(input("Enter Age: "))

# if age >= 18 and weight >= 50:
#     print("You can donate")
# else:
#     print("You can not donate")

if age >= 18:
    weight = float(input("Enter weight: "))
    if weight >= 50:
        print("You can donate")
    else:
        print("You can not donate")
else:
    print("You can not donate")
