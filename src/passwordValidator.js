var passwordRules = {};

passwordRules._min = 6;
passwordRules._max = 20;
passwordRules._sequences = [ ["123456789"], ["abcdefghijklmnopqrstuvwxyz"] ];

passwordRules.checkCharacters = function(str) {
    //
    if( (new RegExp("\\W")).test(str) && (new RegExp("\\w")).test(str) && !(new RegExp("\\ ")).test(str)) {
      return true;
    }

    return false;
  }

passwordRules.checkSize = function(str) {

  if(str.length >= passwordRules._min && str.length <= passwordRules._max) {
    return true;
  }

  return false;
}

passwordRules.checkSequence = function(str) {

    for (var i=0; i < str.length - 2; i++){
      var pwdPart = str.substring(i, i+3);
      var patt = new RegExp(pwdPart);

      for (s in passwordRules._sequences) {

        for (var k=0; k < passwordRules._sequences.length; k++){
          if (patt.test(passwordRules._sequences[k])) {
            return false;
          }
        }
      }


    }

    return true;

}

passwordRules.validate = function(str) {

  var result = passwordRules.checkCharacters(str) && passwordRules.checkSize(str) && passwordRules.checkSequence(str);

  return result;

}