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

* [vector.toString()](#vector.toString)
* [vector.getTolerance()](#vector.getTolerance)
* [vector.setTolerance()](#vector.setTolerance)
* [vector.get()](#vector.get)
* [vector.make()](#vector.make)
* [vector.order()](#vector.order)
* [vector.dimension()](#vector.dimension)
* [vector.magnitude()](#vector.magnitude)
* [vector.length()](#vector.length)
* [vector.length()](#vector.length)

<a id="vector.toString"></a>
```
toString()
```
Returns a string representation of the vector.

<a id="vector.getTolerance"></a>
```
getTolerance()
```
Get the current tolerance threshold for operations involving the vector.  The threshold is 0.0001 by default.

<a id="vector.setTolerance"></a>
```
setTolerance(tolerance)
```
Set the tolerance threshold for operations on the vector.  The method takes 1 parameter, the desired threshold as a float value.

<a id="vector.get"></a>
```
get(index [optional])
```
Get the value at the specified point in the vector.  (Note: the index is 1-indexed.)  If no parameter is supplied, the method returns the entire vector as a JavaScript array.  

<a id="vector.make"></a>
```
make(magnitude, array_of_radians)
```
Create a vector object of the specified magnitude and with order and values determined by the supplied array of radians. 

<a id="vector.order"></a>
```
order()
```
Get the number of items contained in the vector.  Synonymous with dimension().

<a id="vector.dimension"></a>
```
dimension()
```
Get the number of items contained in the vector.  Synonymous with order().

<a id="vector.magnitude"></a>
```
magnitude()
```
Determine the magnitude, or "length", of a vector.  Synonymous with length().

<a id="vector.length"></a>
```
length()
```
Determine the magnitude, or "length", of a vector.  Synonymous with magnitude().

<a id="vector.distance"></a>
```
distance(vector)
```
Find the distance between 2 vectors.

<a id="vector.normalize"></a>
```
normalize()
```
Create a vector object that's a unit vector of the original.

<a id="vector.reverse"></a>
```
reverse()
```
<a id="vector.reverse"></a>Create a vector object with the signs of its values flipped from the original.

```
add(vector)
```
<a id="vector.add"></a>Add a vector to the original, returning a new vector object.

```
subtract(vector)
```
<a id="vector.subtract"></a>Subtract a vector from the original, returning a new vector object.

```
scale(scalar)
```
<a id="vector.scale"></a>Multiply the vector by a scalar value, returning a new vector object.  Synonymous with scalarMultiply().

```
scalarMultiply(scalar)
```
<a id="vector.scalarMultiply"></a>Multiply the vector by a scalar value, returning a new vector object.  Synonymous with scale().

```
scalarDivide(scalar)
```
<a id="vector.scalarDivide"></a>Divide the vector by a scalar value, returning a new vector object.

```
dot()
```
<a id="vector.dot"></a>Take the dot product of the vector.

```
cross()
```
<a id="vector.cross"></a>Multiply 2 vectors by cross product.  Both vectors must be of 3 dimensions.

```
transform(function)
```
<a id="vector.transform"></a>Perform an operation, supplied as a function, upon the values of the vector.

***

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
```
toString()
```
Returns a string representation of the vector.

```
getTolerance()
```
Get the current tolerance threshold for operations involving the vector.  The threshold is 0.0001 by default.

```
setTolerance(tolerance)
```
Set the tolerance threshold for operations on the vector.  The method takes 1 parameter, the desired threshold as a float value.

```
get(row [optional], column [optional])
```
Get the value at the specified point in the matrix.  (Note: row and column indices are 1-indexed.)  If neither a row parameter or column parameter is supplied, return the JavaScript arrays of the matrix.  If no row parameter is supplied but a column parameter is supplied, an array containing each of the values of that column is returned.  If no column parameter is supplied but a row parameter is supplied, an array containing each of the values of that row is returned.

```
numberOfRows()
```
Get the number of rows in the matrix.

```
numberOfColumns()
```
Get the number of columns in the matrix.

```
asRowVectors()
```
Represent the matrix as an array of vectors, each of which represents a row.

```
asColumnVectors()
```
Represent the matrix as an array of vectors, each of which represents a column.

```
transform(function)
```
Perform an operation, supplied as a function, upon the values of the matrix.

```
add(matrix)
```
Add a matrix to the original, returning a new matrix object.

```
subtract(matrix)
```
Subtract a matrix from the original, returning a new matrix object.

```
scale(scalar)
```
Multiply the matrix by a scalar value, returning a new matrix object.  Synonymous with scalarMultiply().

```
scalarMultiply(scalar)
```
Multiply the matrix by a scalar value, returning a new matrix object.  Synonymous with scale().

```
scalarDivide(scalar)
```
Divide the matrix by a scalar value, returning a new matrix object.

```
vectorMultiply(vector)
```
Multiply the matrix by a vector, returning a new matrix object.

```
matrixMultiply(matrix)
```
Multiply the matrix by another matrix, returning a new matrix object.
