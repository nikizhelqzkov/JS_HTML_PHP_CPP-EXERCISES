#include <iostream>

bool is_subordinate(const char *employee, const char *manager,const char* leaders[][2], size_t n)
{
    for (size_t i = 0; i < n; i++)
    {
        if (leaders[i][0] == employee)
        {
            if (leaders[i][1] == manager)
            {
                return true;
            }
            else
            {
                return is_subordinate(leaders[i][1], manager, leaders, n);
            }
        }
    }
    return false;
}
// the_big_boss is the boss of all bosses. 
// He does not have a boss.
//using is_subordinate, find the big boss.
const char* the_big_boss(const char* leaders[][2], size_t n)
{
    for (size_t i = 0; i < n; i++)
    {
        if (!is_subordinate(leaders[i][1], leaders[i][0], leaders, n))
        {
            return leaders[i][1];
        }
    }
    return nullptr;
}


int main()
{

    const char* leaders[4][2] = {{"M", "Z"}, {"B", "M"}, {"H", "B"}, {"K", "H"}};

    std::cout<<is_subordinate("K", "Z", leaders, 4);
    std::cout<<the_big_boss(leaders, 4);
    return 0;
}