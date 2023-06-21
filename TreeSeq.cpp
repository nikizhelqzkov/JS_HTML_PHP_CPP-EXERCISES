#include <iostream>
#include <vector>
#include <algorithm>

struct TreeSeq
{
    int level;
    int value;
    std::vector<TreeSeq *> children;
};

void printTree(TreeSeq *root)
{
    if (root == nullptr)
    {
        return;
    }

    else
    {
        std::cout << "(" << root->level << "," << root->value << ") ";
    }
    for (auto child : root->children)
    {
        printTree(child);
    }
}


bool checkCorrectTreeHelper(TreeSeq *root)
{
    if (root == nullptr)
    {
        return true;
    }

    for (auto child : root->children)
    {
        if (child->level != root->level + 1)
        {
            return false;
        }
        return checkCorrectTreeHelper(child);
    }
    return true;
}


TreeSeq *checkCorrectTree(TreeSeq *root)
{
    if (root == nullptr)
    {
        return nullptr;
    }

    bool isCorrect = true;
    for (auto child : root->children)
    {
        if (child->level != root->level + 1)
        {
            return nullptr;
        }
        else
        {
            isCorrect &= (true && checkCorrectTreeHelper(child));
            // return true && !checkCorrectTreeHelper(child, root) ? nullptr : root;
        }
    }
    return isCorrect ? root : nullptr;
}


int main()
{

    TreeSeq *root = new TreeSeq{
        0, 5, {new TreeSeq{1, 4, {}}, new TreeSeq{1, 5, {new TreeSeq{2, 3, {}}}}, new TreeSeq{1, 6, {new TreeSeq{2, 2, {new TreeSeq{3, 3, {}}}}, new TreeSeq{2, 5, {}}}}}
     
    }; 
    TreeSeq *root2 = new TreeSeq{
        0, 5, {new TreeSeq{1, 4, {}}, new TreeSeq{3, 5, {new TreeSeq{2, 3, {}}}}, new TreeSeq{1, 6, {new TreeSeq{2, 2, {new TreeSeq{3, 3, {}}}}, new TreeSeq{2, 5, {}}}}}
     
    }; 
     TreeSeq *rootCorrect = checkCorrectTree(root2);
     if(rootCorrect == nullptr)
     {
         std::cout << "Not a correct tree" << std::endl;
     }
     else
     {
         std::cout << "Correct tree" << std::endl;
         printTree(rootCorrect);
     }
}