function removeZeros(array) {
   var len = array.length
    , str = ''
    , index = 0;

  for (var i = 0; i < len; i++)
    if (array[i] === 0)
      str += '0';
    else if (array[i] === '0')
      str += '1';
    else 
      array[index++] = array[i];

  for (var i = 0, strLen = str.length; i < strLen; i++)
    if (str[i] === '0')
      array[index++] = 0;
    else 
      array[index++] = '0';

  return array;
}