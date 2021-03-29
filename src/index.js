"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reflect_1 = require("@tsmirror/reflect");
console.log("hello");
var myInterfaceType = reflect_1.reflect();
console.log(myInterfaceType);
/* {
    kind: "interface",
    name: 'MyInterface',
    members: [
        { name: "id", type: { kind: "string" } },
        { name: "name", type: { kind: "string" } },
        { name: "age", type: { kind: "number" } },
    ]
} */ 
