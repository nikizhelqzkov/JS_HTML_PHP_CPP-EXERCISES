#include <iostream>
#include <string>
#include <vector>

std::string spinWords(const std::string &name)
{
    std::vector<std::string> arr;
    std::string word = "";
    int start = 0;
    int end = 0;
    for (int i = 0; i < name.size(); i++)
    {
        ++end;
        if (name[i] == ' ')
        {

            for (int j = start; j < end; j++)
            {
                word.push_back(name[j]);
            }
            arr.push_back(word);
            word = "";
            start = end;
        }
    }
    for (int j = start; j < end; j++)
    {
        word.push_back(name[j]);
    }
    arr.push_back(word);
    word = "";
    start = end;
    for (int i = 0; i < arr.size(); i++)
    {

        if (i != arr.size() - 1)
        {
            if (arr[i].size() >= 6)
            {
                std::string revEl = "";
                for (int j = arr[i].size() - 1; j >= 0; j--)
                {
                    if (arr[i][j] != ' ')
                        revEl.push_back(arr[i][j]);
                }
                arr[i] = revEl;
            }
        }
        else
        {
            if (arr[i].size() >= 5)
            {
                std::string revEl = "";
                for (int j = arr[i].size() - 1; j >= 0; j--)
                {
                    if (arr[i][j] != ' ')
                        revEl.push_back(arr[i][j]);
                }
                arr[i] = revEl;
            }
        }
    }
    for (int i = 0; i < arr.size(); i++)
    {

        word += arr[i];
        if (i == 0)
        {
            if (arr[i].size() == 5)
            {
                word += " ";
            }
        }
        if (i != arr.size() - 1 && arr[i].size() >= 6)
        {

            word += " ";
        }
    }
    return word;
}

int main()
{

    std::cout << spinWords("Pizza is the best vegetable");
    return 0;
}