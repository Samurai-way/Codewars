function validatePIN (pin) {
    if (pin.length == 4 || pin.length == 6) 
      {
        for (let i = 0; i < pin.length; i++)
          {
            if (pin[i] == "0" ||
                pin[i] == "1" ||
                pin[i] == "2" ||
                pin[i] == "3" ||
                pin[i] == "4" ||
                pin[i] == "5" ||
                pin[i] == "6" ||
                pin[i] == "7" ||
                pin[i] == "8" ||
                pin[i] == "9") ;
            else return false;
          }
        return true;
      }
    else return false;
}