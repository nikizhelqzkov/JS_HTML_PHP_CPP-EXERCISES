#include <iostream>

template <typename T>
int Partition(T* arr, int len)
{

	T pivot = arr[len / 2];
	int i = 0, j = len-1 ;

	while (true)
	{

		while (arr[j] > pivot)
			j--;

		while (arr[i] <= pivot)
			i++;

		if (i < j)
			std::swap(arr[i], arr[j]);
		else
			return j;
	}
}



template <typename T>
void QuickSort(T* arr, int len)
{
	if (len <= 1)
		return;


	int pivotIndex = Partition(arr, len);
	QuickSort(arr, pivotIndex);
	QuickSort(arr + pivotIndex + 1, len - pivotIndex-1);
}


const int SIZE = 17;
int main()
{
	int arr1[] = { 1, 23, 5, 2, 56, 23, 6, 5, 5, 56, 23, 56, 5, 5412, 52, 3, 5};
	QuickSort(arr1, SIZE);

	for (int i = 0; i < SIZE; i++)
		std::cout << arr1[i] << " ";
}

//     © 2021 GitHub, Inc.
//     Terms
//     Privacy
//     Security
//     Status
//     Docs

