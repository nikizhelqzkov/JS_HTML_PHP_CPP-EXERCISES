#include <iostream>

template<class T> class Queue;
template<class T> class Item {
    friend class Queue<T>;
    Item(const T& x) : info(x), link(nullptr) {}
    T info;
    Item<T>* link;
};

template<class T>
class Queue {
    public:
        Queue();
        Queue(const T&);
        Queue(const Queue<T>&);
        ~Queue();
        Queue<T>& operator=(const Queue<T>&);
        bool empty() const;
        void push(const T&);
        bool pop();
        T top() const;
    
    private:
        Item<T>* start;
        Item<T>* end;
        void copyQueue(const Queue<T>&);
        void delQueue();
};

template<class T>
Queue<T>::Queue() : start(nullptr), end(nullptr) {}

template<class T>
Queue<T>::Queue(const T& x) : start(new Item<T>(x)), end(start) {}

template<class T>
Queue<T>::Queue(const Queue<T>& other) {
    copyQueue(other);
}

template<class T>
Queue<T>::~Queue() {
    delQueue();
}

template<class T>
Queue<T>& Queue<T>::operator=(const Queue<T>& other) {
    if (this != &other) {
        delQueue();
        copyQueue(other);
    }
    return *this;
}

template<class T>
bool Queue<T>::empty() const {
    return start == nullptr;
}

template<class T>
void Queue<T>::push(const T& x){
    Item<T>* newItem = new Item<T>(x);
    if(empty()) {
        start = newItem;
        end = newItem;
    } else {
        end->link = newItem;
        end = newItem;
    }
}

template<class T>
bool Queue<T>::pop(){
    if(empty()){
        return false;
    }
    Item<T>* temp = start;
    start = start->link;
    delete temp;
    return true;
}

template<class T>
T Queue<T>::top() const{
    return start->info;
}

template<class T>
void Queue<T>::copyQueue(const Queue<T>& other){
    if(other.empty()){
        start = nullptr;
        end = nullptr;
        return;
    }
    Item<T>* temp = other.start;
    Item<T>* newItem = new Item<T>(temp->info);
    start = newItem;
    end = newItem;
    temp = temp->link;
    while(temp){
        newItem->link = new Item<T>(temp->info);
        temp = temp->link;
        newItem = newItem->link;
        end = newItem;
    }
}

template<class T>
void Queue<T>::delQueue(){
    while(!empty()){
        pop();
    }
}

int main() {
    Queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);
    std::cout << q.top() << std::endl;
    q.pop();
    std::cout << q.top() << std::endl;
    q.pop();
    std::cout << q.top() << std::endl;
    q.pop();
    std::cout << q.empty() << std::endl;
    return 0;
}