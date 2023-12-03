// A function to check - Palindrome

function palindrome(str) {

    let str_len = str.length
    let reverse_str = ""
    for (let i = str_len - 1; i >= 0; i--) {
        reverse_str = reverse_str + str.charAt(i)
    }

    return reverse_str === str ? str + " is a palindrome" : str + " is not a palindrome"

}
console.log(palindrome("racecar"))

