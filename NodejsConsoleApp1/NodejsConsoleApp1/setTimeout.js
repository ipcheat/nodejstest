console.time('test')

var timer = setTimeout(function () {    

    clearTimeout(timer);

    console.log('good mornming!')

    console.timeEnd('test')

}, 3000);