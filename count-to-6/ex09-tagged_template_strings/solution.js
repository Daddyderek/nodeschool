const escape = s => s.replace(/&/g, "&amp;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;")
                     .replace(/'/g, "&apos;")
                     .replace(/"/g, "&quot;");

const html = (pieces, ...subs) => {
  let result = pieces[0];

  subs.forEach((sub, i) => {
    result += escape(sub) + pieces[i + 1];
  });

  return result;
};

console.log(html`<b>${ process.argv[2] } says</b>: "${ process.argv[3] }"`);
