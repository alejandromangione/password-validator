# Password Validator

Password Validator validates string in the next case:

- The string must be between 6 and 20 characters.
- Must contain at least one number, one letter and one special character.
- The string can not contain a sequence greater than 2 characters of the sequence: "012...89" and "abc...yxz" or the custom sequence

## Usage

```javascript
var isValid = passwordRuler.validate("foo-2015"); // true
```

## Example

See an example in [Demo page](http://leafs.com.br/demo/validate-password/)

## Instalation

With bower

```
bower install password-validator
```