
function pigIt(str){
    //Code here
    str = str.trim().split(/\s{1,}/);
      return str.map(val => {
          if (/^[A-Za-z]+$/.test(val)) {
              return `${val.slice(1)}${val.slice(0, 1)}ay`;
          }
          return val;
      }).join(' ');
}