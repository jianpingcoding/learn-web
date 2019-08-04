# Types

## Primitives
- string, number, boolean, null, undefined, symbol
- When you access a primitive type you work directly on its value.

## Complex
- object, array, function
- When you access a complex type you work on a reference to its value.


# References
## let and const
- Use const for all of your references; avoid using var. eslint: prefer-const, no-const-assign
- If you must reassign references, use let instead of var. eslint: no-var
- let and const are block-scoped.

# Objects
- Use the literal syntax for object creation. eslint: no-new-object
- Use computed property names when creating objects with dynamic property names.
- Use object method shorthand. eslint: object-shorthand
- Use property value shorthand. eslint: object-shorthand
- Group your shorthand properties at the beginning of your object declaration.
- Only quote properties that are invalid identifiers. eslint: quote-props
- Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint: no-prototype-builtins
- Prefer the object spread operator over Object.assign to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

# Arrays
- Use the literal syntax for array creation. eslint: no-array-constructor
- 


# Related Website
- https://github.com/airbnb/javascript