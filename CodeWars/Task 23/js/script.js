Array.prototype.sameStructureAs = function (other) {   
    const isArray = Array.isArray
    let equal = true
  
    if (other.length !== this.length) return false
      
    let hasArrays = false
  
    for (let i = 0; i<this.length; i++) {
      if (isArray(this[i]) || isArray(other[i])) hasArrays = true
      if (isArray(this[i]) !== isArray(other[i])) return false
      if (isArray(this[i]) && isArray(other[i])) {
        equal = this[i].sameStructureAs(other[i]) && equal
      }
    }
    if (hasArrays == false) return true
  
    return equal
};