def reverseArray1(list):
    for i in range (0, len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
    return list
q = [1, 2, 3, 4, 5]
print reverseArray1(q)
print '__________10/23/17__________'

def reverseArray2(list):
    left = 0
    right = len(list) - 1
    while left < right:
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left += 1
        right -= 1
    return list
print reverseArray2(q)
print '__________10/23/17__________'

####################################

w = ['a', 'b', 'c', 'd']

def reverseArray3(list):
    for i in range (0, len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
    return list
print reverseArray3(w)
print '__________10/26/17__________'

def reverseArray4(list):
    left = 0
    right = len(list) - 1
    while left < right:
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left += 1
        right -= 1
    return list
print reverseArray4(w)
print '__________10/26/17__________'

####################################

e = ['tom', 'dick', 'harry']

def reverseArray5(list):
    for i in range (0, len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
    return list
print reverseArray5(e)
print '__________10/31/17__________'

def reverseArray6(list):
    left = 0
    right = len(list) - 1
    while left < right:
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left += 1
        right -= 1
    return list
print reverseArray6(e)
print '__________10/31/17__________'
