const fs = require('fs');

const generateEmptyJSON = (numEntries) => {
    const emptyJSON = Array.from({ length: numEntries }, (_, index) => ({
        id: index + 1,
        title: "",
        audioFile: ""
    }));

    return JSON.stringify(emptyJSON, null, 2);
};

const outputFile = 'empty_data.json';
const numEntries = 100;

fs.writeFileSync(outputFile, generateEmptyJSON(numEntries), 'utf-8');

console.log(`Empty JSON data generated and saved to ${outputFile}`);
