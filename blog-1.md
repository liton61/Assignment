# Union and Intersection Types in TypeScript

### In TypeScript, union and intersection types are powerful constructs that allow to work more flexibly and safely with variables that might hold more than one type of value.

## Union Types ( | ):

- Union types are used when a value can be one of several types. It provide a way that a variable can hold a value of type A or type B.

- For example,

typescript
let value: string | number;

it means value can be either a string or a number.

- Union types are often used to represent nullable types. For example, string | null represents a variable that can hold a string or a null value.

- Union type can only access members that are common to all types in the union without further type narrowing.

## Intersection Types ( & ):

- Intersection types combine multiple types into one. They are used when a value must be all of the types.

- For example,
typescript
 let value: TypeA & TypeB;

it means value will have all the properties of TypeA and TypeB.

- This is useful for patterns, where an object to have the combined capabilities of multiple types.

- It’s also used for extending types when create a new type that has all the properties of existing types plus some additional ones.