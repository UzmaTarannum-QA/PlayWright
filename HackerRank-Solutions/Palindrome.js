const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here

let left = 0;
let right = str.length - 1;
let ispalindrome = null;
while (left < right) {
    if (str[left] === str[right]) {
        left++;
        right--;
        ispalindrome = true;
    } else {
        ispalindrome = false;
        break;
    }
   
}
if (ispalindrome) {
    console.log("YES");
} else {
    console.log("NO");
    
}