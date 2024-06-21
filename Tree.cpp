#include <iostream>

template <class T>
struct Node {
    T data;
    Node<T>* left;
    Node<T>* right;
};

template <class T>
class Tree {
    public:
        Tree();
        Tree(const Tree<T>&);
        Tree<T>& operator=(const Tree<T>&);
        ~Tree();
        bool empty() const;
        T rootTree() const;
        Tree<T> leftTree() const;
        Tree<T> rightTree() const;
        void Create();
        void create3(const T&, const Tree<T>&, const Tree<T>&);
        void printPreOrder() const;
        void printInOrder() const;
        void printPostOrder() const;
        
    private:
        Node<T>* root;
        void DeleteTree(Node<T>* &) const;
        void CopyTree(Node<T>* & ,const Tree<T>&);
        void preOrd(const Node<T>*) const;
        void inOrd(const Node<T>*) const;
        void postOrd(const Node<T>*) const;
        void CreateTree(Node<T>* &) const;
};

template <class T>
Tree<T>::Tree() : root(nullptr) {}

template <class T>
Tree<T>::Tree(const Tree<T>& other) {
    CopyTree(other);
}

template <class T>
Tree<T>& Tree<T>::operator=(const Tree<T>& other) {
    if (this != &other) {
        DeleteTree(root);
        CopyTree(other);
    }
    return *this;
}

template <class T>
Tree<T>::~Tree() {
    DeleteTree(root);
}

template <class T>
bool Tree<T>::empty() const {
    return root == nullptr;
}

template <class T>
T Tree<T>::rootTree() const {
    return root->data;
}

template <class T>
Tree<T> Tree<T>::leftTree() const {
    return root->left;
}

template <class T>
Tree<T> Tree<T>::rightTree() const {
    return root->right;
}

template <class T>
void Tree<T>::Create() {
    DeleteTree(root);
    CreateTree(root);
}

template <class T>
void Tree<T>::create3(const T& x, const Tree<T>& l, const Tree<T>& r) {
    root = new Node<T>;
    root->data = x;
    root->left = l.root;
    root->right = r.root;
}

template <class T>
void Tree<T>::printPreOrder() const {
    preOrd(root);
}

template <class T>
void Tree<T>::printInOrder() const {
    inOrd(root);
}

template <class T>
void Tree<T>::printPostOrder() const {
    postOrd(root);
}

template <class T>
void Tree<T>::DeleteTree(Node<T>* &p) const {
    if (p) {
        DeleteTree(p->left);
        DeleteTree(p->right);
        delete p;
        p = nullptr;
    }
}

template <class T>
void Tree<T>::CopyTree(Node<T>* & current,const Tree<T>& other) {
    if (other) {
        current = new Node<T>;
        current->data = other.root->data;
        if(other.root->left) {
            CopyTree(current->left,other.root->left);
        } else {
            current->left = nullptr;
        }
        if(other.root->right) {
            CopyTree(current->right,other.root->right);
        } else {
            current->right = nullptr;
        }
    }
}

template <class T>
void Tree<T>::preOrd(const Node<T>* p) const {
    if (p) {
        std::cout << p->data << ' ';
        preOrd(p->left);
        preOrd(p->right);
    }
}

template <class T>
void Tree<T>::inOrd(const Node<T>* p) const {
    if (p) {
        inOrd(p->left);
        std::cout << p->data << ' ';
        inOrd(p->right);
    }
}

template <class T>
void Tree<T>::postOrd(const Node<T>* p) const {
    if (p) {
        postOrd(p->left);
        postOrd(p->right);
        std::cout << p->data << ' ';
    }
}

template <class T>
void Tree<T>::CreateTree(Node<T>* &p) const {
    T x;
    char c;
    std::cout << "root: ";
    std::cin >> x;
    p = new Node<T>;
    p->data = x;
    p->left = nullptr;
    p->right = nullptr;
    std::cout << "left tree of: " << x << " y/n? ";
    std::cin >> c;
    if (c == 'y') {
        CreateTree(p->left);
    }
    std::cout << "right tree of: " << x << " y/n? ";
    std::cin >> c;
    if (c == 'y') {
        CreateTree(p->right);
    }
}

int main() {
    Tree<int> t;
    t.Create();
    std::cout << "PreOrder: ";
    t.printPreOrder();
    std::cout << "\nInOrder: ";
    t.printInOrder();
    std::cout << "\nPostOrder: ";
    t.printPostOrder();
    std::cout << '\n';
    return 0;
}

