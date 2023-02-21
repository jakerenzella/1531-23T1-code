// private functions
// public functions (exported)

function _superSecretStuff() {
  return 42;
}

function isEven(number) {
  _superSecretStuff();
  return number % 2 == 0;
}

function isOdd(number) {
  return !isEven(number);
}

export { isEven, isOdd };

