const n = parseInt(prompt());
const arr = prompt().split(" ").map(Number);

arr.sort((a, b) => a - b);

let found = false;

for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
        console.log(arr[i]);
        found = true;

        // Skip repeated duplicates
        while (i < n - 1 && arr[i] === arr[i + 1]) {
            i++;
        }
    }
}

if (!found) {
    console.log("No duplicates found");
}