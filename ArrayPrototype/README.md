# **Enhancing Arrays with a `.last()` Method**  

## **Problem Statement**  
Enhance all arrays in JavaScript so that you can call `.last()` on any array, which:  
- Returns the **last element** if the array has elements.  
- Returns **`-1`** if the array is empty.  

---  

## **Solution Explanation**  
### 🔹 **Understanding Array Indexing**  
- Arrays in JavaScript are **zero-indexed**, meaning:  
  - The **first element** is at index `0`.  
  - The **second element** is at index `1`.  
  - The **last element** is at index `this.length - 1`.  

### 🔹 **How It Works**  
- `this.length` **counts the total number of elements** in the array.  
- Since indexing starts from `0`, the **last element** is at `this.length - 1`.  
- If the array is **empty** (`length === 0`), `this.length - 1` becomes `-1`, which is invalid, so we return `-1`.  

---  

## **Example Usage**  
```javascript  
const nums = [null, {}, 3];  
console.log(nums.last()); // Output: 3  

const emptyArr = [];  
console.log(emptyArr.last()); // Output: -1  
```  

