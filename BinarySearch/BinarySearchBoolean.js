function binarySearch(array, search) {
    let low = 0;
    let high = array.length - 1; // Adjust to be the last index
    while (low <= high) { // Use a while loop for clarity and correctness
        const mid = Math.floor((low + high) / 2);
        const value = array[mid];

        if (value === search) {
            return true; // Correctly found the value
        } else if (value > search) {
            high = mid - 1; // Adjust high to narrow the search
        } else {
            low = mid + 1; // Adjust low to narrow the search
        }
    }
    return false; // Return false if the value is not found
}

console.log(binarySearch([2,3,4,7,10], 3));