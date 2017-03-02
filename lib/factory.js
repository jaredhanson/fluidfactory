function Factory() {
  this._fns = [];
}

Factory.prototype.use = function(fn) {
  this._fns.push(fn);
}

Factory.prototype.create = function() {
  var fns = this._fns
    , fn, obj, i, len;
  for (i = 0, len = fns.length; i < len; ++i) {
    fn = fns[i];
    obj = fn.apply(undefined, arguments);
    if (obj) { return obj; }
  }
};


module.exports = Factory;
