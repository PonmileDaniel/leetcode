var createCounter = function(n) {
    return function() {
        return n++; // Return `n`, then increase it
    };
};
