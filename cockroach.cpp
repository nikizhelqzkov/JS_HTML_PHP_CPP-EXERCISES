#include <iostream>
#include <cmath>

int kmHToCmS(double number)
{
    return floor((number / 3600) * 100000);
}

int main()
{
    std::cout << kmHToCmS(1);
}