la
==

A linear algebra library implemented in JavaScript

The library has two components: [vectors](#vectors) and [matrices](#matrices).


###Vectors<a id="vectors"></a>
The most straightforward way to create a vector is to just supply it with an array.

```JavaScript
$LA.vector([3, -2, 5]);
```

But if you want you can just say the size (order) of the vector, and supply it an optional default value.

```JavaScript
$LA.vector(4, -1);
-> [-1, -1, -1, -1]
```

Operations involving a vector--for example, scaling the vector--return a new vector and do not affect the original.

####Vector methods
```JavaScript
toString()
```
Returns a string representation of the vector.

```JavaScript
getTolerance()
```
Get the current tolerance threshold for operations involving the vector.  The threshold is 0.0001 by default.

```JavaScript
setTolerance(tolerance)
```
Set the tolerance threshold for operations on the vector.  The method takes 1 parameter, the desired threshold as a float value.

```JavaScript
get(index [optional])
```
Get the value at the specified point in the vector.  (Note: the index is 1-indexed.)  If no parameter is supplied, the method returns the entire vector as a JavaScript array.  

```JavaScript
make(magnitude, array_of_radians)
```
Create a vector object of the specified magnitude and with order and values determined by the supplied array of radians. 

```JavaScript
order()
```
Get the number of items contained in the vector.  Synonymous with dimension().

```JavaScript
dimension()
```
Get the number of items contained in the vector.  Synonymous with order().

```JavaScript
magnitude()
```
Determine the magnitude, or "length", of a vector.  Synonymous with length().

```JavaScript
length()
```
Determine the magnitude, or "length", of a vector.  Synonymous with magnitude().

```JavaScript
distance(vector)
```
Find the distance between 2 vectors.

```JavaScript
normalize()
```
Create a vector object that's a unit vector of the original.

```JavaScript
reverse()
```
Create a vector object with the signs of its values flipped from the original.

```JavaScript
add(vector)
```
Add a vector to the original, returning a new vector object.

```JavaScript
divide(vector)
```
Subtract a vector from the original, returning a new vector object.

```JavaScript
scalarMultiply(scalar)
```
Multiply the vector by a scalar value, returning a new vector object.

```JavaScript
scalarDivide(scalar)
```
Divide the vector by a scalar value, returning a new vector object.

```JavaScript
dot()
```
Take the dot product of the vector.

```JavaScript
cross()
```
Multiply 2 vectors by cross product.  Both vectors must be of 3 dimensions.

```JavaScript
transform(function)
```
Perform an operation, supplied as a function, upon the values of the vector.


###Matrices<a id="matrices"></a>
Creating a matrix is similar to creating a vector, but you supply it a two-dimensional array.

```JavaScript
$LA.matrix([[-1, 0, 3, 5], [4, 2, -3, 4]]);
```

Or create a matrix by specifying the number of its rows and columns and an optional default.

```JavaScript
$LA.matrix(3, 3, 7);
-> [[7, 7, 7],
   [7, 7, 7],
   [7, 7, 7]]
```

Operations involving a matrix--for example, multiplying by a vector--return a new matrix and do not affect the original.

***

####Matrix methods
```JavaScript
toString
```
Returns a string representation of the matrix.

```JavaScript
getTolerance
```
Returns the current tolerance threshold for operations involving the vector.  The threshold is 0.0001 by default.

setTolerance
get
numberOfRows
numberOfColumns
asColumnVectors
asRowVectors
transpose
add
subtract
scale
scalarMultiply
scalarDivide
vectorMultiply
matrixMultiply
