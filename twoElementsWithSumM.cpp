#include <iostream>
#include <algorithm>


bool hastwoDifferentElementsWithSumM(int* arr, int n, int m){
    // std::sort(arr, arr+n, std::greater<int>());
    std::sort(arr, arr+n, std::less<int>());
    int i = 0;
    int j = n-1;
    while (i < j)
    {
        if (arr[i] + arr[j] == m)
        {
            std::cout<<"Elements "<<arr[i]<<" and "<<arr[j]<<" have sum equal to "<<m<<std::endl;
            return true;
        }
        else if (arr[i] + arr[j] < m)
        {
            i++;
        }
        else
        {
            j--;
        }
    }
    return true;
}

int main(){

    int n = 10;
    int* arr = new int[n]{1, 22, 38, -540, -50, 6, -7, 85, 299, -120};
    std::cout<<hastwoDifferentElementsWithSumM(arr, n, -44);

    return 0;

}