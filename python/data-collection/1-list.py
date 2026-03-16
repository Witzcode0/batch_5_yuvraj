"""
List : Mutable, Ordered, Indexing, Slicing, duplicate values are allowed.

syntax:

list_name = []
list_name = list()

Example

list_name = [ele1,ele2,...,elen]
"""

nums = [1,2,3,4,5]

# print(type(nums))

# print(len(nums))

# Access elements of list

# access full list
# print(nums)

# Indexing(-/+)
# print(nums[2])
# print(nums[5])

# print(nums[-1])
# print(nums[-3])

nums = [1,2,3,4,5]
# print(nums[1:4])
# print(nums[:3])
# print(nums[3:])

# print(nums[-1:-4:-1])

# chars = ['a','a','b','c','c','d','e'] 
# print(chars)

# nums = [1,2,3,4,5]
# nums[0] = 111
# print(nums)

even = [0,2,4,6,8]
odd = [1,3,5,7,9]

# concat
# print(even + odd)

# replica
# print(even * 2)
# print(even * 3)

fruits = ['apple', 'banana', "mango", "guava"]
new_fruits = ["water-melon", "grapes"]
# fruits.append(new_fruits)
# fruits.extend(new_fruits)
# fruits.insert(1, new_fruits)
# print(fruits)

# fruits.clear()
# fruits.reverse()

# del fruits
# fruits.pop()
# fruits.remove("apple")

# print(fruits)