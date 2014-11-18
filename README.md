la
==

A linear algebra library implemented in JavaScript

The library has two components: vectors and matrices.


###Vectors
The most straightforward way to create a vector is to just supply it with an array.

```JavaScript
$LA.vector([3, -2, 5]);
```

But if you want you can just say the size (order) of the vector, and supply it an optional default value.

```JavaScript
$LA.vector(4, -1);
-> [-1, -1, -1, -1]
```

[Check out the functionality available for vectors.](#vector-methods)


###Matrices
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

[Check out the functionality available for matrices.](#vector-methods)

###Vector methods <a id="vector-methods"></a>

###Matrix methods <a id="matrix-methods"></a>
