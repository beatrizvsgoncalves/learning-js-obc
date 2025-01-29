function findSecondSmallest(magicNumbers) {
    function removeDuplicate(magicNumbers) {
        return [...new Set(magicNumbers)]
    }
    
    magicNumbers.sort((a, b) => a - b)
    const noDuplicates = removeDuplicate(magicNumbers)
    const secondSmallest = noDuplicates[1]

    return secondSmallest
}

const magicNumbers = [30, 15, 22, 15, 42, 7, 7, 2, 2]
console.log(findSecondSmallest(magicNumbers))