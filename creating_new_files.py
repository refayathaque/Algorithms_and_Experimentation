from subprocess import call, Popen
import os

def make_new_file(name):
    if os.path.exists(name + '.py'):
        print name + '.py' + ' already exists!'
    else:
        call('touch ' + name + '.py', shell = True)
        print name + '.py' + ' file created!'

def make_new_file_2(name):
    if os.path.exists(name + '.py'):
        print name + '.py' + ' already exists!'
    else:
        command = 'touch {}.py'.format(name)
        call('touch ' + command, shell = True)
        print name + '.py' + ' file created!'

make_new_file_2('Hello_World_2')

make_new_file('Hello_World')
