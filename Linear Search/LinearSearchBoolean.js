function linear_search(array, search) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === search){
            return true
        }
    } return false
}

console.log(linear_search([2,4,6,8,28,36,42], 6));