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

def bubbleSortDescRec(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    swapped = False
    for i in range (0, len(list) - 1):
        if list[i] < list[i + 1]:
            temp = 0
            temp = list[i]
            list[i] = list[i + 1]
            list[i + 1] = temp
            swapped = True
    if swapped == True:
        bubbleSortDescRec
    return list
print bubbleSortDescRec(q)
print '__________10/26/17__________'

def selectionSortDesc(list):
    if len(list) == 0:
        return 'List is empty'
    if len(list) == 1:
        return list
    for i in range (0, len(list) - 1):
        for y in range (i + 1, len(list) - 1):
            if list[y] > list[i]:
                temp = 0
                temp = list[y]
                list[y] = list[y + 1]
                list[y + 1] = temp
    return list
print selectionSortDesc(q)
print '__________10/26/17__________'

####################################

w = [11, 33, 77, 44, 66, 99, 22, 88]

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
print bubbleSortAsc(w)
print '__________10/31/17__________'

####################################
