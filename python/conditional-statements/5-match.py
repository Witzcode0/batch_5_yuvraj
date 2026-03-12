# 1-mon, 2-tue,3-4-5-6-7
# day =60

import datetime

day = datetime.datetime.now().weekday()

print(day)

match day+1:
    case 1:
        print("Today is Mon")
    case 2:
        print("Today is Tue")
    case 3:
        print("Today is Wed")
    case 4:
        print("Today is Thu")
    case 5:
        print("Today is Fri")
    case 6:
        print("Today is Sat")
    case 7:
        print("Today is Sun")
    case _:
        print("Invalid day")