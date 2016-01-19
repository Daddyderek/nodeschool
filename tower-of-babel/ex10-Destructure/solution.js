const json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

const {
  birth: { day: birthDay },
  name: { family: familyName }
} = json;

console.log(birthDay);
console.log(familyName);
