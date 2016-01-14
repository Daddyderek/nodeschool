const inputs = process.argv.slice(2);
const result = inputs.map(e => e[0])
                     .reduce((prev, next) => prev + next);

console.log(`[${ inputs }] becomes "${ result }"`);
