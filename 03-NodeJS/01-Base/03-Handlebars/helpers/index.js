// On définit notre fonction
exports.limitArray = (arr, limit) => {
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.slice(0, limit);
}

// Upper Case
exports.upper = (str) => str.toUpperCase()
