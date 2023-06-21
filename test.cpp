#include <iostream>

void f(int *arr1, const int *arr2)
{
    int *p1 = arr1;
    const int *p2 = arr2;
    while (*p2 >= 0)
    {
        *p1++ = *p2++;
    }

    // int *p1 = arr1;
    // const int *p2 = arr2;
    // while (*p2 >= 0)
    // {
    //     *p1++ = *p2++;
    // }
}

int main()
{
    int A[4] = {-1, -2, -3, -4};
    int B[4] = {10, 20, 30, -1};
    f(A, B);
    std::cout << A[0] << std::endl;
    std::cout << A[1] << std::endl;
    std::cout << A[2] << std::endl;
    std::cout << A[3] << std::endl;
    std::cout << B[0] << std::endl;
    std::cout << B[1] << std::endl;
    std::cout << B[2] << std::endl;
    std::cout << B[3] << std::endl;
}