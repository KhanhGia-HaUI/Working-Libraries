# Libraries

A working libraries for TypeScript, will be updating in the future

## Installation

Install the TypeScript Script along with TypeScript modules in NodeJS

```bash
npm i typescript
```

For better JSON Parsing, you should install "best-effort-json-parser"

```bash
npm i best-effort-json-parser
```
## Usage
This is just an example. You can change everything in the source code to suitable for your purpose. I will update it when I have time.
Any file directory will represent for ```process.argv[2]``` because ```process.argv[0]``` and ```process.argv[1]``` are represent for nodejs program.

```javascript
const lib = require('./file-system')

lib.getAllFiles(dir)
```
```bash
node main.ts [any file directory] 
```
## License

[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)
