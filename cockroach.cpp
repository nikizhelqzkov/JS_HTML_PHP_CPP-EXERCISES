#include <iostream>
#include <cmath>

int kmHToCmS(double number){
    int newNumber = floor((number/3600)*100000);
    return newNumber;
}

int main(){
    std::cout<<kmHToCmS(1);
}