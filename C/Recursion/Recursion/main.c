//
//  main.c
//  Recursion
//
//  Created by Anand Prakash on 12/10/18.
//  Copyright © 2018 Anand Prakash. All rights reserved.
//
#include <stdio.h>
int fact(int);
int main(int argc, const char * argv[]) {
    int n;
    printf("Input an integer to calculate factorial value !🤓\n");
    scanf("%d\n",&n);
    int res =fact(n);

    printf("%d\n",res);
    
    return 0;
}

int fact(int x){
    if(x==1)
        return x;
    else
        return x*fact(x-1);
}
