
# Simple Person Management System using TypeScript
This TypeScript code defines a simple CRUD (Create, Read, Update, Delete) operation for managing a list of persons in an array. Here's a breakdown of what the code does:

1. **"use strict";**: This directive enforces a strict mode of JavaScript, which helps catch common coding mistakes and "unsafe" actions, promoting better coding practices.

2. **personList**: An array that initially holds information about two persons as objects. Each person object has properties such as `id`, `name`, `age`, and `major`.

3. **createPerson**: A function that takes a `person` object as an argument and pushes it to the `personList` array. This function effectively adds a new person to the list.

4. **updatePerson**: A function that takes a `person` object as an argument. It searches for a person in the `personList` array based on the `id` property, and if found, it updates the existing person's properties with the properties from the provided `person` object.

5. **removePerson**: A function that takes a `person` object as an argument. It finds the index of the person with the given `id` in the `personList` array and removes that person using the `splice` method.

6. **createPerson** and **updatePerson** are demonstrated with two examples where a new person is created and an existing person's details are updated based on their `id`.

7. **console.log(personList)**: Prints the `personList` array to the console after creating, updating, and removing persons. This demonstrates the changes made to the array.

8. The final **removePerson** and **console.log(personList)** sections demonstrate the removal of a person with the specified `id` and print the updated `personList` array again.

In summary, this TypeScript code showcases a basic way to manage a list of persons with operations like adding, updating, and removing persons from the list, using simple functions and an array. The example provided demonstrates these operations in action and outputs the results to the console.

## Authors

- [@MohammadMehdiSalehi](https://github.com/mohammadmehdisalehi)




