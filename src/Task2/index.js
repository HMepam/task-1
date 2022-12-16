import csv from 'csvtojson';

const csvFilePath = 'csv/example.csv';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });
