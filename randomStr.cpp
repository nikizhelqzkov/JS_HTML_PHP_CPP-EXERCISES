#include <iostream>
#include <string>
#include <cmath>
#include <ctime>
std::string WORD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-?></][|{}:";
std::string onlyLandN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
std::string randomString(size_t lenght, std::string str)
{
    std::string result = "";
    srand(time(0));
    for (size_t i = 0; i < lenght; i++)
    {
        result += str[floor((((double)rand() / RAND_MAX)) * str.size())];
    }
    return result;
}

int main()
{
    srand(time(0));
    std::cout << "Most of ascii symbols random string: " << randomString(rand()%(WORD.size()-1), WORD)
              << "\nOnly with letters and digits random string: " << randomString(rand()%(onlyLandN.size()-1), onlyLandN) << std::endl;
    return 0;
}