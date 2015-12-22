var events = require('events');

var obj = function () {
    
    events.EventEmitter.call(this);
    
    this.test = function () {
        console.log('obj test method');
        //this.emit.apply(this,['testCalled', Math.random(), 2, 3]);
        this.emit('testCalled', Math.random(), 2, 3);
    }

}
obj.prototype.__proto__ = events.EventEmitter.prototype;

var o = new obj();
o.on('testCalled', function (a, b, c) {
    console.log('testCalled %d %d %d', a, b, c);
})

o.test();