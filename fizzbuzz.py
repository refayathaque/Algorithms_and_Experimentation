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
        if i % 3 == 0 and i % 5 ==0:
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
