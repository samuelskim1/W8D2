Array.prototype.uniq = () => {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

console.log([1, 2, 2, 3, 3, 3].uniq()) //=> [1, 2, 3]