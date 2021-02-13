"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var group = _.groupBy(['one', 'two', 'three'], 'length');
        console.log(group); // => { '3': ['one', 'two'], '5': ['three'] }
        return 0;
    };
    return Startup;
}());
Startup.main();
