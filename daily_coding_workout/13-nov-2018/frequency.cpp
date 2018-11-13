//#include <ipstream>
//using namespace std;
#include <stdio.h>

int frequency(int a[], int n, int x)
{
    int count = 0;
    for (int i = 0; i < n; i++)
        if (a[i] == x)
            count++;
    return count;
}

// Driver program
int main()
{
    int a[] = {0, 5, 5, 5, 4};
    int x = 5;
    int n = sizeof(a) / sizeof(a[0]);
    int res = frequency(a, n, x);
    printf("Frequency of the given no is :  % d ", res);

    return 0;
}

// output  : 3
