const nums1 = [1, -2, 3, 4]
const nums2 = [8, 3, -8, 1]

const nums3 = [5, ...nums1, -6, -1, ...nums2]

console.log(nums3)

let sum = 0
function total(item) {
  for (let item of nums3) {
    sum += item
  }
}
total(nums3)
console.log(sum)
