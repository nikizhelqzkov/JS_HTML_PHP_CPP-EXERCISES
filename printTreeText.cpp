#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <queue>

struct Node
{
    char text;
    Node *left, *right;
};

void printText(Node* root)
{
    if (root == nullptr)
    {
        return;
    }
    std::queue<std::pair<Node*,int>> q;
    int level = 0;
    q.push(std::make_pair(root,level));
    bool stop = false;
    while (!q.empty())
    {
        std::pair<Node*,int> current = q.front();
        q.pop();
        if(level != current.second)
        {
            std::cout<<"\n";
            level = current.second;
            if(stop)
            {
                return;
            }
        }
        if(!current.first || current.first->text == ' '|| current.first->text == '\n' || current.first->text == '\t')
        {
            stop = true;
            std::cout<<' ';
            q.push(std::make_pair(nullptr,level+1));
            q.push(std::make_pair(nullptr,level+1));
        }
        else{
            stop = false;
            std::cout<<current.first->text;
            q.push(std::make_pair(current.first->left,level+1));
            q.push(std::make_pair(current.first->right,level+1));
        }
        
    }
}

int main()
{
    Node* root = new Node{'I', 
                    new Node{'a',new Node{'g',new Node{'a', new Node{'n',new Node{'s'},nullptr},new Node{'g',nullptr,new Node{'!'}}}, new Node{'t',nullptr,new Node{'p',nullptr,nullptr}}},new Node{'o',nullptr,new Node{'s',new Node{'r',nullptr,nullptr}, new Node{'o',nullptr,nullptr}}}}, new Node{'m',new Node{'o', new Node{'o', new Node{'b',nullptr,nullptr}, new Node{'l',nullptr,nullptr}}, new Node{'l',new Node{'e',nullptr,nullptr}, new Node{'m',nullptr,nullptr}}},new Node{'d', new Node{'v',nullptr,nullptr}, new Node{'i',nullptr,nullptr}}}};
    printText(root);
    return 0;
}