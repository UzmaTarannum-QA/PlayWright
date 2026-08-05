let arr = [1, 2, 3, 2, 1, 4, 5, 1];
let n = arr.length;
let visited = [];

for (let i = 0; i < n; i++) {
    if (visited[i]) {
        continue;
    }
    let count = 1;
    for (let j = i + 1; j < n; j++) {
        if (arr[i] === arr[j]) {
            visited[j] = true;
            count++;
        } 
    }
    console.log(`${arr[i]} appears ${count} times`);
}