// Logic 1: Using strings

let str = "amantran"
let str_len = str.length
let reverse_str = ""
for (let i = str_len - 1; i >= 0; i--) {
    reverse_str = reverse_str + str.charAt(i)
}
console.log(reverse_str)

//Logic 2: Using arrays

let stn = "Panchavati"
let stnLen = stn.length
let reverse_stn = []

for (let i = 0; i < stnLen; i++) {
    reverse_stn.unshift(stn[i])
}

console.log(reverse_stn.join(""))
