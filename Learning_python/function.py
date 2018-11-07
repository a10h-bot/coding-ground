def fact(num):
    if(num == 1):
        return 1
    else :
        return num* fact(num-1)

print(fact(5))

# disctionaies

person = { "Name" :"David",
     "Address" : "Bob",
     "Address " : "Dolly"

}
print(person["Name"])
print(person.get("Address"))

i =1
while(i<=5):
    print(i)
    i += 1
print("Done with loop")


def max_num(num1,num2,num3):
    if(num1 > num2 and num1 >num3):
        return num1
    elif(num1< num2 and num1<num3):
        return num2
    else :
        return num1
print(max_num(3,10,6))


def fact(num):
    if(num == 1):
        return 1
    else :
     return num* fact(num-1)

print(fact(5))

def fib(n):
    if(n==0 or n==1):
        return n
    else :
        return fib(n-1)+fib(n-2)
        
print(fib(18))

a = 5
for i in "Hello World" :
   print(i)

for x in range(5,7):
    print (x)

def cal_cube(base,rais):
    result = 1
    for i in range(rais):
        result *=base
    return result
print(cal_cube(5,3))

number_grid =[[1,2,3],
[3,4,6],
[8,9,17],
[0]]

for x in number_grid :
    for y in x:
        print(y)

def translator(str):
    res =""
    for i in str:
        if i=="o":
            res +="g"
        else :
            res+=res+i
    return str

print(translator("dog"))
phrase ="Hello"    
for i in  range(len(phrase)):
    print(i)

try :
    number =int(input("Enter a number : "))
    print(number)

except:
    print("Invalid number")