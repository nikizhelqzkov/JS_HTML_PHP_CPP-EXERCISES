#include <iostream>

template <class T>
struct Item{
    T inf;
    Item<T>* next;
};

template <class T>
class LList{
    public:
        LList();
        ~LList();
        LList(const LList&);
        LList& operator=(const LList&);
        void iterStart(Item<T>* = nullptr);
        Item<T>* iter();
        bool IterView(T&);
        void InsertToEnd(const T&);
        void InsertToStart(const T&);
        void insertAfter(Item<T>*, const T&);
        void insertBefore(Item<T>*, const T&);
        bool deleteAfter(Item<T>*, T&);
        bool deleteBefore(Item<T>*, T&);
        void deleteElem(Item<T>*, T&);
        void print() const;
        int length() const;
        void concat(const LList&);
        void reverse();

    private:
        Item<T> *start, *end, *current;
        void copyList(const LList&);
        void deleteList();
};

template <class T>
LList<T>::LList() : start(nullptr), end(nullptr), current(nullptr) {}

template <class T>
LList<T>::~LList() {
    deleteList();
}

template <class T>
LList<T>::LList(const LList<T>& other) {
    copyList(other);
}

template <class T>
LList<T>& LList<T>::operator=(const LList<T>& other) {
    if (this != &other) {
        deleteList();
        copyList(other);
    }
    return *this;
}

template <class T>
void LList<T>::iterStart(Item<T>* p) {
    if (p) {
        current = p;
    }
    else {
        current = start;
    }
}

template <class T>
Item<T>* LList<T>::iter() {
    Item<T>* p = current;
    if (current) {
        current = current->next;
    }
    return p;
}

template <class T>
bool LList<T>::IterView(T& x){
    if(!current){
        return false;
    }
    x = current->inf;
    return true;
}

template <class T>
void LList<T>::InsertToEnd(const T& x) {
    Item<T>* p = end;
    end = new Item<T>;
    end->inf = x;
    end->next = nullptr;
    if (p) {
        p->next = end;
    }
    else {
        start = end;
    }
}

template <class T>
void LList<T>::InsertToStart(const T& x) {
    Item<T>* p = start;
    start = new Item<T>;
    start->inf = x;
    start->next = p;
    if (!end) {
        end = start;
    }
}

template <class T>
void LList<T>::insertAfter(Item<T>* p, const T& x) {
    Item<T>* q = new Item<T>;
    q->inf = x;
    q->next = p->next;
    if (p == end) {
        end = q;
    }
    p->next = q;
}

template <class T>
void LList<T>::insertBefore(Item<T>* p, const T& x) {
    Item<T>* q = new Item<T>;
    *q = *p;
    if (p == end) {
        end = q;
    }
    p->inf = x;
    p->next = q;
}

template <class T>
bool LList<T>::deleteAfter(Item<T>* p, T& x) {
    if (p->next) {
        Item<T>* q = p->next;
        x = q->inf;
        p->next = q->next;
        if (q == end) {
            end = p;
        }
        delete q;
        return true;
    }
    return false;
}

template <class T>
bool LList<T>::deleteBefore(Item<T>* p, T& x) {
    if (p != start) {
        Item<T>* q = start;
        while (q->next->next != p) {
            q = q->next;
        }
        deleteAfter(q, x);
        return true;
    }
    return false;
}

template <class T>
void LList<T>::deleteElem(Item<T>* p, T& x) {
    if (p == start) {
        x = p->inf;
        if (start == end) {
            start = end = nullptr;
        }
        else {
            start = start->next;
        }
        delete p;
    }
    else {
        Item<T>* q = start;
        while (q->next != p) {
            q = q->next;
        }
        deleteAfter(q, x);
    }
}

template <class T>
void LList<T>::print() const {
    Item<T>* p = start;
    while (p) {
        std::cout << p->inf << " ";
        p = p->next;
    }
    std::cout << std::endl;
}

template <class T>
int LList<T>::length() const {
    int n = 0;
    Item<T>* p = start;
    while (p) {
        n++;
        p = p->next;
    }
    return n;
}

template <class T>
//concat for O(n)
// void LList<T>::concat(const LList<T>& other) {
//     Item<T>* p = other.start;
//     while (p) {
//         InsertToEnd(p->inf);
//         p = p->next;
//     }
// }
//concat for O(1)
void LList<T>::concat(const LList<T>& other) {
    if (start) {
        if (other.start) {
            end->next = other.start;
            end = other.end;
        }
    }
    else {
        copyList(other);
    }
}

template <class T>
void LList<T>::reverse() {
    Item<T>* p = start, * q = nullptr, *temp;
    if(start==end){
        return;
    }
    start = end;
    end = p;
    while (p) {
        temp = p->next;
        p->next = q;
        q = p;
        p = temp;
    }
}

template <class T>
void LList<T>::copyList(const LList<T>& other) {
    start = end = nullptr;
    Item<T>* p = other.start;
    while (p) {
        InsertToEnd(p->inf);
        p = p->next;
    }
}

template <class T>
void LList<T>::deleteList() {
    Item<T>* p;
    while (start) {
        p = start;
        start = start->next;
        delete p;
    }
    end = nullptr;
}

int main() {
    LList<int> l;
    l.InsertToEnd(1);
    l.InsertToEnd(2);
    l.InsertToEnd(3);
    l.InsertToEnd(4);
    l.InsertToEnd(5);
    l.InsertToEnd(6);
    l.InsertToEnd(7);
    l.InsertToEnd(8);
    l.InsertToEnd(9);
    l.InsertToEnd(10);
    l.print();
    l.reverse();
    l.print();

    return 0;
}