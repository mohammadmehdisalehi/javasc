
# Function that find word frequency in sentences.

This code is implemented by javascript.
This JavaScript code defines a function called `find_word` that is designed to find the frequency of a specific word in a given string. The function takes two parameters: `str`, which represents the input string, and `myWord`, which is the word you want to find the frequency of.

Here's a step-by-step explanation of how the code works:

1. The function `find_word` is defined with two parameters `str` and `myWord`.

2. Two variables `wordFreq` and `wordLen` are initialized to 0. `wordFreq` will be used to keep track of the frequency of the target word (`myWord`), and `wordLen` will be used to count the number of characters matched between the input string and the target word.

3. The function starts a `for` loop that iterates over the characters of the input string `str`. The loop is used to traverse the entire string to find occurrences of the target word.

4. Inside the loop, it checks if the current character `str[i]` is equal to the first character of the target word `myWord[0]`.

5. If a match is found, it enters another nested `for` loop, starting from the current index `i` and ending at `i + myWord.length`. This inner loop is used to compare consecutive characters of `str` with the characters of `myWord`.

6. If the characters match, it increments the `wordLen` variable.

7. After the inner loop, it checks if `wordLen` is equal to the length of `myWord`. If it is, that means the entire `myWord` has been matched in the input string, so it increments the `wordFreq` variable.

8. The `wordLen` is reset to 0 before moving to the next iteration of the outer loop to search for the next occurrence of `myWord`.

9. After the outer loop completes, the function returns a string containing the frequency of occurrences of `myWord` in the input string.

10. Finally, the `console.log` statement calls the `find_word` function with the input string `'the black box in black road.'` and the word `'black'`, and prints the result to the console.

To understand the code's functionality better, let's analyze the provided example:

```javascript
console.log(find_word('the black box in black road.', 'black'));
```

The input string is `'the black box in black road.'`, and we want to find the frequency of the word `'black'` in this string. The code will count how many times `'black'` appears in the input string and return the result as a string.

When you run the code, it should output:

```
"This string contains '2' black'"
```

This means that the word `'black'` appears twice in the input string. The code successfully found and counted the occurrences of the target word.


## Authors

- [@MohammadMehdiSalehi](https://github.com/mohammadmehdisalehi)




