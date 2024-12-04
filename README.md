# Unexpected NaN with Loose Equality in JavaScript

This repository demonstrates a common JavaScript error involving loose equality (==) and null/undefined checks.  Loose equality can lead to unexpected NaN results when comparing against undefined.

## The Bug
The `foo` function intends to return 0 if the input `x` is null, and `x + 1` otherwise.  However, when using loose equality (==), a comparison with `undefined` results in `NaN` because JavaScript's loose comparison does type coercion in unexpected ways.

## The Solution
The solution is to use strict equality (===) when checking for null or undefined.  Strict equality does not perform type coercion, leading to more predictable behavior and avoiding the NaN issue.
