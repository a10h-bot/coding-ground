def reverNum(n):
    rev = 0
    while(n != 0):
        x = n % 10
        rev = rev*10+x
        n /= 10
    return rev


print(reverNum(1234))
