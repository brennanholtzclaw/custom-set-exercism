function CustomSet(array){
  this.array = array || []

}

CustomSet.prototype.eql = function(input) {
  // console.log(this.array.sort())
  // console.log(input.array.sort())
  var thisArray = this.array.sort();
  var inputArray = input.array.sort();

  if (inputArray.length != thisArray.length) {
    return false
  }

  for (var i = 0; i < thisArray.length; i++) {
    if (thisArray[i] != inputArray[i]) {
      return false
    }
  }

  return true;
}

CustomSet.prototype.delete = function(input) {
  var newArray = this.array.filter(function(thisArray, index){
    return thisArray != input
  })
  this.array = newArray
  return this;
}

CustomSet.prototype.difference = function(input) {
  var thisArray = this
  input.array.forEach(function (num, index) {
    thisArray.delete(num)
  })
  return this
}

CustomSet.prototype.disjoint = function(input) {
  // var newArray = this.difference(input)
  //
  // if (this.eql(newArray)) {
  //   return true
  // }
  // return false
}

CustomSet.prototype.empty = function() {
  this.array = []
  return this;
}


module.exports = CustomSet
