# Hashtables

A hash table is a type of data structure that stores key-value pairs. The key is sent to a hash function that performs arithmetic operations on it. The result (commonly called the hash value or hash) is the index of the key-value pair in the hash table.

A basic hash table consists of two parts:

1. Hash function
    - hash function determines the index of our key-value pair
2. Array
    - array holds all the key-value entries in the table.

## Challenge

**Implementation of Hashtable with the following methods:**

1. `add` 
    - takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. `get` 
    - takes in the key and returns the value from the table.
3. `contains`
    - takes in the key and returns a boolean, indicating if the key exists in the table already.
4. `hash` 
    - takes in an arbitrary key and returns an index in the collection.
