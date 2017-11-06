q = [1, 9, 6, 3, 8, 9, 7, 6, 2, 3, 4, 6]

def bubbleSortDesc(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    unsorted = True
    while unsorted == True:
        count = 0
        for i in range (0, len(list) - 1):
            if list[i] < list[i + 1]:
                temp = 0
                temp = list[i]
                list[i] = list[i + 1]
                list[i + 1] = temp
            else:
                count += 1
        if count == len(list) - 1:
            unsorted = False
    return list
print bubbleSortDesc(q)
print '__________10/26/17__________'

w = [1, 9, 6, 3, 8, 9, 7, 6, 2, 3, 4, 6]

def bubbleSortDescRec(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    swapped = False
    for i in range (0, len(list) - 1):
        if list[i] < list[i + 1]:
            temp = 0
            temp = list[i + 1]
            list[i + 1] = list[i]
            list[i] = temp
            swapped = True
    if swapped == True:
        bubbleSortDescRec(list)
    return list
print bubbleSortDescRec(w)
print '__________10/26/17__________'

r = [1, 9, 6, 3, 8, 9, 7, 6, 2, 3, 4, 6]

def selectionSortDesc(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    for i in range (0, len(list)):
        for y in range (i + 1, len(list)):
            if list[y] > list[i]:
                temp = list[y]
                list[y] = list[i]
                list[i] = temp
    return list
print selectionSortDesc(r)
print '__________10/26/17__________'

####################################

e = [11, 33, 77, 44, 66, 99, 22, 88]

def bubbleSortAsc(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    sorted_flag = False
    while (sorted_flag == False):
        sorted_count = 0
        for i in range (0, len(list) - 1):
            if list[i] > list[i + 1]:
                temp = list[i]
                list[i] = list[i + 1]
                list[i + 1] = temp
            else:
                sorted_count += 1
        if sorted_count == len(list) - 1:
            sorted_flag = True
    return list
print bubbleSortAsc(e)
print '__________10/31/17__________'

####################################

t = ['d', 'a', 'c', 'b']

def selectionSortAsc(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    for i in range (0, len(list)):
        for y in range (i + 1, len(list)):
            if list[y] < list[i]:
                temp = list[y]
                list[y] = list[i]
                list[i] = temp
    return list
print selectionSortAsc(t)
print '__________11/06/17__________'

####################################

# y = [55, 1, 23, -4, 88, 5]
#
# def bubbleSortAscRec:
