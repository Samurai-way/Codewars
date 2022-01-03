
function queueTime(customers, n) {
    //TODO
    if(customers.length <= 0) return 0
    let arr = new Array(n);
    arr.fill(0);
    do {
      arr[arr.indexOf(Math.min.apply(null, arr))] += customers.shift()
    } while (customers.length > 0)
    return Math.max.apply(null, arr)
}