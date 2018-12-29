#include <stdio.h>

int a = 2;

void func_1()
{
  printf("%d:func_1()\n",a);
}
void func_2()
{
  printf("%d:func_2()\n",a);
}

int main(int argc, char** argv)
{
  first:func_1();
  second:func_2();
  if (a == 2) {
    printf("%d:if()\n",a);
    a = 3;
    goto second;
  } else if (a == 3) {
    a = 4;
    goto first;
  }
}
