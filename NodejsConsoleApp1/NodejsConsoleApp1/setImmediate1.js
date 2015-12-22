f = function (b) {
    console.log(b);
    if (b == 1000) {
        return;
    }
    return process.nextTick(function () {
        return f(b + 1);
    });
};

setImmediate(function () {
    console.log('------------------------------------');
});

f(1);