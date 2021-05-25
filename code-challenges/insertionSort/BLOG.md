# Insertion Sort

**INPUT ARRAY:** -> [8, 4, 23, 42, 16, 15]


1. First Pass
    - In the first pass through of the insertion sort, we evaluate if there is a smaller number in the array than what is currently present in index 1. 
    - We find this smaller number right away in index 0. At the end of the evaluation, the smaller number will be swapped with the current value in index j.
2. Second Pass
    - The second pass through the array starts from value in index 2 and evaluate to see if there is a smaller value in indexes 1 and 0. 
    - We compare value in index 2 with value in index 1 : array[2] !< array[1]. 
    - While loop will not run.
3. Third Pass
    - The third pass evaluates starting at position 3 and compares value at positions 3 with value at position 2. 
    - Value(42) at position 3 is greater than value(23) at position 2. 
    - While loop will not do update. 
4. Fourth Pass
    - The fourth pass through the array starts from value in index 4 and start comparison with value at position 3. 
    - 16 is less than 42, these values swap positions with each other. 
    - We decrement `j` to continue camparison with previous values. 
    - Now 16 is in index 3, we compare it with value in index 2. 16 is less than 23, these values swap positions. 
    - During next iteration we compare 16 with value at position 2. 8 is less than 16, these values will not swap 
    - while loop stops
5. Fifth Pass
    - The fifth pass starts in index 5 and we start to compare 15 with values at previous positions. 
    - 15 is less than 42 -> swap, 15 is less than 23 -> swap, 15 is less then 16 -> swap. 
    - While loop stops.
6. For loop stops, because it supposed to run 5 times if array has 6 values 