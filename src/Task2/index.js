import path from 'path';
import { csv } from 'csvtojson';

const csvFilePath = path.resolve(__dirname, 'csv/example.csv');
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });
