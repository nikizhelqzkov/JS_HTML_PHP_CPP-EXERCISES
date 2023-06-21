#include <iostream>
#include <cmath>

struct Point
{
    double x;
    double y;
};

struct Circle
{
    Point center;
    double radius;
};

enum RelativePosition
{
    NO_COMMON_POINTS,
    TOUCHING,
    INTERSECTING,
    SAME
};

RelativePosition findRelativePosition(Circle c1, Circle c2)
{  
    double distance = sqrt(pow(c1.center.x - c2.center.x, 2) + pow(c1.center.y - c2.center.y, 2));
    if (distance > c1.radius + c2.radius)
    {
        return NO_COMMON_POINTS;
    }
    else if (distance == c1.radius + c2.radius)
    {
        return TOUCHING;
    }
    else if (distance < c1.radius + c2.radius && distance > abs(c1.radius - c2.radius))
    {
        return INTERSECTING;
    }
    else if (distance == abs(c1.radius - c2.radius))
    {
        return TOUCHING;
    }
    else if (distance < abs(c1.radius - c2.radius))
    {
        return NO_COMMON_POINTS;
    }
    else if (c1.center.x == c2.center.x && c1.center.y == c2.center.y && c1.radius == c2.radius)
    {
        return SAME;
    }
}