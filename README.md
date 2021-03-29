# Demo for using `tsmirror` on simple Node project

The source code provided by [`tsmirror`](https://github.com/aenario/tsmirror) is copied in `src/index.ts`. It simply prints out the reflected version of an interface.

However, once we transpile the Typescript file into `src/index.js`, and we run using Node v14, we get the following error message:

```
./node_modules/@tsmirror/reflect/lib/index.js:11
    throw new Error('tsmirror.reflect was not compiled out.');
    ^

Error: tsmirror.reflect was not compiled out.
    at Object.reflect (./node_modules/@tsmirror/reflect/lib/index.js:11:11)
    at Object.<anonymous> (./src/index.js:5:33)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```
