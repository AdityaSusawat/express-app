const {EventEmitter} = require('events');

class Logger extends EventEmitter { //Logger class extends the parent(base) class of EventEmitter. With this change, the Logger class will have all the functionalities that are defined in the EventEmitter
    logz(message){
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http'}); //Now we can use `this` instead of an emitter(the instantiated object of EventEmitter class)
    }
}

module.exports = Logger;