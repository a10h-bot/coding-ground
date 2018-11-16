#include <stdio.h>
//#include <conio.h>
int main()
{
    int n, x;
    int rev = 0;
    printf("Enter a number ! \n");
    scanf("%d", &n);
    while (n != 0)
    {
        x = n % 10;
        rev = rev * 10 + x;
        n = n / 10;
    }
    printf("The reversed number is %d ", rev);
    return 0;
}
