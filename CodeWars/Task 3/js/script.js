function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
      .split('')
      .filter(el => vowels.indexOf(el.toLowerCase()) == -1)
      .join('');
}