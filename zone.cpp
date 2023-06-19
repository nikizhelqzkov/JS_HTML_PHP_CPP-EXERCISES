#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>
std::vector<std::vector<int>> initMatrix(std::vector<std::vector<int>> matrix)
{
    std::vector<std::vector<int>> result = matrix;
    for (int i = 0; i < matrix.size(); i++)
    {
        for (int j = 0; j < matrix[i].size(); j++)
        {
            result[i][j] = 0;
        }
    }
    return result;
}
void getZone(std::vector<std::vector<int>> matrix, int i, int j, std::vector<std::vector<int>> visitedMatrix,
             std::vector<int> &result)
{
    if (i < 0 || i >= matrix.size() || j < 0 || j >= matrix[i].size() || visitedMatrix[i][j] == 1 || matrix[i][j] == 0)
    {
        return;
    }
    visitedMatrix[i][j] = 1;
    result.push_back(matrix[i][j]);
    getZone(matrix, i - 1, j, visitedMatrix, result);
    getZone(matrix, i - 1, j + 1, visitedMatrix, result);
    getZone(matrix, i, j + 1, visitedMatrix, result);
    getZone(matrix, i + 1, j + 1, visitedMatrix, result);
    getZone(matrix, i + 1, j, visitedMatrix, result);
    getZone(matrix, i + 1, j - 1, visitedMatrix, result);
    getZone(matrix, i, j - 1, visitedMatrix, result);
    getZone(matrix, i - 1, j - 1, visitedMatrix, result);
}

void averageZones(std::vector<std::vector<int>> matrix)
{

    std::vector<std::vector<int>> visitedMatrix = initMatrix(matrix);

    
    std::vector<std::vector<int>> resultZone;
    std::vector<std::tuple<int, int, double>> averages;
    for (int i = 0; i < matrix.size(); i++)
    {
        for (int j = 0; j < matrix[i].size(); j++)
        {

            std::vector<int> zone;
            if (visitedMatrix[i][j] == 0)
            {
                int sum = 0;
                int count = 0;
                getZone(matrix, i, j, visitedMatrix, zone);
                if (zone.size() > 0)
                {
                    for (int k = 0; k < zone.size(); k++)
                    {
                        sum += zone[k];
                        count++;
                    }
                    double average = (double)sum / (double)count;
                    averages.push_back(std::make_tuple(i, j, average));
                }
            }
        }
    }

    // sort averages on third element with std::sort()
    std::sort(averages.begin(), averages.end(), [](const std::tuple<int, int, double> &a, const std::tuple<int, int, double> &b)
              { return std::get<2>(a) > std::get<2>(b); });

    for (int i = 0; i < averages.size(); i++)
    {
        std::cout << "Zone (" << std::get<0>(averages[i]) << "," << std::get<1>(averages[i]) << ") : " << std::get<2>(averages[i]) << std::endl;
    }
}

int main()
{
    std::vector<std::vector<int>> matrix = {{170, 0, 0, 255, 221, 0},
                                            {68, 0, 17, 0, 0, 68},
                                            {221, 0, 238, 136, 0, 255},
                                            {0, 0, 85, 0, 136, 238},
                                            {238, 17, 0, 68, 0, 255},
                                            {85, 170, 0, 221, 17, 0}};
    averageZones(matrix);
    return 0;
}