'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// folder
const dirArray = fs.readdirSync(path.join(__dirname, `test_folder`));
console.log(`for start`);
dirArray.forEach(async fileName => {
    const fileReadStram = fs.createReadStream(path.join(__dirname, `test_folder`, fileName));
    const rl = readline.createInterface({
        input: fileReadStram,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
        console.log(`${fileName} Line from file: ${line}`);
    }
});
console.log(`for end`);


