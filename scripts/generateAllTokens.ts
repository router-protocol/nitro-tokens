// TODO: add flow property for each token

import * as fs from 'fs';

// File paths for uploaded files
const filePaths = [
    'forwarder.json',
    'mintable.json',
    'circleCCTP.json',
    'gateway.json'
];

// Function to load JSON data from file
const loadFile = (path: string): any[] => {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
};

// Combine data from all files
let combinedData: any[] = [];
filePaths.forEach(path => {
    const data = loadFile(path);
    combinedData = combinedData.concat(data);
});

// Remove duplicates using a map with unique token identifier
const uniqueTokens: { [key: string]: any } = {};

combinedData.forEach(token => {
    const key = `${token.id}-${token.chainId}-${token.address}`;  // Using id, chainId, and address to identify unique tokens
    uniqueTokens[key] = token;
});

// Convert the object back to an array and sort by chainId
const sortedTokens = Object.values(uniqueTokens).sort((a: any, b: any) => {
    const chainIdA = isNaN(Number(a.chainId)) ? Infinity : Number(a.chainId);
    const chainIdB = isNaN(Number(b.chainId)) ? Infinity : Number(b.chainId);
    return chainIdA - chainIdB;
});

// Save the result to a new file
const outputFilePath = 'combined_sorted_tokens.json';
fs.writeFileSync(outputFilePath, JSON.stringify(sortedTokens, null, 4));

console.log(`Combined data saved to ${outputFilePath}`);
