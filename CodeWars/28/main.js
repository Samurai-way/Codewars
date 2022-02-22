function getCount(str) {
    var vowelsCount = 0;
  for (var i = 0; i < str.length; i++) {
        var letter = str.charAt(i).toLowerCase();
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') { vowelsCount++; }
  }
  
  return vowelsCount; 
}
console.log(getCount("Testing"));