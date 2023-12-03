// Write a function to flatten a nested array. For example, given [1, [2, [3, 4], 5], 6], return [1, 2, 3, 4, 5, 6]

const arr = [1, [2, [3, 4], 5], 6]
const flat_arr = flattenArray(arr)

function flattenArray(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]))

        } else {
            result.push(arr[i])
        }
    }

    return result
}


// flat_arr = arr.flat(2) //Here 2 is depth of the array

console.log(flat_arr)