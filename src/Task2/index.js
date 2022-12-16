import path from 'path';
import fs from 'fs';
import { csv } from 'csvtojson';

const csvFilePath = path.resolve(__dirname, 'csv/example.csv');
const loggerPath = path.resolve(__dirname, 'csv/log.txt');

csv()
  .fromFile(csvFilePath)
  .subscribe(
    (lineData) => {
      return new Promise((resolve, reject) => {
        const logger = fs.createWriteStream(loggerPath, {
          flags: 'a'
        });

        logger.on('error', function (err) {
          console.log('ERROR:' + err);
          reject();
        });

        resolve(logger.write(JSON.stringify(lineData) + '\n'));
      });
    },
    (err) => {
      console.error(err);
    },
    () => {
      console.log('DONE !');
    }
  );
