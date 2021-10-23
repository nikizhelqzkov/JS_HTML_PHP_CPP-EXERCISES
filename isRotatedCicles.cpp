#include <iostream>
#include <string.h>

bool isEqualRotated(char *arr1, char *arr2)
{
    int arr2Len = strlen(arr2);
    int arr1Len = strlen(arr1);
    int startRepIndex = -1;

    for (int i = 0; i < arr2Len; i++)
    {
        if (arr1[0] == arr2[i])
        {
            startRepIndex = i + 1;
            break;
        }
    }
    if (startRepIndex == -1)
    {
        return false;
    }
    for (int i = 1; i < arr1Len; i++)
    {
        if (startRepIndex == arr2Len)
        {
            startRepIndex = 0;
        }

        if (arr1[i] != arr2[startRepIndex])
        {
            return false;
        }
        ++startRepIndex;
    }

    return true;
}

int main()
{
    char *arr1 = "abcde";
    char *arr2 = "cdeab";
    std::cout << isEqualRotated(arr1, arr2) << std::endl;

    return 0;
}