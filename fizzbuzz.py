def fizzBuzz1():
    for i in range (1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzBuzz1()
print '__________10/23/17__________'

def fizzBuzz2():
    i = 1
    while i < 101:
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
        i += 1
fizzBuzz2()
print '__________10/23/17__________'

####################################

def fizzBuzz3():
    for i in range (100, 0, -1): # Third argument is for decrementing value, can also decrement by more than 1 IE '-2'
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzBuzz3()
print '__________10/26/17__________'

def fizzBuzz4():
    i = 100
    while i > 0:
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
        i -= 1
fizzBuzz4()
print '__________10/26/17__________'

####################################

def fizzBuzz5():
    for i in range (1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzBuzz5()
print '__________10/31/17__________'

####################################
