const input = require('fs').readFileSync(0, 'utf8');
const lines = input.split('\n');
const s = lines[0].trim();
const ch = lines[1].trim();
// Write your solution here
let result ='';
let chars = Array.from(s);
chars.forEach(char => {
    if (char !== ch) {
        result = result + char;
        }
});

console.log(result);


