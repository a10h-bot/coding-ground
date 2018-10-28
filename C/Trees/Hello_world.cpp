#include <iostream>
using namespace std;

int main ()
{
  int firstvalue, secondvalue;
  int * mypointer;

  mypointer = &firstvalue;
  *mypointer = 10;
  cout << mypointer <<'\n';
  mypointer = &secondvalue;
  *mypointer = 20;

  cout << "firstvalue is " << firstvalue << '\n';
  cout << "secondvalue is " << secondvalue << '\n';
  cout << mypointer ;
  return 0;
}
