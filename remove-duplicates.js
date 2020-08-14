var removeDuplicates = function(nums) {
    return [...new Set(nums)]
};
console.log(removeDuplicates([3,4,5,6,7,7,7,4,4,5,6]))