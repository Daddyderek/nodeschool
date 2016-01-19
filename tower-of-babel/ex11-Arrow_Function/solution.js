const inputs = process.argv.slice(2);
const result = inputs.map(i => i[0])
                     .reduce((sum, next) => sum += next);

console.log(result);
