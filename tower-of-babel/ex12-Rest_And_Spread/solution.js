const rawArgs = process.argv.slice(2);
const avg     = (...args) => args.reduce((a, b)=>a+b)/args.length;
const args    = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => val !== ''? args.push(+val) : null);
});


console.log(avg(...args));
