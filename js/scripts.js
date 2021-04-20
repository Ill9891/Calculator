calculator.init();

function logInfo() {
    console.log(`Name: ${this.name}, Job: ${this.job}`);
}

var person1 = { name: 'John', job: 'C#' }
var person2 = { name: 'Anna', job: 'Java' }


function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

bind(person1, logInfo)()
bind(person2, logInfo)()

