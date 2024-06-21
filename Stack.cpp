#include <iostream>

template<class T> class Stack;
template<class T> class Item {
    friend class Stack<T>;
    Item(const T& x) : info(x), link(nullptr) {}
    T info;
    Item<T>* link;
};
template<class T>
class Stack {
    public:
        Stack();
        Stack(const T&);
        Stack(const Stack<T>&);
        ~Stack();
        Stack<T>& operator=(const Stack<T>&);
        bool empty() const;
        void push(const T&);
        bool pop();
        T top() const;
    
    private:
        Item<T>* start;
        void copyStack(const Stack<T>&);
        void delStack();
};

template<class T>
Stack<T>::Stack() : start(nullptr) {}

template<class T>
Stack<T>::Stack(const T& x) : start(new Item<T>(x)) {}

template<class T>
Stack<T>::Stack(const Stack<T>& other) {
    copyStack(other);
}

template<class T>
Stack<T>::~Stack() {
    delStack();
}

template<class T>
Stack<T>& Stack<T>::operator=(const Stack<T>& other) {
    if (this != &other) {
        delStack();
        copyStack(other);
    }
    return *this;
}

template<class T>
bool Stack<T>::empty() const {
    return start == nullptr;
}

template<class T>
void Stack<T>::push(const T& x){
    Item<T>* newItem = new Item<T>(x);
    newItem->link = start;
    start = newItem;
}

template<class T>
bool Stack<T>::pop(){
    if(empty()){
        std::cerr<<"Empty stack!\n";
        return false;
    }
    Item<T>* temp = start;
    start = start->link;
    delete temp;
    return true;
}

template<class T>
T Stack<T>::top() const{
    if(empty()){
        std::cerr<<"Empty stack!\n";
        return T();
    }
    return start->info;
}

template<class T>
void Stack<T>::copyStack(const Stack<T>& other){
    if(other.empty()){
        start = nullptr;
        return;
    }
    Item<T>* temp = other.start;
    Item<T>* newItem = new Item<T>(temp->info);
    start = newItem;
    temp = temp->link;
    while(temp){
        newItem->link = new Item<T>(temp->info);
        newItem = newItem->link;
        temp = temp->link;
    }
}

template<class T>
void Stack<T>::delStack(){
    while(!empty()){
        pop();
    }
}

int main(){
    Stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    std::cout<<s.top()<<"\n";
    s.pop();
    std::cout<<s.top()<<"\n";
    s.pop();
    std::cout<<s.top()<<"\n";
    s.pop();
    std::cout<<s.top()<<"\n";
    s.pop();
    return 0;
}