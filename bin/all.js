/**
 * minify
 *
 * Write unit tests
 * Write sample
 */


var $LA = (function() {

  /**
   * Define a base class.
   *
   * @param that
   * @param my
   * @returns {*}
   */
  var base = function(that, my) {
    var my = my || {};
    my.TOLERANCE = 0.0001;

    that.setTolerance = function(v) {
      my.TOLERANCE = v;
      return this;
    };
    return that;
  };

  /**
   *
   *
   * @param arg1
   * If the first argument is an array, use it to determine the dimension.
   * If the first argument is a number, use it as the dimension.
   * @param arg2
   * Argument 2 if provided, will be used as the value to initialize.
   * Otherwise, 0 is used.
   *
   * @returns {*}
   */
  var vector = function(arg1, arg2) {
    var that, my, val, i;

    my = {};
    my.a = [];

    if (arg1) {
      if (Array.isArray(arg1)) {
        my.a = arg1;
      }
      else {
        if (!Number.isInteger(arg1)) {
          throw Error("If supplied, the first parameter must be either a number or an array.");
        }

        val = parseFloat(arg2) || 0;
        for (i = 0; i < arg1; ++i) {
          my.a.push(val);
        }
      }
    }

    that = {};
    that.toString = function() {
      return '[' + my.a.toString() + ']';
    };
    that.get = function(i) {
      if (i && Number.isInteger(i)) {
        if (i < 1) {
          throw new Error("The index must be greater than or equal to 1.");
        }

        return my.a[i - 1];
      }

      return my.a.slice();
    };
    that.make = function(m, aradians) {
      var new_a = aradians.reduce(function(prev, curr) {
        return prev.concat(m * Math.cos(curr));
      }, []);

      return vector(new_a);
    };
    that.order = function() {
      return my.a.length;
    };
    that.dimension = function() {
      return this.order();
    };
    that.magnitude = function() {
      var tot = my.a.reduce(function(prev, curr) {
        return prev + (curr * curr);
      }, 0);
      return Math.sqrt(tot);
    };
    that.length = function() {
      return this.magnitude();
    };
    that.distance = function(v) {
      var tot = my.a.reduce(function(prev, curr, i) {
        return prev + ((curr - v.get(i + 1)) * (curr - v.get(i + 1)));
      }, 0);
      return Math.sqrt(tot);
    };
    that.normalize = function() {
      var new_a;
      var m = this.magnitude();

      if (m <= my.TOLERANCE) {
        m = 1;
      }

      new_a = my.a.reduce(function(prev, curr) {
        var v = curr / m;
        if (Math.abs(v) < my.TOLERANCE) {
          v = 0;
        }
        return prev.concat(v);
      }, []);

      return vector(new_a);
    };
    that.reverse = function() {
      var new_a = my.a.reduce(function(prev, curr) {
        return prev.concat(-curr);
      }, []);

      return vector(new_a);
    };
    that.add = function(v) {
      var new_a;

      if (this.dimension() !== v.dimension() ) {
        throw new Error("Vectors can only be added or subtracted with vectors of the same order.");
      }

      new_a = my.a.reduce(function(prev, curr, i) {
        return prev.concat(curr + v.get(i+1));
      }, []);

      return vector(new_a);
    };
    that.subtract = function(v) {
      return this.add(v.reverse());
    };
    that.scale = function(s) {
      var new_a = my.a.reduce(function(prev, curr) {
        return prev.concat(curr * s);
      }, []);

      return vector(new_a);
    };
    that.scalarMultiply = function(s) {
      return this.scale(s);
    };
    that.scalarDivide = function(s) {
      return this.scale(1/s);
    };
    that.dot = function(v) {
      var product;

      if (this.dimension() !== v.dimension() ) {
        throw new Error("The dot product can only be taken on vectors of like dimension.");
      }

      product = my.a.reduce(function(prev, curr, i) {
        return prev + (curr * v.get(i+1));
      }, 0);

      return product;
    };
    that.cross = function(v) {
      var new_a = [];

      if (this.dimension() !== v.dimension() ) {
        throw new Error("The cross product can only be taken on vectors of like dimension.");
      }
      if (this.dimension() !== 3 ) {
        throw new Error("The cross product of can only occur on vectors of 3 dimensions");
      }

      new_a.push((this.get(2) * v.get(3)) - (this.get(3) * v.get(2)));
      new_a.push((this.get(3) * v.get(1)) - (this.get(1) * v.get(3)));
      new_a.push((this.get(1) * v.get(2)) - (this.get(2) * v.get(1)));
      return vector(new_a);
    };
    that.transform = function(fnc) {
      return fnc(this);
    };

    return base(that, my);
  };

  /**
   *
   * @param arg1
   // If the first argument is an array, use it to determine the number of
   // rows and columns.
   // If the first argument is a number, use as the row count.
   * @param arg2
   // Argument 2 is then expected to be the column count.
   * @param arg3
   // Argument 3, if provided, will be used as the value to initialize.
   // Otherwise, 0 is used.
   *
   * @returns {*}
   */
  var matrix = function(arg1, arg2, arg3) {
    var that, my, val, row_array, i, j, length_test;

    my = {};
    my.a = [];
    my.rows = 0;
    my.columns = 0;

    if (arg1) {
      if (Array.isArray(arg1)) {
        if (arg1.length != 0) {
          if (!Array.isArray(arg1[0])) {
            throw Error("If the first parameter is an array of some length, it must be an array of arrays.");
          }

          my.rows = arg1.length;
          my.columns = arg1[0].length;

          // Confirm that all the rows are of like length.
          length_test = arg1.every(function(elem) {
            return elem.length == my.columns;
          });
          if (!length_test) {
            throw Error("Each of the matrix's rows must be of the same length.");
          }
        }

        my.a = arg1;
      }
      else {
        if (!Number.isInteger(arg1)) {
          throw Error("The first parameter must be either a number or an array.");
        }
        if (!Number.isInteger(arg2)) {
          throw Error("If supplied, the second parameter must be a number.");
        }
        val = parseFloat(arg3) || 0;

        my.rows = arg1;
        my.columns = arg2;

        for (i = 0; i < my.rows; ++i) {
          row_array = [];
          for (j = 0; j < my.columns; ++j) {
            row_array.push(val);
          }
          my.a.push(row_array);
        }
      }
    }

    function _matrix_op(m, fnc) {
      var outer, inner;

      outer = my.a.reduce(function(prev, curr, row_index) {
        inner = curr.reduce(function(row_array, elem, col_index) {
          return row_array.concat(fnc(elem, m.get(row_index+1, col_index+1)));
        }, []);
        prev.push(inner);
        return prev;
      }, []);

      return matrix(outer);
    }

    that = {};
    that.toString = function() {
      var output = my.a.reduce(function(prev, curr, i) {
        var t = (i !== 0) ? ',\n[' : '[';
        t += curr.toString();
        t += ']';
        return prev + t;
      }, '');

      return '[' + output + ']';
    };
    that.numberOfRows = function() {
      return my.rows;
    };
    that.numberOfColumns = function() {
      return my.columns;
    };
    that.get = function(row, col) {
      var msg_lower_bounds = "Row and column indices must be greater than or equal to 1.";
      var msg_upper_bounds = "The requested element is outside the bounds of the matrix.";

      if (row && col) {
        if (row < 1 || col < 1) {
          throw new Error(msg_lower_bounds);
        }
        if (row > this.numberOfRows() || col > this.numberOfColumns()) {
          throw new Error(msg_upper_bounds);
        }

        return my.a[row - 1][col - 1];
      }
      if (row) {
        if (row < 1) {
          throw new Error(msg_lower_bounds);
        }
        if (row > this.numberOfRows()) {
          throw new Error(msg_upper_bounds);
        }

        return my.a[row - 1].slice();
      }
      if (col) {
        if (col < 1) {
          throw new Error(msg_lower_bounds);
        }
        if (row > this.numberOfColumns()) {
          throw new Error(msg_upper_bounds);
        }

        return my.a.reduce(function(prev, curr) {
          return prev.concat(curr[col - 1]);
        }, []);
      }

      return my.a.slice();
    };
    that.asColumnVectors = function(n) {
      var j, vectors = [];

      if (n && Number.isInteger(n)) {
        return vector(this.get(null, n));
      }

      for (j=1; j <= this.numberOfColumns(); ++j) {
        vectors.push(vector(this.get(null, j)));
      }
      return vectors;
    };
    that.asRowVectors = function(n) {
      if (n && Number.isInteger(n)) {
        return vector(this.get(n));
      }
      return my.a.reduce(function(prev, curr) {
        return prev.concat(vector(curr));
      }, []);
    };
    that.transpose = function() {
      var row, col, outer, row_array;

      outer = [];
      for (col = 0; col < my.columns; ++col) {
        row_array = [];
        for (row = 0; row < my.rows; ++row) {
          row_array.push(this.get(row + 1, col + 1));
        }
        outer.push(row_array);
      }

      return matrix(outer);
    };
    that.add = function(m) {
      if (this.numberOfRows() !== m.numberOfRows() ||
        this.numberOfColumns() !== m.numberOfColumns()) {
        throw new Error("Matrices can only be added or subtracted with matrices of the same order.");
      }

      return _matrix_op(m, function(ours, theirs) {
        return ours + theirs;
      });
    };
    that.subtract = function(m) {
      if (this.numberOfRows() !== m.numberOfRows() ||
        this.numberOfColumns() !== m.numberOfColumns()) {
        throw new Error("Matrices can only be added or subtracted with matrices of the same order.");
      }

      return _matrix_op(m, function(ours, theirs) {
        return ours - theirs;
      });
    };
    that.scale = function(s) {
      var outer, inner;

      outer = my.a.reduce(function(prev, curr, row_index) {
        inner = curr.reduce(function(row_array, elem, col_index) {
          return row_array.concat(elem * s);
        }, []);
        prev.push(inner);
        return prev;
      }, []);

      return matrix(outer);
    };
    that.scalarMultiply = function(s) {
      return this.scale(s);
    };
    that.scalarDivide = function(s) {
      return this.scale(1/s);
    };
    that.vectorMultiply = function(v) {
      var outer, row_total;

      if (this.numberOfColumns() !== v.order()) {
        throw new Error("Matrix-vector multiplication can only occur when the order of the vector and the column number of the matrix are the same.");
      }

      outer = my.a.reduce(function(prev, row) {
        row_total = row.reduce(function(sum, curr, col_index) {
          return sum + (curr * v.get(col_index + 1));
        }, 0);
        return prev.concat(row_total);
      }, []);

      return vector(outer);
    };
    that.matrixMultiply = function(m) {
      var self = this;
      var products;

      if (this.numberOfColumns() != m.numberOfRows()) {
        throw new Error("Matrix-matrix multiplication can only occur when the number of columns of this matrix is equal to the number of rows of the supplied matrix.");
      }

      products = m.asColumnVectors().reduce(function(prev, curr) {
        prev.push(self.vectorMultiply(curr).get());
        return prev;
      }, []);

      return matrix(products).transpose();
    };

    return base(that, my);
  };

  return {
    vector: function(arg1, arg2) {
      return vector(arg1, arg2);
    },
    matrix: function(arg1, arg2, arg3) {
      return matrix(arg1, arg2, arg3);
    }
  };
})();
