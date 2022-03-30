
const removeFromArray = function(array, ...toRemove) {
    
    for (const remove of toRemove) {
        for (let i = 0; i < array.length;i++) {
            if (array[i] === remove) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
