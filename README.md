
# verify_both_list_existence
Given two arrays verify if the content of each is into the other array

# How it works
In this repository you'll find 3 functions that verify the same rule: 
1. if an element of one array is contained in the other array then return true, otherwise return false
2. if you send objects or any other data instead of valid arrays, you'll recieve an error instead of a valid response

### About the functions
You can find this functions in src/util/array-validation.js

#### BruteForce
This function traverse one array in a loop and inside this loop the other array is traversed (with another loop).
It's well knowed as bruteforce because for each element on the first array we traverse the second array in order to find it.
```
    About the Time/Space complexity: 
    Time: O(NxM)
    Space: O(1)
    N = length of the first array
    M = lenght of the second array
```

#### isElementIncluded
This function uses the array function called "includes".
It's an optimization to the bruteforce function, in a way of well-organized coding because we have just one for-loop instead 2.
We stop the searching once we get an element that is repeated in both of arrays (this does not changes the time complexity, but it's good to have a help reducing the time in average cases)
For each element on the first array we search for the element in the second array using the function "includes"

```
    About the Time/Space complexity:
    Time: O(NxM)
    Space: O(1)
    N = lenght of the first array
    M = length of the second array
    Annotation: we're considering here that the function includes is a linear function O(N), that's why the time complexity des not changes
```

#### isElementIncludedInSet
This function uses an object called Set that allow us to search an element in a O(1) time complexity using the function "has".
1. We first create a Set of elements from the first array.
2. We traverse the second array using a for-loop and for each element we search this element into the Set

With this changes we'll have a linear time complexity but, because we're using memory (the set object) our space complexity increase.

```
    About the Time/Space complexity: 
    Time: O(A+B) 
    Space: O(M)
    A and B = Length of the arrays
    M = length of the array converted in a Set
    Annotations: 
    1. when we convert the set we're generating a linear complexity O(A) => A length of the array
    2. when we're traverse the second array we're generating another linear complexity O(B) => length of the array traversed
    3. That's why the time complexity is the sum of this 2 arrays
```

## How to Install
In order to install this project, please run 
```npm install```

### How to test
In order to test, you can (after installed), please run: 
```npm run test```
If you want to add more tests, you can do it into the folder called ```___tests___```

### How to run
If you want to run an example (after installed), please run: 
```node src/index.js```
That will execute an example with the 3 functions




