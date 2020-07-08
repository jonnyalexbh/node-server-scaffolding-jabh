const fs = require('fs');
const csv = require('fast-csv');

const name_file = process.argv[2];
const year = process.argv[3] || 2020;

const readStream = fs.createReadStream(name_file);

readStream.pipe(csv.parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => console.log(row))
  .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
