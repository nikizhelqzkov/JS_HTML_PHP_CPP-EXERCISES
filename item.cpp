#include <string>
// Представя предмет
class Item
{
    // Етикет на предмета

    std::string label;
    virtual int hash() = 0;
};
// Представя молив
class Pencil : protected Item
{
    
};
// Представя кутия
class Box : public Item
{
    // Сочи към това, което
    // се пази в кутията
    Item *contents;

public:
    // Съхранява something в кутията
    void store(Item *something)
    {
        contents = something;
    }
};

int main()
{
    
}