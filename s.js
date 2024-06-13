import path from 'path';
import fs from 'fs';

const getFileOwners = (dirpath, cb) => {
  fs.readdir(dirpath, (_error1, filenames) => {
    const readFileStat = (items, result = []) => {
      if (items.length === 0) {
        cb(null, result);
        return;
      }
      const [first, ...rest] = items;
      const filepath = path.join(dirpath, first);
      fs.stat(filepath, (_error2, stat) => {
        console.log(stat);
        readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
      });
    };
    readFileStat(filenames);
  });
};

getFileOwners('/Users/vladimirmastepanov/frontend-project-46/__fixtures__', (err, el) => console.log(el));
