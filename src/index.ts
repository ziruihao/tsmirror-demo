import { reflect, ReflectType } from '@tsmirror/reflect';

interface MyInterface {
  id: string;
  name: string;
  age: number;
}

console.log("hello")

const myInterfaceType: ReflectType = reflect<MyInterface>();
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