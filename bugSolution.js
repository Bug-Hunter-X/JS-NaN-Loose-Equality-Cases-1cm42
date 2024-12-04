function foo(x) {
  if (x === null) {
    return 0; 
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: undefined + 1 (NaN) Note that undefined +1 is still NaN even when using === 
// To handle undefined correctly, you should explicitly check for it:
function foo(x) {
    if (x === null || x === undefined) {
      return 0; 
    }
    return x + 1;
  }
  console.log(foo(null)); // Output: 0
  console.log(foo(undefined)); // Output: 0