#include <iostream>

void maxSumBetweenTwoIndexInArray(int *arr, int n)
{
    int currentSum = 0;
    int maxSum = 0;
    int i = 0;
    int j = 0;
    for (size_t k = 0; k < n; k++)
    {
        currentSum += arr[k];
        if (currentSum > maxSum)
        {
            j = k;
            maxSum = currentSum;
        }
        if (currentSum < 0)
        {
            currentSum = 0;
            i = k + 1;
            j = k + 1;
        }
    }
    std::cout<<"Max sum in array is between index "<<i<<" and "<<j<< " and is equal to "<<maxSum<<std::endl;
}


int main()
{
    int n = 10;
    int* arr = new int[n]{1, 22, 38, -540, -50, 6, -7, 85, 299, -120};
    maxSumBetweenTwoIndexInArray(arr, n);
    delete[] arr;
    return 0;
}