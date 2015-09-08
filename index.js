// Monoids (Semigroups)
var Sum      = require('algebra.structures.sum');
var Product  = require('algebra.structures.product');
var Max      = require('algebra.structures.max');
var Min      = require('algebra.structures.min');
var All      = require('algebra.structures.all');
var Any      = require('algebra.structures.any');

var Identity = require('algebra.structures.identity');

module.exports = {
  Sum: Sum,
  Product: Product,
  Max: Max,
  Min: Min,
  All: All,
  Any: Any,
  Identity: Identity
};
