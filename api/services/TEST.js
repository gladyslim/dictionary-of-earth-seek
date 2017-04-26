require('colors');
let counter = 0;
let user1 = { name: "ASDASD" };
module.exports = {
    'increase': function (id) {
        counter++;
    },
    'reset': function (name) {
        counter = 0;
    },
    'show': function () {
        console.log(counter);
    }
};
