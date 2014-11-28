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
    Returns the current tolerance threshold for operations involving the vector.  The threshold is 0.0001 by default.

```JavaScript
setTolerance(tolerance)
```
    Set the tolerance threshold for operations on the vector.  The method takes 1 parameter, the desired threshold as a float value.

```JavaScript
get(index [optional])
```
    Returns the value at the specified point in the vector.  (Note: the index is 1-indexed.)  If no parameter is supplied, the method returns the entire vector as a JavaScript array.  

```JavaScript
make(magnitude, array_of_radians)
```
    Returns a vector object of the specified magnitude and with order and values determined by the supplied array of radians. 

```JavaScript
order()
```
    Returns the number of items contained in the vector.  Synonymous with dimension().

```JavaScript
dimension()
```
    Returns the number of items contained in the vector.  Synonymous with order().

magnitude
normalize
reverse
add
subtract
scalarMultiply
scalarDivide
dot
cross
transform


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
