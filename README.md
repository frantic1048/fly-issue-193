# flyjs/fly#193

For reproducing the issue, fly version is locked at **1.3.1** , newest version at `2016-08-19T01:33:47.824Z` .

Clone this repository, run `npm install` to install fly.

There are 3 npm script

- `npm run cc` :  clean output folder.
- `npm run p` :  run taks in parallel, with debug log output.
- `npm run s` :  run taks in serial, with debug log output.

Just run `npm run p` or `npm run s` when `dist` folder is not totally empty -- you can do `npm run p` then delete some file in `dist`, you'll see weird behavior.

See: flyjs/fly#193
