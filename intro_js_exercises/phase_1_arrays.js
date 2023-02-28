Array.prototype.uniq = function() {
    debugger
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

// console.log([1, 2, 2, 3, 3, 3].uniq()) //=> [1, 2, 3]

Array.prototype.twoSum = function() {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; i++) {
            if(this[i] + this[j] === 0) {
                newArray.push([i, j]);
            }
        }
    }
    return newArray;
}

// console.log([1,2,3,-3,-2,-1].twoSum()) //=> [[0,5][1,4],[2,3] and then opposite of those three]

Array.prototype.transpose = function() {
    let newArray = new Array;
    for(let i = 0; i < this.length; i++) {
        let holder = [];
        for(let j = 0; j <this[i].length; j++) {
            holder.push(this[j][i]);
        }
        newArray.push(holder);
        
    }
    return newArray;
}

// console.log([[1,2,3], [4,5,6], [7,8,9]].transpose())


// [[1,2,3],     [[1,4,7],
// [4,5,6,],     [2,5,8],
// [7,8,9]]      [3,6,9]]

Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

console.log([1,2,3,4,5].myEach((num) => num + 1))